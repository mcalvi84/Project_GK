import React from 'react';  
import { motion } from 'framer-motion';  
import { Cake, Gift, Truck } from 'lucide-react';  

const Servicios = () => {  
  const services = [  
    {  
      icon: Cake,  
      title: "Tortas Personalizadas",  
      description: "Diseñamos tortas únicas para cumpleaños, bodas y eventos especiales."  
    },  
    {  
      icon: Gift,  
      title: "Regalos Dulces",  
      description: "Cajas de dulces y macarons perfectos para sorprender a alguien especial."  
    },  
    {  
      icon: Truck,  
      title: "Envíos Rápidos",  
      description: "Entregamos en todo el país con empaque fresco y seguro."  
    }  
  ];  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-8">  
      <div className="max-w-7xl mx-auto px-4">  
        <motion.h1  
          initial={{ opacity: 0, y: -20 }}  
          animate={{ opacity: 1, y: 0 }}  
          className="text-4xl font-bold text-gray-800 text-center mb-12"  
        >  
          Nuestros Servicios  
        </motion.h1>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {services.map((service, index) => (  
            <motion.div  
              key={service.title}  
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }}  
              transition={{ delay: index * 0.2, duration: 0.5 }}  
              whileHover={{ scale: 1.05 }}  
              className="bg-white p-8 rounded-2xl shadow-lg text-center"  
            >  
              <service.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />  
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>  
              <p className="text-gray-600">{service.description}</p>  
            </motion.div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Servicios;