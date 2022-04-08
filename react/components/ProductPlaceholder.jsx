import imagePlaceholder from "../../assets/images/product-placeholder.png";
import styled from "styled-components";
import {
  ProductContainer,
  ProductImage,
  ProductContent,
  ProductName,
  ProductDescription,
  ProductFooter,
  ProductStock,
  QuantitySelector,
  MinusButton,
  PlusButton,
} from "./Product";

export const ProductPlaceholder = function () {
  return (
    <Placeholder>
      <ProductContainer>
        <ProductImagePlaceholder>
          <img src={imagePlaceholder} alt="Image loading" />
        </ProductImagePlaceholder>

        <ProductContent>
          <ProductName>Un super produit placeholder :-)</ProductName>
          <ProductDescription>Super description placeholder</ProductDescription>

          <ProductFooter>
            <div>
              <ProductStock>
                En stock: <span>55555</span>
              </ProductStock>
              <QuantitySelector>
                <MinusButton />
                <PlusButton />
              </QuantitySelector>
            </div>
          </ProductFooter>
        </ProductContent>
      </ProductContainer>
    </Placeholder>
  );
};

const ProductImagePlaceholder = styled(ProductImage)`
  & img {
    border-radius: 5px;
  }
`;

const Placeholder = styled.div`
  & * {
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(4px);
  }
`;
