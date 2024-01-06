"use client"
import { motion, AnimatePresence } from "framer-motion"

const indexesp = () => {
    return ( 
        <AnimatePresence mode="wait">

<h1>Bienvenido</h1>
        <div>
            <p>
            Soy una tarotista española viviendo en Londres. Estoy aquí para guiarte en materias
             complejas y difíciles de la vida. Independientemente de lo que estés pasando, estoy
              aquí para ayudarte y empoderarte a encontrar el mejor camino a seguir. 
              Desde muy joven me di cuenta de que había sido bendecida con un don que me permitía
               ver y sentir cosas a través del Tarot que otros no podían.
            </p>
                <p>
                Hago lecturas de Tarot en español e inglés, presencial u online.
                 Si desea reservar una cita, puede contactarme por email.
                </p>
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
}
 
export default indexesp;

