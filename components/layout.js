import Footer from "./footer";
import Image from 'next/image';
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="page-container" >
    <div className="backgroundimage">
      <Image 
        src="/Guitarbackground2.webp"
        alt="Guitar background by Shinnosuke Kawabe https://unsplash.com/photos/idya-9U4ZJM"
        fill cover
      />
    </div>
   <div className="content-wrap">
      <Navbar />
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
