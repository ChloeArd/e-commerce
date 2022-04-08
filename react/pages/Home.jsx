import { Cart } from "../components/Cart";
import { Categories } from "../components/Categories";
import { useState, useEffect } from "react";
import { ProductsList } from "../components/PoductsList";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";

export const Home = function () {
  const [category, setCategory] = useState(0);

  // Set title.
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <HomePage>
        <CartContext>
          <Cart />
          <div className="app-main">
            <Categories setCategory={setCategory} />
            <ProductsList category={category} />
          </div>
        </CartContext>
      </HomePage>
    </>
  );
};

const HomePage = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 80px;
  align-items: flex-start;

  & > div {
    max-width: 800px;
  }
`;
