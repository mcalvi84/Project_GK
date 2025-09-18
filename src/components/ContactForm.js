import React, { useState } from 'react';  
import { motion } from 'framer-motion';  
import { Mail, Phone, MapPin, Send } from 'lucide-react';  

const ContactForm = () => {  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });  
  const [submitted, setSubmitted] = useState(false);  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Simular envío  
    setSubmitted(true);  
    setFormData({ name: '', email: '', message: '' });  
  };  

  const handleChange = (e) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value });  
  };  

  return (  
    <div className="max-w-4xl mx-auto px-4 py-8">  
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contacto</h1>  
      {submitted ? (  
        <motion.div  
          initial={{ opacity: 0, scale: 0.9 }}  
          animate={{ opacity: 1, scale: 1 }}  
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center"  
        >  
          ¡Mensaje enviado! Te contactaremos pronto. <Send className="inline w-5 h-5 ml-2" />  
        </motion.div>  
      ) : (  
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">  
          <div className="space-y-4">  
            <input  
              type="text"  
              name="name"  
              placeholder="Tu nombre"  
              value={formData.name}  
              onChange={handleChange}  
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"  
              required  
            />  
            <input  
              type="email"  
              name="email"  
              placeholder="Tu email"  
              value={formData.email}  
              onChange={handleChange}  
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"  
              required  
            />  
            <button  
              type="submit"  
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"  
            >  
              Enviar Mensaje <Send className="inline w-5 h-5 ml-2" />  
            </button>  
          </div>  
          <div className="space-y-4">  
            <textarea  
              name="message"  
              placeholder="Tu mensaje"  
              value={formData.message}  
              onChange={handleChange}  
              rows={6}  
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"  
              required  
            />  
          </div>  
        </form>  
      )}  
      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">  
        <motion.div  
          whileHover={{ scale: 1.05 }}  
          className="bg-white p-6 rounded-2xl shadow-md"  
        >  
          <Mail className="w-12 h-12 text-pink-500 mx-auto mb-4" />  
          <h3 className="font-bold text-gray-800">Email</h3>  
          <p>hola@dulcedelight.com</p>  
        </motion.div>  
        <motion.div  
          whileHover={{ scale: 1.05 }}  
          className="bg-white p-6 rounded-2xl shadow-md"  
        >  
          <Phone className="w-12 h-12 text-pink-500 mx-auto mb-4" />  
          <h3 className="font-bold text-gray-800">Teléfono</h3>  
          <p>+54 11 1234-5678</p>  
        </motion.div>  
        <motion.div  
          whileHover={{ scale: 1.05 }}  
          className="bg-white p-6 rounded-2xl shadow-md"  
        >  
          <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-4" />  
          <h3 className="font-bold text-gray-800">Dirección</h3>  
          <p>Av. Dulce 123, Buenos Aires</p>  
        </motion.div>  
      </div>  
    </div>  
  );  
};  

export default ContactForm;