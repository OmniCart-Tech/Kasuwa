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
  const [savedItems, setSavedItems] = useState<any>([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [notification, setNotification] = useState("");
  const [notificationAction, setNotificationAction] = useState("");
  const [notificationVisibles, setNotificationVisible] = useState(false);
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

  const showNotification = (message: any) => {
    setNotification(message);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotification("");
      setNotificationVisible(false);
    }, 3000);
  };

  const addToCart = (product: any, count: number) => {
    const itemWithCount = { ...product, quantity: count };
    setCartItems([...cartItems, itemWithCount]);
    showNotification(product.name);
    setNotificationAction("added to cart");
  };

  const addToSavedItems = (product: any) => {
    setSavedItems([...savedItems, product]);
    showNotification(product.title);
    setNotificationAction("added to saved items");
  };

  const removeFromSavedItems = (title: string, item: any) => {
    const updatedSavedItems = savedItems.filter(
      (savedItem: any) => savedItem !== item
    );
    setSavedItems(updatedSavedItems);
    showNotification(title);
    setNotificationAction("removed from saved items");
  };

  const removeFromCart = (title: string, cartItemIndex: number) => {
    const updatedCart = cartItems.filter(
      (_cartItem: any, index: number) => index !== cartItemIndex
    );
    setCartItems(updatedCart);
    showNotification(title);
    setNotificationAction("removed from cart");
  };

  const increaseQuantity = (index: number) => {
    const updatedCartItems = cartItems.map((item: any, i: any) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index: number) => {
    const updatedCartItems = cartItems.map((item: any, i: any) =>
      i === index ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
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
        increaseQuantity,
        decreaseQuantity,
        savedItems,
        setSavedItems,
        addToSavedItems,
        removeFromSavedItems,
        showNotification,
        setNotification,
        setNotificationAction,
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
