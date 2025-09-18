import React, { useContext } from 'react';  
import { Link } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import { Trash, ShoppingCart, CreditCard } from 'lucide-react';  
import { useCart } from '../contexts/CartContext';  

const Cart = ({ onCheckout }) => {  
  const { cart, removeFromCart, updateQuantity } = useCart();  

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);  

  if (cart.length === 0) {  
    return (  
      <motion.div  
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        className="text-center py-12"  
      >  
        <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />  
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h2>  
        <p className="text-gray-600">¡Agrega algunas delicias para empezar!</p>  
        <Link to="/productos" className="mt-4 inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold">  
          Ver Productos  
        </Link>  
      </motion.div>  
    );  
  }  

  return (  
    <div className="max-w-4xl mx-auto px-4 py-8">  
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">  
        <ShoppingCart className="w-8 h-8 mr-2" /> Tu Carrito  
      </h1>  
      <div className="space-y-6">  
        {cart.map((item) => (  
          <motion.div  
            key={item.id}  
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}  
            className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md"  
          >  
            <div className="flex items-center space-x-4">  
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />  
              <div>  
                <h3 className="font-bold text-gray-800">{item.name}</h3>  
                <p className="text-gray-600">${item.price} c/u</p>  
                <div className="flex items-center mt-2">  
                  <button  
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}  
                    className="px-2 py-1 bg-gray-200 rounded"  
                  >  
                    -  
                  </button>  
                  <span className="mx-2">{item.quantity}</span>  
                  <button  
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}  
                    className="px-2 py-1 bg-gray-200 rounded"  
                  >  
                    +  
                  </button>  
                </div>  
              </div>  
            </div>  
            <div className="flex items-center space-x-4">  
              <span className="font-bold text-pink-500">${(item.price * item.quantity).toFixed(0)}</span>  
              <button  
                onClick={() => removeFromCart(item.id)}  
                className="text-red-500 hover:text-red-700"  
              >  
                <Trash className="w-5 h-5" />  
              </button>  
            </div>  
          </motion.div>  
        ))}  
      </div>  
      <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">  
        <div className="flex justify-between items-center text-xl font-bold">  
          <span>Total: ${total.toFixed(0)}</span>  
          <button  
            onClick={onCheckout}  
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all"  
          >  
            <CreditCard className="w-5 h-5" />  
            <span>Pagar con MercadoPago</span>  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Cart;