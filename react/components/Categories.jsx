import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

export const Categories = function ({ setCategory }) {
  const [categories, setCategories] = useState([]);
  const defaultCategory = { id: 0, name: "Tout" };

  useEffect(() => {
    async function getCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories([defaultCategory, ...data]);
    }
    getCategories().catch(() =>
      console.log("Erreur de récupération de scatégories :-)")
    );
  }, []);

  return (
    <>
      <CategorySelection
        onChange={(e) => setCategory(parseInt(e.target.value))}
      >
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </option>
        ))}
      </CategorySelection>
    </>
  );
};

const CategorySelection = styled.select`
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  font-size: 11px;
  padding: 3px 8px;
  min-width: 200px;
  background-color: ${({ theme }) => theme.components.background};
`;
