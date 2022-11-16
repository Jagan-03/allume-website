import { ArrowRightIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import { useEffect } from "react";

const CustomPointer: React.FC = () => {

  let customPointer: HTMLElement | null = null;

    const handleMove = (e: any) => {      
      gsap.to(customPointer, {
        left: `${e.pageX - 5}px`,
        top: `${e.pageY - 11}px`,
        duration: 0.5,
      });
    }

    useEffect(() => {
      customPointer = document.getElementById('customPointer');

      window.addEventListener('mousemove', handleMove);

      return () => window.addEventListener('mousemove', handleMove);
    }, []);

  return (
    <div id="customPointer" className="hidden absolute z-50 md:flex justify-center items-center pointer-events-none rounded-full w-3 h-3 bg-sky-600">
        <ArrowRightIcon className="w-10 -rotate-45 duration-500 hidden"/>
    </div>
  )
}

export default CustomPointer;
