import { CartItem } from "./CartItem";
import { useState, useEffect, useContext } from "react";
import { Loader } from "./Loader";
import styled from "styled-components";
import { CartContextProvider } from "../context/CartContext";

export const Cart = function () {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { cartUpdated, setCartUpdated } = useContext(CartContextProvider);

  /**
   * Récupération du Cart actuel.
   */
  useEffect(() => {
    async function getCart() {
      setIsLoading(true);
      const response = await fetch("/api/cart");
      const data = await response.json();
      setCartItems(data.cartItems);
      setCartUpdated(false);
      setIsLoading(false);
    }

    getCart().catch(() => setIsLoading(false));
  }, [cartUpdated]);

  /**
   * Supression du cart
   * @param e
   */
  async function handleClick(e) {
    await fetch("/api/cart/delete", { method: "post" });
    setCartUpdated(true);
  }

  return (
    <CartContainer>
        <h2>Vos articles</h2>

      <CartContent>
        {isLoading ? (
          <Loader />
        ) : (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.product.id} cartItem={cartItem} />
          ))
        )}
      </CartContent>

      <CartFooter>
        <button onClick={handleClick}>Vider le panier</button>
      </CartFooter>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  min-height: 280px;
  min-width: 125px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.components.background};
  color: ${({ theme }) => theme.components.textColor};
  
  & > h2 {
    font-size: 12px;
    flex-basis: 5%;
  }
`;

const CartContent = styled.div`
  flex-basis: 73%;
  padding: 3px;
  width: 100%;
`;

const CartFooter = styled.div`
  align-self: flex-end;
  
  & > button {
    background-color: white;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    font-size: 8px;
    padding: 3px 10px;
  }
`;
