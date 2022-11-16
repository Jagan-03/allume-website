import CustomPointer from "../CustomPointer/CustomPointer";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <div id="layoutWrapper" className="relative">
        <CustomPointer />
        <Header />
        {children}
        <Footer />
      </div>
  );
};

export default Layout;
