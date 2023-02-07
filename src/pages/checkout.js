import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import device from "../components/common/device"
import ProductListInCart from "../components/Cart/ProductListInCart"

const PageTitle = styled.h1`
  font-size: 60px;
  line-height: 72px;
  margin-top: -50px;
  text-align: center;
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;

  h2 {
    font-size: 40px;
    line-height: 60px;
    margin: 0 0 17px;
  }
  @media ${device.phoneL} {
    padding: 0 30px;
  }

  @media ${device.tablet} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;

const InfoWrap = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: calc(100% - 400px);
  }
  @media ${device.lapTop} {
    width: calc(100% - 450px);
  }
  @media ${device.desktop} {
    width: calc(100% - 500px);
  }
`

const CartWrap = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 375px;
  }
`

const CheckoutPage = () => (
  <Layout checkout>
    <PageTitle>Checkout</PageTitle>
    <Container>
      <InfoWrap>
        <h2>Your details</h2>
      </InfoWrap>
      <CartWrap>
        <h2>Your order</h2>
        <ProductListInCart checkout />
      </CartWrap>
    </Container>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default CheckoutPage
