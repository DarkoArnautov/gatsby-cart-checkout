import React, { useState } from "react"
import styled from "styled-components"
import { CountryDropdown } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


import Layout from "../components/layout"
import Seo from "../components/seo"
import device from "../components/common/device"
import ProductListInCart from "../components/Cart/ProductListInCart"

import CloseIcon from "../images/svg/close.svg"

const PageTitle = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  margin-top: 0px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;

  @media ${device.phoneL} {
    margin-top: -80px;
    font-size: 50px;
  }

  @media ${device.tablet} {
    margin-top: -80px;
    font-size: 60px;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  h2 {
    font-size: 30px;
    line-height: 1.5;
    margin: 0 0 5px;
  }
  @media ${device.phoneL} {
    padding: 0 30px;

    h2 {
      font-size: 35px;
    }
  }

  @media ${device.tablet} {
    flex-wrap: nowrap;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      margin-bottom: 15px;
    }
  }

  @media ${device.desktop} {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;

const InfoWrap = styled.div`
  width: 100%;

  .row {
    position: relative;
    width: 100%;
    margin-bottom: 25px;
  }

  .flex-row {
    position: relative;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 25px;

    .col {
      width: 100%;
    }

    .react-tel-input {
      width: 100%;

      .form-control {
        width: 100%;
      }

      .flag-dropdown {
        border: 0.5px solid #9C9C9C;
        border-radius: 0;
        border-bottom: 1px solid #000000;
      }

      input {
        width: 100%;
        font-size: 20px;
        line-height: 1;
        color: #424141;
        border: 0;
        background: none;
        border-bottom: 1px solid #000000;
        margin-bottom: 5px;
        border-radius: 0;

        &:focus {
          background: #ffffff;
          outline: none;
          border: 0;
          border-bottom: 1px solid #000000;
        }
      }
      
    }
  }

  .reset {
    position: absolute;
    bottom: 0;
    right: 0;
    outline: none;
    border: 0;
    text-decoration-line: underline;
    font-size: 20px;
    color: #4B4B4B;

    &:hover {
      cursor: pointer;
    }
  }
  
  label {
    font-size: 14px;
    color: #585858;
    line-height: 1.3;
  }

  input {
    width: 100%;
    font-size: 20px;
    line-height: 1;
    padding: 6px 5px 7px;
    color: #424141;
    border: 0;
    background: none;
    border-bottom: 1px solid #000000;
    margin-bottom: 5px;

    &:focus {
      background: #ffffff;
      outline: none;
      border: 0;
      border-bottom: 1px solid #000000;
    }
  }

  textarea {
    width: 100%;
    font-size: 20px;
    line-height: 1.3;
    padding: 6px 5px 7px;
    color: #424141;
    border: 0;
    background: none;
    border-bottom: 1px solid #000000;
    margin-bottom: 5px;

    &:focus {
      background: #ffffff;
      outline: none;
      border: 0;
      border-bottom: 1px solid #000000;
    }
  }

  .country-selector {
    width: 100%;
  }

  select {
    width: 100%;
    font-size: 20px;
    line-height: 1;
    padding: 6px 5px 7px 0;
    color: #424141;
    border: 0;
    background: none;
    border-bottom: 1px solid #000000;

    &:focus {
      background: #ffffff;
      border: 0;
      border-bottom: 1px solid #000000;
    }
  }

  .phone-number-description {
    margin-top: -35px;
  }

  .delivery-info {
    margin-top: 40px;
  }

  .show-shipping-info {
    position: absolute;
    bottom: -35px;
    right: 0;
    outline: none;
    border: 0;
    text-decoration-line: underline;
    font-size: 20px;
    color: #4B4B4B;

    &:hover {
      cursor: pointer;
    }
  }

  .radio-row {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #000000;
    padding: 5px 0;

    input[type="radio"] {
      appearance: none;
      background-color: #fff;
      margin: 0;
      font: inherit;
      color: currentColor;
      width: 1.15em;
      height: 1.15em;
      border: 0.15em solid currentColor;
      border-radius: 50%;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;
    }

    input[type="radio"]::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--form-control-color);
      background-color: CanvasText;
    }
    
    input[type="radio"]:checked::before {
      transform: scale(1);
    }
    input[type="radio"]:focus {
      outline: max(1px, 1px) solid currentColor;
    }

    label {
      width: calc(75% - 40px);
      margin-left: 20px;
      font-size: 20px;
      line-height: 38px;
      color: #424141;
    }

    .value {
      width: 25%;
      font-size: 20px;
      line-height: 38px;
      text-align: right;
      color: #424141;
      margin-bottom: 0;
    }
  }

  .payments {
    margin-top: 50px;
  }

  @media ${device.tablet} {
    width: calc(100% - 370px);
    input {
      font-size: 25px;
    }
    select {
      font-size: 25px;
    }
    label {
      font-size: 25px;
    }
    textarea {
      font-size: 25px;
    }
    .value {
      font-size: 25px;
    }
  }

  @media ${device.lapTop} {
    width: calc(100% - 400px);

    label {
      font-size: 16px;
    }
    .flex-row {
      flex-wrap: wrap;

      .col {
        width: 100%;
      }
    }
    
  }
  @media ${device.lapTop} {
    width: calc(100% - 450px);

    .country-selector {
      width: calc(50% - 20px);
    }

    .flex-row {
      .col {
        width: calc(50% - 20px);
      }
    }

    label {
      font-size: 20px;
    }
    .phone-number-description {
      margin-top: 0;
    }
  }
  @media ${device.desktop} {
    width: calc(100% - 500px);
  }
`
const CartWrap = styled.div`
  width: 100%;
  margin-top: 50px;

  @media ${device.tablet} {
    width: 350px;
    margin-top: 0;
  }

  @media ${device.lapTop} {
    width: 375px;
  }
`

const ShippingPopup = styled.div`
  position: fixed;
  z-index: 101;
  width: 90%;
  top: -500px;
  transform: ${props => props.transform};
  transition: transform linear 0.3s;
  height: 300px;
  left: 5%;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 9px;
  padding: 30px;

  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;

    svg {
      width: 10px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media ${device.tablet} {
    width: 70%;
    left: 15%;
  }
`


const CheckoutPage = () => {
  const [country, setCountry] = useState();
  const [address, setAddress] = useState(null);
  const [showShippingInfoModal, setShowShippingInfoModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState()

  const clearAddress = () => {
    setAddress("");
    if(typeof window !== "undefined") {
      document.getElementById("delivery_address").focus();
    }    
  }

  const showModal = () => {
    setShowShippingInfoModal(true);
  }

  const closeModal = () => {
    setShowShippingInfoModal(false);
  }

  return(
    <Layout checkout>
      <PageTitle>Checkout</PageTitle>
      <Container>
        <InfoWrap>
          <h2>Your details</h2>
          <div className="row">
            <input type="email" id="email" name="email" required />
            <label>your email</label>
          </div>
          <div className="flex-row">
            <div className="col phone-input">
              <PhoneInput
                country={'au'}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true
                }}
                value={phoneNumber}
                onChange={phone => setPhoneNumber(phone)}
              />
              <label>mobile phone</label>
            </div>
            <div className="col phone-number-description">
              <label>Your phone number is required for delivery & shipping updates.</label>
            </div>
          </div>
          <div className="flex-row">
            <div className="col">
              <input type="text" id="first_name" name="first_name" required />
              <label>first name</label>
            </div>
            <div className="col">
              <input type="text" id="last_name" name="last_name" required />
              <label>last name</label>
            </div>
          </div>
          <h2 className="delivery-info">Delivery Details</h2>
          <div className="row country-selector">
            <CountryDropdown
              value={country}
              onChange={(val) => setCountry(val)} 
            />
            <label>country</label>
          </div>
          <div className="row">
            <textarea
              type="textarea"
              rows="2"
              id="delivery_address"
              name="delivery_address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label>delivery address</label>
            <span className="reset" onClick={() => clearAddress()}>change</span>
          </div>
          <div className="row">
            <div className="radio-row">
              <input type="radio" id="shipping" name="shipping" value="0"/>
              <label>Free Shipping</label>
              <p className="value">$0.00</p>
            </div>
            <div className="radio-row">
              <input type="radio" id="shipping" name="shipping" value="10"/>
              <label>Standard Shipping</label>
              <p className="value">$10.00</p>
            </div>
            <div className="radio-row">
              <input type="radio" id="shipping" name="shipping" value="25.3"/>
              <label>Express Shipping</label>
              <p className="value">$25.30</p>
            </div>
            <span className="show-shipping-info" onClick={() => showModal()}>about shipping</span>
          </div>
          <h2 className="payments">Payment Details</h2>
        </InfoWrap>
        <CartWrap>
          <h2>Your order</h2>
          <ProductListInCart checkout />
        </CartWrap>
      </Container>
      <ShippingPopup transform={showShippingInfoModal ? "translateY(700px)" : "none"}>
        <span className="close-icon" onClick={() => closeModal()}><CloseIcon /></span>
        <h3>various shipping information</h3>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
      </ShippingPopup>
    </Layout>
  );
}

export const Head = () => <Seo title="Page two" />

export default CheckoutPage
