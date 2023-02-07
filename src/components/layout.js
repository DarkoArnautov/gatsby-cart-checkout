/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Cart from "./Cart"
import { Context } from "./common/context.js";

import "../styles/layout.css"

const Layout = ({ children, checkout = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  /* Static Products data in the cart */
  const addedCartProducts = [
    {
      id: 1,
      name: 'Bouclé Bungalow “Creme” Cover',
      amount: 1,
      price: '239.50',
      image: "/images/products/product-1.png"
    },
    {
      id: 2,
      name: 'Replacement Cover in “Catnip”',
      amount: 2,
      price: '129.00',
      image: "/images/products/product-2.png"
    },
  ]

  const [visibleCart, setVisibleCart] = useState(false);

  /** CartContext - this context can be used in all pages for the change of cart list */
  const [cartContext, setCartContext] = useState(addedCartProducts);

  const showCart = () => {
    setVisibleCart(true)
  }

  const hideCart = () => {
    setVisibleCart(false)
  }
  
  return (
    <Context.Provider value={[cartContext, setCartContext]}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} openCart={showCart} checkout={checkout} />
      <Cart visible={visibleCart} closeCart={hideCart} />
      <main>{children}</main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Context.Provider>
  )
}

export default Layout
