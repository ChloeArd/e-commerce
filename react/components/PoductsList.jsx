import { Product } from "./Product";
import { useEffect, useState } from "react";
import { ProductPlaceholder } from "./ProductPlaceholder";
import styled from "styled-components";

export const ProductsList = function ({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fethching products.
  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      const response = await fetch("/api/products");
      setProducts(await response.json());
      setIsLoading(false);
    }
    getProducts().catch(() => setIsLoading(false));
  }, []);

  return (
    <ProductListContainer>
      {isLoading
        ? [1, 2, 3, 4, 5].map((index) => <ProductPlaceholder key={index} />)
        : products
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
