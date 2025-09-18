import React from 'react';  
import { motion } from 'framer-motion';  
import Carousel from '../components/Carousel';  
import Banner from '../components/Banner';  
import PopularProducts from '../components/PopularProductCard';  
import Testimonials from '../components/Testimonials';  
import { useCart } from '../contexts/CartContext';  

const Home = () => {  
  const { addToCart } = useCart();  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-8">  
      <motion.div  
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 0.8 }}  
        className="max-w-7xl mx-auto"  
      >  
        <Carousel onAddToCart={addToCart} />  
        <Banner />  
        <div className="text-center py-12 fade-in">  
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a GUILLOS Kitchen</h2>  
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Descubre nuestras tortas y dulces artesanales, hechos con amor y los mejores ingredientes. ¡Endulza tu día!</p>  
        </div>  
        <PopularProducts />  
        <Testimonials />  
      </motion.div>  
    </div>  
  );  
};  

export default Home;