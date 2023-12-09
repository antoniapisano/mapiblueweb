import Footer from "./footer";
import Navbar from "./Navbar";
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div className="page-container" >
    <div className="backgroundimage">
    <Image 
        src="/tarotbackground.webp"
        alt="https://unsplash.com/photos/king-of-diamonds-playing-card-7s2ip7OVktg"
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
