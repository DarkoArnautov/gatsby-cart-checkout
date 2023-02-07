import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Context } from "../common/context.js";
import CoolCatWidget from "../CoolCatWidget/index.js";
import CartProduct from "./CartProduct.js";

import CloseIcon from "../../images/svg/close.svg"
import device from "../common/device.js";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ProductsList = styled.div`
  position: relative;
	border: ${props => props.border};
  border-radius: 9px;
	padding: ${props => props.padding};
  max-height: ${props => props.maxHeight};
  overflow-y: auto;
  background: #ffffff;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    border-radius: 8px;
    background: rgba(0, 0, 0, .3);
    width: 2px;
    margin-right: -5px;
  }
`

const PriceSum = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    
    span {
      font-size: 18px;
      line-height: 25px;
      color: #000000;
    }

    .label {
      font-weight: 300;
      opacity: 0.5;
    }
    .value {
      font-weight: 350;
    }
    &.total {
      margin-top: 20px;
      margin-bottom: 0;
      span {
        font-size: 25px;
        font-weight: 500;
      }
      .currency {
        opacity: 0.5;
        margin-right: 10px;
      }
    }
  }
`;

const CartButton = styled.button`
	position: relative;
	width: calc(100% - 27px);
	background: #000000;
	color: #ffffff;	
	font-size: 30px;
	line-height: 45px;
	font-weight: 400;
	margin-top: ${props => props.mt};
	margin-bottom: ${props => props.mb};
  outline: none;
  border: 0;

	&::after {
		content: "";

		position: absolute;
		top: 0;
		left: 100%;
		
		border: 23px solid black;
		
		border-left-color: black;
		border-right-color: transparent;
		border-top-color: transparent;
		border-bottom-color: transparent;
		
		width: 0;
		height: 0;
		
		margin: 0 auto;
	}
`;

const BottomWrap = styled.div`
  position: absolute;
  bottom: 35px;
  left: 0;
  width: 100%;
`

const PromoCodeWrap = styled.div`
  margin: 15px 0 25px;

  p {
    font-weight: 350px;
    text-align: center;
  }

  span {
    text-decoration: underline;
    margin-right: 5px;

    &:hover {
      cursor: pointer;
    }
  }
`
const PromoCodeApply = styled.div`
  width: 100%;
  margin: 15px 0 25px;

  .apply-form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: calc(100% - 125px);
      border: 1px solid #A0A0A0;
      border-radius: 2px;
      padding: 5px 10px;
      font-size: 20px;
      line-height: 1;
      height: 40px;
    }
    button {
      width: 116px;
      font-size: 20px;
      line-height: 1;
      padding: 5px 10px;
      text-align: center;
      text-transform: uppercase;
      background: #F1EEE9;
      border: 1px solid #A0A0A0;
      border-radius: 4px;
      height: 40px;
    }
  }
  .code-list {
    display: flex;
    gap: 5px;
    margin-top: 15px;
    flex-wrap: wrap;
  }
`

const DiscountCode = styled.div`
  display: flex;
  align-items: center;
  background: #F1EEE9;
  border-radius: 12px;
  font-size: 14px;
  line-height: 25px;
  padding: 0 7px;
  width: fit-content;

  .close-icon {
    width: 15px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: 15px;
    }
  }

  &:hover {
    cursor: pointer;
  }
`


const ProductsInCart = ({ checkout = false }) => {
	const [cartContext, setCartContext] = useContext(Context);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState(null);
  const [visiblePromo, setVisiblePromo] = useState(false);
  const [subTotalPrice, setSubTotalPrice] = useState(0)

  const discountCodeList = ["LAUNCH15OFFEVERYTHING", "FLUFFY12"];

  const applyCode = () => {
    let discountValue = 0

    /* set static value  witth $22 for any discount code*/
        if(discountCode) {
      discountValue = 22 
    }
    setDiscount(22);
  }

  /* define this function for the child component(:<Product>) that is handling amount */
  const handleSubTotal = (newVal, symbol) => {
    let sum = subTotalPrice;
    if(symbol === "-") {
      sum = sum - Number(newVal);
    } else {
      sum = sum + Number(newVal);
    }
    
    setSubTotalPrice(sum);
  }

  useEffect(() => {
    console.log(cartContext)
    let sum = 0;
    for( let i = 0; i < cartContext.length; i ++) {
      sum = sum + cartContext[i].price * cartContext[i].amount;
    }
    setSubTotalPrice(sum);
  }, [])

	return(
    <>
      {cartContext.length > 0 && subTotalPrice !== 0 ? (
        <Wrapper>
          <ProductsList
            border={checkout ? "1px solid #9E9E9E" : "0"}
            padding={checkout ? "25px 15px 30px" : "0"}
            maxHeight={checkout ? "auto" : "calc(100vh - 350px)"}
          >
            {cartContext.map((item, i) => {
              if(item.amount > 0) {
                return(
                  <CartProduct data={item} key={i} subTotalPriceChange={handleSubTotal} />                  
                );
              } else {
                return
              }
              
            })}
            <>
            { !visiblePromo ? (
              <PromoCodeWrap>
                <p>Promo Code? <span onClick={() => setVisiblePromo(true)}>Enter Code</span></p>
              </PromoCodeWrap>
            ):(
              <PromoCodeApply>
                <div className="apply-form">
                  <input 
                    type="text"
                    id="code"
                    placeholder="Coupon Code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    required
                  />
                  <button onClick={() => applyCode()}>Apply</button>
                </div>
                <div className="code-list">
                {
                  discountCodeList.map((code) => (
                    <DiscountCode onClick={() => setDiscountCode(code)}>
                      {code}<span className="close-icon"><CloseIcon /></span>
                    </DiscountCode>
                  ))
                }
                </div>
              </PromoCodeApply>
            )}
            </>
            
            {checkout ? (
              <PriceSum>
                <div>
                  <span className="label">Subtotal</span>
                  <span className="value">${subTotalPrice.toFixed(2)}</span>
                </div>
                <div>
                  <span className="label">Shipping</span>
                  <span className="value">calculated next step</span>
                </div>
                {discount !== 0 && (
                  <div>
                    <span className="label">Discounts</span>
                    <span className="value">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="total">
                  <span>TOTAL</span>
                  <span>
                    <span className="currency">AUD</span>
                    <span>${(subTotalPrice - discount).toFixed(2)}</span>
                  </span>
                </div>
              </PriceSum>
            ) : (
              <CoolCatWidget />
            )}
            
          </ProductsList>
          {checkout ? (
            <>
              <CartButton mt="22px" mb="22px">Pay now</CartButton>
              <CoolCatWidget />
            </>
          ):(
            <BottomWrap>
              <PriceSum>
                <div>
                  <span className="label">Subtotal</span>
                  <span className="value">${subTotalPrice.toFixed(2)}</span>
                </div>
                <div>
                  <span className="label">Shipping</span>
                  <span className="value">calculated next step</span>
                </div>
                {discount !== 0 && (
                  <div>
                    <span className="label">Discounts</span>
                    <span className="value">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="total">
                  <span>TOTAL</span>
                  <span>
                    <span className="currency">AUD</span>
                    <span>${(subTotalPrice - discount).toFixed(2)}</span>
                  </span>
                </div>
              </PriceSum>
              <Link to="/checkout">
                <CartButton mt="15px" mb="22px">Checkout now</CartButton>
              </Link>
            </BottomWrap>
          )}
        </Wrapper>
      ):(
        <p>There’s nothing for your poor cat in your cart!</p>
      )}
    </>
	)
}

export default ProductsInCart;