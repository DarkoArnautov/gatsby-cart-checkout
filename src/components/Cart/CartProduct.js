import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

import ProductImage from "../ProductImage";

import { Context } from "../common/context";

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 0.5px dashed #000000;
  padding: 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  .image-wrapper {
    width: 100px;
  }
  .text-wrapper {
    width: calc(100% - 125px);

    .product-name {
      margin-bottom: 10px;
    }
  }
`

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price {
    margin-bottom: 0;
  }
`

const OrderNumberWrap = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #000000;
  border-radius: 3px;

  button {
    font-size: 20px;
    line-height: 1;
    width: 30px;
    padding: 5px;
    outline: none;
    background: none;
    border: 0;

    &:cursor: pointer;
  }
  .ordered-number {
    width: auto;
    text-align: center;
    margin: 0;
    ine-height: 1;
    padding: 5px 10px;
    border-left: 0.5px solid #AFAFAF;
    border-right: 0.5px solid #AFAFAF;
  }
`

const CartProduct = ({ data }) => {
  const [amount, setAmount] = useState(data.amount);
  const [cartContext, setCartContext] = useContext(Context);

  const decrease = () => {
    setAmount(amount - 1);
  }

  const increase = () => {
    setAmount(amount + 1);
  }

  useEffect(() => {
    let updatedData = cartContext;
    const upd_index = updatedData.findIndex((obj => obj.id = data.id));

    if(amount === 0) {
      updatedData.splice(upd_index, 1);
    } else {
      updatedData[upd_index].amount = amount;
    }

    setCartContext(updatedData);

  }, [amount, setAmount]);

  return(
    <>
      {amount > 0 && (
        <Wrapper>
          <div className="image-wrapper">
            <ProductImage path={data.image} alt={data.name} />
          </div>
          <div className="text-wrapper">
            <p className="product-name">{data.name}</p>
            <PriceRow>
              <OrderNumberWrap>
                <button onClick={()=>decrease()}>-</button>
                <p className="ordered-number">{amount}</p>
                <button onClick={()=>increase()}>+</button>
              </OrderNumberWrap>
              <p className="price">${(amount * data.price).toFixed(2)}</p>
            </PriceRow>
          </div>
        </Wrapper>
      )}
    </>
    
  );
};

export default CartProduct