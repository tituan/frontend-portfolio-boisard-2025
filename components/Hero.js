
'use client'; 

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div className="intro">
      <div className="intro__wrapper">
        <motion.h1 
          className="intro__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Antoine Boisard
        </motion.h1>
        <motion.h2 
          className="intro__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Développeur web frontend
        </motion.h2>
      </div>

      <motion.div 
        className="intro__background"
        style={{ y: yBackground }}
      >
        <Image
          src="/img/background.jpg"
          alt="background"
          fill 
          className="object-cover" 
          priority 
        />
      </motion.div>

      {/* <a href="#presentation" className="intro__btn smooth"> */}
        {/* <svg className="icon"><use xlinkHref="#icon-arrow-down"></use></svg> */}
      {/* </a> */}
    </div>
  );
}

