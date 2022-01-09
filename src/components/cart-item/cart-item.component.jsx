import React from "react";
import {
  CartItemDetails,
  CartItemImage,
  CartItemName,
  CartItemContainer,
} from "./cart-item.styles.jsx";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDetails>
      <CartItemName>{name}</CartItemName>
      <span className="price">
        {quantity} x ${price}
      </span>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
