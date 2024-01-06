"use client"
import { motion, AnimatePresence } from "framer-motion"

const indexeng = () => {
    return ( 
        <AnimatePresence mode="wait">

        <h1>Welcome</h1>
        <div className="textbox">
            <p>
            I'm a successful Spanish Tarot Reader based in London. 
            I'm here to guide you through life's most complex and difficult matters. 
            Whatever you're going through, I'm here to help you find your way forward. 
            From a young age I realized I was blessed with a gift that enabled me to see 
            and sense things through Tarot that others could not.
            </p>
                <p>
                I do Tarot readings in Spanish and English, in person or online. 
                If you wish to schedule an appointment, you can contact me by email.
                </p>
        </div>
        <motion.div className="slide-in"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{ duration: 5, ease: [2,2,2,2]}}>
    </motion.div>
    <motion.div className="slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{ duration: 5, ease: [2,2,2,2]}}></motion.div>
        </AnimatePresence>
     );
}
 
export default indexeng;