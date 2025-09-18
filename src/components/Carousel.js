import React, { useState, useEffect } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';  
import { featuredProducts } from '../data/products';  

const Carousel = ({ onAddToCart }) => {  
  const [currentIndex, setCurrentIndex] = useState(0);  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);  
    }, 2000);  
    return () => clearInterval(interval);  
  }, []);  

  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);  
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);  

  const product = featuredProducts[currentIndex];  

  return (  
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-2xl mx-4 my-8 shadow-2xl">  
      <AnimatePresence mode="wait">  
        <motion.div  
          key={currentIndex}  
          initial={{ x: currentIndex > 0 ? '100%' : '-100%' }}  
          animate={{ x: 0 }}  
          exit={{ x: currentIndex > 0 ? '-100%' : '100%' }}  
          transition={{ duration: 0.8, ease: 'easeInOut' }}  
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center"  
        >  
          <div className="flex flex-col md:flex-row items-center w-full h-full px-4">  
            <div className="md:w-1/2 p-8 text-center md:text-left">  
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">  
                {product.name}  
              </h2>  
              <p className="text-xl text-gray-600 mb-6">{product.description}</p>  
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">  
                <button  
                  onClick={() => onAddToCart(product)}  
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"  
                >  
                  Agregar al Carrito - ${product.price}  
                </button>  
                <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold border-2 border-pink-500 hover:bg-pink-50 transition-all flex items-center justify-center">  
                  <Heart className="w-5 h-5 mr-2" /> Favoritos  
                </button>  
              </div>  
            </div>  
            <div className="md:w-1/2 flex justify-center p-4">  
              <img  
                src={product.image}  
                alt={product.name}  
                className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"  
              />  
            </div>  
          </div>  
        </motion.div>  
      </AnimatePresence>  
      <button  
        onClick={goToPrev}  
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"  
      >  
        <ArrowLeft className="w-6 h-6 text-pink-500" />  
      </button>  
      <button  
        onClick={goToNext}  
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"  
      >  
        <ArrowRight className="w-6 h-6 text-pink-500" />  
      </button>  
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">  
        {featuredProducts.map((_, index) => (  
          <button  
            key={index}  
            onClick={() => setCurrentIndex(index)}  
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-pink-500' : 'bg-white/60'}`}  
          />  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Carousel;