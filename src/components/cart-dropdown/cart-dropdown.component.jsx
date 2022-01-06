import React from "react";
import { connect } from "react-redux";

import {
  CartDropDownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropDownContainer>
);

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStatetoProps)(CartDropdown));
