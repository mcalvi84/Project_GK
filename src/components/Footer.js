import React from 'react';  
import { motion } from 'framer-motion';  
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';  

const Footer = () => {  
  return (  
    <motion.footer  
      initial={{ opacity: 0, y: 20 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6 }}  
      className="bg-gradient-to-r from-[#390b60] via-[#9b1b7d] to-[#e71d73] shadow-lg text-white py-12 mt-16"  
    >  
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">  
        <div className="space-y-4">  
          <div className="flex items-center space-x-2">  
            <img src='/logo/logoGK.svg' alt="Logo" className="h-16 md:h-20 lg:h-24 w-auto mx-auto drop-shadow-lg" />  
             
          </div>  
          <p className="text-pink-100">Deliciosas tortas y dulces artesanales hechos con amor.</p>  
        </div>  
        <div>  
          <h4 className="font-bold mb-4">Contacto</h4>  
          <div className="space-y-2 text-sm">  
            <div className="flex items-center space-x-2">  
              <Mail className="w-4 h-4" />  
              <span>guilloskitchen@gmail.com</span>  
            </div>  
            <div className="flex items-center space-x-2">  
              <Phone className="w-4 h-4" />  
              <span>+54 9 11 6461-5467</span>  
            </div>  
            <div className="flex items-center space-x-2">  
              <MapPin className="w-4 h-4" />  
              <span> Villa Crespo, CABA</span>  
            </div>  
          </div>  
        </div>  
        <div>  
          <h4 className="font-bold mb-4">Sigue en Redes</h4>  
          <div className="flex space-x-4">  
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all">  
              <Facebook className="w-5 h-5" />  
            </a>  
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all">  
              <Instagram className="w-5 h-5" />  
            </a>  
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all">  
              <Twitter className="w-5 h-5" />  
            </a>  
          </div>  
        </div>  
      </div>  
      <div className="border-t border-pink-500/30 mt-8 pt-4 text-center text-sm text-pink-100">  
        © 2024 GUILLOS Kitchen. Todos los derechos reservados.  
      </div>  
    </motion.footer>  
  );  
};  

export default Footer;