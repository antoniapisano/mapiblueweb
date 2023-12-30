"use client";

import Footer from "./footer";
import Navbar from "./Navbar";
import styles from '../../styles/Home.module.css'
import { motion, AnimatePresence } from "framer-motion"




const Layout = ({ children }) => {


  return (
    <AnimatePresence mode="wait">
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
    </div>
    <motion.div className="slide-in"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}>
    </motion.div>
    <motion.div className="slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}></motion.div>
    </AnimatePresence>
  );
};

export default Layout;
