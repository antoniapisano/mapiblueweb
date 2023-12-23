import Footer from "./footer";
import Navbar from "./Navbar";
import styles from '../../styles/Home.module.css'
import { Suspense } from 'react'
import { NavigationEvents } from './navigation-events'





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
      <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </div>
      <Footer />
    </div>
   
  );
};

export default Layout;
