import Footer from "./footer";
import Navbar from "./Navbar";
import styles from '../../styles/Home.module.css'
import { Suspense } from "react"
import Loading from "./loading.js";

const Layout = ({ children }) => {
  return (
    
    <div className="page-container" >
         <video
                src="/tarotcards.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                className={styles.video}
            />
   <div className="content-wrap">
      <Navbar />
      {children}
      </div>
      <Footer />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
