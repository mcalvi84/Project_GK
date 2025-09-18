import React, { createContext, useState, useContext } from 'react';  

const CartContext = createContext();  

export const CartProvider = ({ children }) => {  
  const [cart, setCart] = useState([]);  

  const addToCart = (product) => {  
    setCart((prev) => {  
      const existing = prev.find((item) => item.id === product.id);  
      if (existing) {  
        return prev.map((item) =>  
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item  
        );  
      }  
      return [...prev, { ...product, quantity: 1 }];  
    });  
  };  

  const removeFromCart = (id) => {  
    setCart((prev) => prev.filter((item) => item.id !== id));  
  };  

  const updateQuantity = (id, quantity) => {  
    if (quantity <= 0) {  
      removeFromCart(id);  
      return;  
    }  
    setCart((prev) =>  
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))  
    );  
  };  

  const value = {  
    cart,  
    addToCart,  
    removeFromCart,  
    updateQuantity  
  };  

  return (  
    <CartContext.Provider value={value}>  
      {children}  
    </CartContext.Provider>  
  );  
};  

export const useCart = () => {  
  const context = useContext(CartContext);  
  if (!context) {  
    throw new Error('useCart must be used within a CartProvider');  
  }  
  return context;  
};