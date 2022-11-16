import gsap from "gsap";
import React, { createContext, useState, useEffect } from "react";

interface CustomPointerContextProviderProps 
{
    children: any;
}

// create context
const CustomPointerContext = createContext<HTMLElement | null>(null);

const CustomPointerContextProvider: React.FC<CustomPointerContextProviderProps> = ({ children }) => {

    let customPointer = typeof window !== 'undefined' ? document.getElementById('customPointer') : null;

    const handleMove = (e: { screenX: number; screenY: number; }) => {
      gsap.to(customPointer, {
        left: `${e.screenX - 5}px`,
        top: `${e.screenY - 110}px`,
        duration: 0.5,
      });
    }

    useEffect(() => {
      window.addEventListener('mousemove', handleMove);

      return () => window.addEventListener('mousemove', handleMove);
    }, []);

  return (
    <CustomPointerContext.Provider value={customPointer}>
      {children}
    </CustomPointerContext.Provider>
  );
};

export { CustomPointerContext, CustomPointerContextProvider };
