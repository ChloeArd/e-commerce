import { Product } from "./Product";
import { ProductPlaceholder } from "./ProductPlaceholder";
import styled from "styled-components";
import {UseFetch} from "../hooks/UseFetch";

export const ProductsList = function ({ category }) {

  // Fethching products.
  const {isLoading, apiData} = UseFetch('/api/products');

  return (
    <ProductListContainer>
      {isLoading
        ? [1, 2, 3, 4, 5].map((index) => <ProductPlaceholder key={index} />)
        : apiData
            .filter(
              (product) => category === 0 || product.category.id === category
            )
            .map((product) => <Product key={product.id} product={product} />)}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 25px 0 0;
`;
