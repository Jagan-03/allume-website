import { Console } from "console";
import gsap from "gsap";
import { useContext, useEffect } from "react";
import CustomPointer from "../CustomPointer/CustomPointer";
import { CustomPointerContext, CustomPointerContextProvider } from "../CustomPointer/CustomPointerContext";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps 
{
    children: any;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {  


  return (
    <CustomPointerContextProvider>
        <CustomPointer />
        <div id="layoutWrapper">
            <Header />
                {children}
            <Footer />
        </div>
    </CustomPointerContextProvider>
  )
}

export default Layout;
