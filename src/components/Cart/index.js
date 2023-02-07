import React, { useState, useContext } from "react";
import styled from "styled-components";

import ProductListInCart from "./ProductListInCart";
import { Context } from "../common/context"
import device from "../common/device";

import CloseIcon from "../../images/svg/close.svg"

const CartWrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 375px;
  height: 100vh;
  right: -375px;
  top: 0;
  background: #ffffff;
  padding: 30px 15px;
  transform: ${props => props.visible ? "translateX(-375px)": "none"};
  transition: all linear 0.3s;

  .cart-header {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
    margin-top: 0;

    .close-icon {
      position: absolute;
      top: 0px;
      left: 0;

      :hover{
        cursor: pointer;
      }
    }
  }

  @media ${device.phoneL} {
    padding: 40px 15px;

    .cart-header {
      font-size: 35px;

      .close-icon {
        top: 5px;
        left: 0;
      }
    }
  }
  
`;

const Cart = ({visible, closeCart, location }) => {

  const [cartContext, setCartContext] = useContext(Context)

  return(
    <CartWrapper visible={visible}>
      <h2 className="cart-header">
        <span className="close-icon" onClick={() => closeCart()}><CloseIcon /></span>
        Your Cart
      </h2>
      {cartContext.length > 0 ? (
        <ProductListInCart location={location} />
      ): (
        <p>There’s nothing for your poor cat in your cart!</p>
      )}
      
    </CartWrapper>
  )
}

export default Cart;