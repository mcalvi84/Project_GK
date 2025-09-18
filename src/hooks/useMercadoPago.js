// Hook temporal - Configura tu clave pública de MercadoPago para activarlo  
export const useMercadoPago = (publicKey) => {  
  // Inicialización pendiente de configuración  
  const initializeMercadoPago = () => {  
    console.log('MercadoPago listo para configurar con tu clave:', publicKey);  
    return null;  
  };  

  const createPreference = async () => {  
    console.log('Creando preferencia de pago... Configura el backend para esto.');  
    return { body: { id: 'demo' } }; // Demo temporal  
  };  

  return { initializeMercadoPago, createPreference };  
};