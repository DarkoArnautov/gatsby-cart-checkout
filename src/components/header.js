import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../images/svg/catstreet-logo.svg"
import device from "./common/device";

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 15px;
  margin: 30px auto 0;

  svg {
    width: 180px;
    height: 50px;
  }

  @media${device.tablet} {
    padding: 16px 30px;
  }
`;

const CartButton = styled.button`
  outline: none;
  border: 0;
  font-size: 24px;
  background: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Header = ({ siteTitle, openCart, checkout }) => (
  <HeaderWrapper>
    <Link to="/">
      <Logo />
    </Link>
    {!checkout && (
      <CartButton onClick={()=>openCart()}>
        Cart
      </CartButton>
    )}
  </HeaderWrapper>
)

export default Header
