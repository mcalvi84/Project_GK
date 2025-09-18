import React, { useState } from 'react';  
import { motion } from 'framer-motion';  
import ProductCard from '../components/ProductCard';  
import { allProducts } from '../data/products';  
import { useCart } from '../contexts/CartContext';  

const Productos = () => {  
  const { addToCart } = useCart();  
  const [currentPage, setCurrentPage] = useState(1);  
  const productsPerPage = 3;  
  const totalPages = Math.ceil(allProducts.length / productsPerPage);  
  const startIndex = (currentPage - 1) * productsPerPage;  
  const currentProducts = allProducts.slice(startIndex, startIndex + productsPerPage);  

  const handlePageChange = (page) => {  
    setCurrentPage(page);  
  };  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-8">  
      <div className="max-w-7xl mx-auto px-4">  
        <motion.h1  
          initial={{ opacity: 0, y: -20 }}  
          animate={{ opacity: 1, y: 0 }}  
          className="text-4xl font-bold text-gray-800 text-center mb-12"  
        >  
          Nuestros Productos  
        </motion.h1>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">  
          {currentProducts.map((product, index) => (  
            <ProductCard key={product.id} product={product} index={startIndex + index} />  
          ))}  
        </div>  
        {totalPages > 1 && (  
          <motion.div  
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}  
            className="flex justify-center space-x-2 mt-8"  
          >  
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (  
              <button  
                key={page}  
                onClick={() => handlePageChange(page)}  
                className={`px-4 py-2 rounded-full font-semibold transition-all ${  
                  currentPage === page  
                    ? 'bg-pink-500 text-white'  
                    : 'bg-white text-pink-500 border border-pink-300 hover:bg-pink-50'  
                }`}  
              >  
                {page}  
              </button>  
            ))}  
          </motion.div>  
        )}  
      </div>  
    </div>  
  );  
};  

export default Productos;