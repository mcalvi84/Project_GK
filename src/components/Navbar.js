import React, { useState } from 'react';  
import { Link, useLocation } from 'react-router-dom';  
import { Menu, X, ShoppingCart, Home, Package, Settings, Mail } from 'lucide-react';  
import { useCart } from '../contexts/CartContext';  

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const location = useLocation();  
  const { cart } = useCart();  
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);  

  const navItems = [  
    { path: '/', label: 'Home', icon: Home },  
    { path: '/productos', label: 'Productos', icon: Package },  
    { path: '/servicios', label: 'Servicios', icon: Settings },  
    { path: '/contacto', label: 'Contacto', icon: Mail }  
  ];  

  const Icon = ({ icon: IconComponent }) => <IconComponent className="w-5 h-5" />;  

  return (  
    <nav className="bg-gradient-to-r from-pink-400 to-rose-500 shadow-lg sticky top-0 z-50">  
      <div className="max-w-7xl mx-auto px-4">  
        <div className="flex justify-between items-center py-4">  
          <div className="flex items-center space-x-2">  
            <img src="https://utfs.io/f/2vMRHqOYUHc04g9TOID007fmwyReAgKCraUIWzEDZ6on58JN" alt="Logo" className="h-10 w-auto" />  
            <span className="text-xl font-bold text-white">GUILLOS Kitchen</span>  
          </div>  
          <div className="hidden md:flex items-center space-x-8">  
            {navItems.map((item) => (  
              <Link  
                key={item.path}  
                to={item.path}  
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${  
                  location.pathname === item.path  
                    ? 'bg-white text-pink-500'  
                    : 'text-white hover:bg-white/20'  
                }`}  
              >  
                <Icon icon={item.icon} />  
                <span>{item.label}</span>  
              </Link>  
            ))}  
            <Link  
              to="/carrito"  
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30"  
            >  
              <ShoppingCart className="w-5 h-5" />  
              {cartCount > 0 && (  
                <span className="bg-red-500 text-xs rounded-full px-2 py-1">{cartCount}</span>  
              )}  
            </Link>  
          </div>  
          <button  
            onClick={() => setIsOpen(!isOpen)}  
            className="md:hidden text-white"  
          >  
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}  
          </button>  
        </div>  
        {isOpen && (  
          <div className="md:hidden pb-4 space-y-4">  
            {navItems.map((item) => (  
              <Link  
                key={item.path}  
                to={item.path}  
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors block ${  
                  location.pathname === item.path  
                    ? 'bg-white text-pink-500'  
                    : 'text-white hover:bg-white/20'  
                }`}  
                onClick={() => setIsOpen(false)}  
              >  
                <Icon icon={item.icon} />  
                <span>{item.label}</span>  
              </Link>  
            ))}  
            <Link  
              to="/carrito"  
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 block"  
              onClick={() => setIsOpen(false)}  
            >  
              <ShoppingCart className="w-5 h-5" />  
              Carrito ({cartCount})  
            </Link>  
          </div>  
        )}  
      </div>  
    </nav>  
  );  
};  

export default Navbar;