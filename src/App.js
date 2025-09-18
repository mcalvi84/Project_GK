import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import { CartProvider } from './contexts/CartContext';  
import Navbar from './components/Navbar';  
import Home from './pages/Home';  
import Productos from './pages/Productos';  
import Servicios from './pages/Servicios';  
import Contacto from './pages/Contacto';  
import Carrito from './pages/Carrito';  
import Footer from './components/Footer';  
import Watermark from './components/Watermark';  
import './styles.css';  

const AppContent = () => {  
  return (  
    <div className="App relative">  
      <Navbar />  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/productos" element={<Productos />} />  
        <Route path="/servicios" element={<Servicios />} />  
        <Route path="/contacto" element={<Contacto />} />  
        <Route path="/carrito" element={<Carrito />} />  
        <Route path="*" element={<Navigate to="/" />} />  
      </Routes>  
      <Footer />  
      <Watermark />  
    </div>  
  );  
};  

const App = () => {  
  return (  
    <CartProvider>  
      <Router>  
        <AppContent />  
      </Router>  
    </CartProvider>  
  );  
};  

export default App;