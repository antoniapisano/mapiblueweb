import Footer from "./footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="page-container" >
   <div className="content-wrap">
      <Navbar />
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
