// localStorageHandler.js

// Function to save cart items to local storage
export const saveCartItems = (cartItems:any) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
  // Function to load cart items from local storage
  export const loadCartItems = () => {
    const savedCartItems = typeof window !== "undefined" ? window.localStorage.getItem("cartItems"):false;
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  };
  
  // Function to save saved items to local storage
  export const saveSavedItems = (savedItems:any) => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  };
  
  // Function to load saved items from local storage
  export const loadSavedItems = () => {
    const savedItems =  typeof window !== "undefined" ? window.localStorage.getItem("savedItems"):false;
    return savedItems ? JSON.parse(savedItems) : [];
  };
  