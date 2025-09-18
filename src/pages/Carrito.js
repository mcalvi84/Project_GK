import React from 'react';  
import { Link } from 'react-router-dom';  
import Cart from '../components/Cart';  
import { useCart } from '../contexts/CartContext';  

const Carrito = () => {  
  const { cart } = useCart();  
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);  

  const handleCheckout = () => {  
    if (cart.length === 0) return;  
    // Para MercadoPago, configura tu clave pública en el hook y backend para preferencias  
    alert('¡Listo para pagar! Configura MercadoPago con tu clave para activar el pago real.');  
    // Aquí iría la integración completa una vez configurada  
  };  

  return <Cart onCheckout={handleCheckout} />;  
};  

export default Carrito;