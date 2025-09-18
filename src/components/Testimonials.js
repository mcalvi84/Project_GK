import React from 'react';  
import { motion } from 'framer-motion';  
import { Star } from 'lucide-react';  
import { testimonials } from '../data/testimonials';  

const Testimonials = () => {  
  return (  
    <motion.section  
      initial={{ opacity: 0, y: 30 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6 }}  
      className="py-12 bg-gradient-to-r from-pink-50 to-rose-50"  
    >  
      <div className="max-w-7xl mx-auto px-4">  
        <div className="text-center mb-12">  
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lo que Piensan de Nosotros</h2>  
          <div className="flex justify-center items-center space-x-1 text-yellow-400">  
            <Star className="w-6 h-6 fill-current" />  
            <Star className="w-6 h-6 fill-current" />  
            <Star className="w-6 h-6 fill-current" />  
            <Star className="w-6 h-6 fill-current" />  
            <Star className="w-6 h-6 fill-current" />  
          </div>  
          <p className="text-gray-600">Reseñas de Google - Más de 200 opiniones</p>  
          <img src="https://via.placeholder.com/100x30/4285F4/FFFFFF?text=Google" alt="Google Reviews" className="mx-auto mt-2 h-8" />  
        </div>  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">  
          {testimonials.slice(0, 5).map((testimonial, index) => (  
            <motion.div  
              key={testimonial.id}  
              initial={{ opacity: 0, y: 20 }}  
              whileInView={{ opacity: 1, y: 0 }}  
              transition={{ duration: 0.5, delay: index * 0.1 }}  
              className="bg-white p-6 rounded-2xl shadow-md"  
            >  
              <div className="flex mb-3">  
                {[...Array(testimonial.rating)].map((_, i) => (  
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />  
                ))}  
              </div>  
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>  
              <div className="flex justify-between items-center">  
                <span className="font-semibold text-gray-800">{testimonial.name}</span>  
                <span className="text-sm text-gray-500">{testimonial.date}</span>  
              </div>  
            </motion.div>  
          ))}  
        </div>  
      </div>  
    </motion.section>  
  );  
};  

export default Testimonials;