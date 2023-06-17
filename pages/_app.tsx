//million-ignore
"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import Nav from "@/components/nav";
import { useRouter } from "next/router";
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

  const saveCartItems = (cartItems: any) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  const loadCartItems = () => {
    const savedCartItems =
      typeof window !== "undefined"
        ? window.localStorage.getItem("cartItems")
        : false;
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  };
  const saveSavedItems = (savedItems: any) => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  };
  const loadSavedItems = () => {
    const savedItems =
      typeof window !== "undefined"
        ? window.localStorage.getItem("savedItems")
        : false;
    return savedItems ? JSON.parse(savedItems) : [];
  };
  const FetchProducts = async () => {
    try {
      const allProduct = await fetch(API_URL + "/products");
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

  useEffect(() => {
    const loadedCartItems = loadCartItems();
    const loadedSavedItems = loadSavedItems();
    setCartItems((prevCartItems: any) => [...prevCartItems, ...loadedCartItems]);
    setSavedItems((prevSavedItems: any) => [...prevSavedItems, ...loadedSavedItems]);
  }, []);

  useEffect(() => {
    saveCartItems(cartItems);
    saveSavedItems(savedItems);
  }, [cartItems, savedItems]);

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
  const router = useRouter();
  return (
    <NextUIProvider>
      <AppContext.Provider
        value={{
          cartItems, setCartItems, addToCart, list, removeFromCart,
          isNavOpen, setIsNavOpen, count, setCount,
          increaseQuantity, decreaseQuantity, savedItems, setSavedItems,
          addToSavedItems, removeFromSavedItems, showNotification,
          setNotification, setNotificationAction,
        }}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kasuwa</title>
          <link rel="icon" href="/icon.svg?<generated>" type="image/<generated>" sizes="<generated>" />
        </Head>
        {!router.pathname.includes("auth/") &&
          !router.pathname.includes("seller/sellerForm") && <Nav />}
        <Component {...pageProps} />
        {!router.pathname.includes("auth/") && <Footer />}
      </AppContext.Provider>
    </NextUIProvider>
  );
}

export default App;
