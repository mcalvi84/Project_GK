import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { featuredProducts } from "../data/products";

const Carousel = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () =>
    setCurrentIndex((p) => (p - 1 + featuredProducts.length) % featuredProducts.length);
  const goToNext = () =>
    setCurrentIndex((p) => (p + 1) % featuredProducts.length);

  const product = featuredProducts[currentIndex];

  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-2xl mx-4 my-8 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: currentIndex > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: currentIndex > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-100 to-rose-200"
        >
          {/* LAYOUT: en mobile imagen arriba / texto abajo; en desktop texto izq / imagen der */}
          <div className="relative flex h-full w-full flex-col md:flex-row">
            {/* TEXTO */}
            <div className="relative z-20 order-2 md:order-1 flex-1 p-5 sm:p-6 md:p-10 lg:p-14 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 md:mb-4">
                {product.name}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700/90 mb-5 md:mb-8 max-w-xl md:max-w-none mx-auto md:mx-0">
                {product.description}
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Agregar al Carrito - ${product.price}
                </button>

                <button className="bg-white text-pink-500 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold border-2 border-pink-500 hover:bg-pink-50 transition-all flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Favoritos
                </button>
              </div>
            </div>

            {/* IMAGEN (ocupa toda la derecha en desktop) */}
            <div className="relative z-10 order-1 md:order-2 flex-1">
              {/* Contenedor para controlar el recorte/curva */}
              <div className="absolute inset-0 md:inset-y-8 md:right-8 md:left-1/2 rounded-2xl overflow-visible">
                {/* Imagen a full en el área derecha; leve overlap a la izquierda */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    absolute md:static
                    right-0 top-1/2 md:top-0
                    -translate-y-1/2 md:translate-y-0
                    -translate-x-6 md:-translate-x-4 lg:-translate-x-10
                    w-[115%] md:w-full h-[70%] md:h-full
                    object-cover rounded-2xl
                    drop-shadow-2xl
                    transition-all
                  "
                />

                {/* Divisor elíptico (suaviza borde izquierdo de la imagen en desktop) */}
                <div
                  className="pointer-events-none hidden md:block absolute inset-y-0 -left-24 w-56"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(120% 80% at 100% 50%, black 40%, transparent 60%)",
                    maskImage:
                      "radial-gradient(120% 80% at 100% 50%, black 40%, transparent 60%)",
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.1), rgba(0,0,0,0))",
                    filter: "blur(6px)",
                  }}
                />
                {/* Veladura gris suave encima de la imagen */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-l from-black/10 via-black/5 to-transparent" />
              </div>

              {/* Versión mobile: “curva” al medio separando imagen de texto */}
              <div
                className="md:hidden pointer-events-none absolute left-1/2 -translate-x-1/2 top-[48%] w-[85%] h-10 rounded-full"
                style={{
                  boxShadow: "0 20px 30px rgba(0,0,0,0.12)",
                  background:
                    "radial-gradient(60% 120% at 50% 0%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.02) 60%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Flechas (más chicas en mobile) */}
      <button
        onClick={goToPrev}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-2.5 rounded-full shadow-lg transition-all"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-2.5 rounded-full shadow-lg transition-all"
      >
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-pink-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
