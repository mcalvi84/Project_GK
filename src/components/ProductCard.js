import React from 'react';  
import { motion } from 'framer-motion';  
import { Plus, Heart } from 'lucide-react';  
import { useCart } from '../contexts/CartContext';  

const ProductCard = ({ product, index }) => {  
  const { addToCart } = useCart();  

  return (  
    <motion.div  
      initial={{ opacity: 0, y: 20 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5, delay: index * 0.1 }}  
      whileHover={{ scale: 1.05 }}  
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"  
    >  
      <img  
        src={product.image}  
        alt={product.name}  
        className="w-full h-48 object-cover"  
      />  
      <div className="p-6">  
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>  
        <p className="text-gray-600 mb-4">{product.description}</p>  
        <div className="flex justify-between items-center">  
          <span className="text-2xl font-bold text-pink-500">${product.price}</span>  
          <div className="flex space-x-2">  
            <button  
              onClick={() => addToCart(product)}  
              className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-all"  
            >  
              <Plus className="w-5 h-5" />  
            </button>  
            <button className="bg-gray-100 text-pink-500 p-2 rounded-full hover:bg-gray-200 transition-all">  
              <Heart className="w-5 h-5" />  
            </button>  
          </div>  
        </div>  
      </div>  
    </motion.div>  
  );  
};  

export default ProductCard;