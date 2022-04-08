import { useState, useEffect } from "react";
import styled from "styled-components";
import {UseFetch} from "../hooks/UseFetch";

export const Categories = function ({ setCategory }) {
  const defaultCategory = { id: 0, name: "Tout" };
  const {isLoading, apiData} = UseFetch('/api/categories');

  return (
    <>
      <CategorySelection
        onChange={(e) => setCategory(parseInt(e.target.value))}
      >
        {! isLoading && [defaultCategory, ...apiData] .map((category) => (
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
  color: ${({ theme }) => theme.components.textColor};
`;
