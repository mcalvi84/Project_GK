import React from 'react';  
import { motion } from 'framer-motion';  
import { Heart, Star } from 'lucide-react';  
import { allProducts } from '../data/products';  

const PopularProducts = () => {  
  const popular = allProducts.slice(0, 3); // Los 3 más solicitados  

  return (  
    <motion.section  
      initial={{ opacity: 0, y: 30 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6 }}  
      className="py-12 bg-white/50"  
    >  
      <div className="max-w-7xl mx-auto px-4">  
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Los Más Solicitados</h2>  
        <div className="grid md:grid-cols-3 gap-6">  
          {popular.map((product, index) => (  
            <motion.div  
              key={product.id}  
              initial={{ opacity: 0, scale: 0.9 }}  
              whileInView={{ opacity: 1, scale: 1 }}  
              transition={{ duration: 0.5, delay: index * 0.1 }}  
              whileHover={{ scale: 1.05 }}  
              className="bg-white rounded-2xl shadow-lg overflow-hidden"  
            >  
              <img  
                src={product.image}  
                alt={product.name}  
                className="w-full h-48 object-cover"  
              />  
              <div className="p-6">  
                <div className="flex justify-between items-start mb-2">  
                  <h3 className="font-bold text-gray-800">{product.name}</h3>  
                  <div className="flex items-center space-x-1">  
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />  
                    <span className="text-sm text-yellow-600">4.8</span>  
                  </div>  
                </div>  
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>  
                <div className="flex justify-between items-center">  
                  <span className="text-xl font-bold text-pink-500">${product.price}</span>  
                  <button className="flex items-center space-x-1 text-pink-500 hover:text-pink-600">  
                    <Heart className="w-5 h-5" />  
                    <span>Agregar</span>  
                  </button>  
                </div>  
              </div>  
            </motion.div>  
          ))}  
        </div>  
      </div>  
    </motion.section>  
  );  
};  

export default PopularProducts;