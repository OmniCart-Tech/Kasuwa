"use client";
import type { AppProps } from "next/app";
import Nav from "@/components/nav";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import { AppContext } from "@/utils/AppContext";
import Head from "next/head";
import "../app/globals.css";

function App({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState<any>([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  const API_URL = "https://kasuwa-b671.onrender.com";

  const FetchProducts = async () => {
    try {
      const allProduct = await fetch(`${API_URL}/products`);
      const allProductRes = await allProduct.json();
      setList(allProductRes);
    } catch (error) {
      // Error handled silently
    }
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  const addToCart = (product: any, count: number) => {
    const itemWithCount = { ...product, quantity: count };
    setCartItems([...cartItems, itemWithCount]);
  };

  const removeFromCart = (title: string, cartItemIndex: number) => {
    const updatedCart = cartItems.filter(
      (_cartItem: any, index: number) => index !== cartItemIndex
    );
    setCartItems(updatedCart);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        list,
        removeFromCart,
        isNavOpen,
        setIsNavOpen,
        count,
        setCount,
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kasuwa</title>
        <link
          rel="icon"
          href="/icon.svg?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
