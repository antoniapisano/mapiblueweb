import Footer from "./footer";
import Image from 'next/image';
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="page-container" >
    <div className="backgroundimage">
      <Image 
        src="/Guitarbackground2.webp"
        alt="DekoArt-Gallery https://pixabay.com/illustrations/guitar-instrument-music-1940733/"
        fill
        style={{objectFit:"cover"}}
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
