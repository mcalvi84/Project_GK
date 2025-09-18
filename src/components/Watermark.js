import React from 'react';  
import { Heart } from 'lucide-react';  

const Watermark = () => {  
  return (  
    <div className="fixed bottom-4 right-4 opacity-20 z-0 pointer-events-none">  
      <div className="flex items-center space-x-1 text-pink-300 text-xs">  
        <Heart className="w-3 h-3 fill-current" />  
        <span>DulceDelight © 2024</span>  
      </div>  
    </div>  
  );  
};  

export default Watermark;