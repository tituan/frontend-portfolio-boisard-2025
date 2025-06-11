'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function Loader({ onFinish }) {
  const overlay = useAnimation();
  const logo    = useAnimation();

  useEffect(() => {
    (async () => {
      // 1) Logo fade-in rapide
      await logo.start({ opacity: 1, scale: 2 }, { duration: 0.3, ease: 'linear' });
      await new Promise(r => setTimeout(r, 10));

      // 2) Clip-path polygon grandit
      await overlay.start({
        clipPath: [
          'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',  // point central
          'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'   // tout l'écran
        ]
      }, { duration: 1, ease: 'linear' });

      // 3) Fade-out
      await overlay.start({ opacity: 0 }, { duration: 0.3, ease: 'linear' });

      onFinish();
    })();
  }, [overlay, logo, onFinish]);

  return (
    <motion.div
      className="loader__overlay"
      initial={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', opacity: 1 }}
      animate={overlay}
    >
      <motion.div
        className="loader__logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={logo}
        transition={{ duration: 0.3, ease: 'linear' }}
      >
        <Image
          src="/img/new-logo-ab.svg"
          alt="Logo Antoine Boisard"
          width={120}
          height={120}
        />
      </motion.div>
    </motion.div>
  );
}
