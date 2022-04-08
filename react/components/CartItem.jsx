import styled from "styled-components";
import { useContext } from "react";

/**
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
export const CartItem = function ({ cartItem }) {
  return (
    <CartItemContainer>
      <img src="/uploads/trash.svg" alt="Supprimer ce produit" />
      <CartItemDetail>
        <p>{cartItem.product.name}</p>
        <p>({cartItem.quantity})</p>
      </CartItemDetail>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 12px;

  & img {
    width: 10px;
    height: auto;
    filter: invert(39%) sepia(61%) saturate(3699%) hue-rotate(210deg)
      brightness(100%) contrast(93%);
  }
`;

const CartItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 8px;
  border-bottom: 1px solid #e3e3e3;
`;
