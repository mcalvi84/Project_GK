import React from 'react';  
import { motion } from 'framer-motion';  
import { Star } from 'lucide-react';  

const Banner = () => {  
  return (  
    <motion.div  
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6 }}  
      className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white py-8 px-4 text-center rounded-2xl shadow-xl mx-0 my-8" // Full width con mx-0  
    >  
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">  
        <Star className="w-12 h-12 animate-pulse" />  
        <h3 className="text-2xl font-bold">¡Oferta Especial!</h3>  
        <p className="text-lg max-w-2xl">20% off en pedidos de tortas personalizadas esta semana. ¡No te lo pierdas!</p>  
      </div>  
    </motion.div>  
  );  
};  

export default Banner;