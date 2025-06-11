'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function Loader({ onFinish, logoScale = 2 }) {
  const logoCtrl    = useAnimation();
  const overlayCtrl = useAnimation();

  useEffect(() => {
    (async () => {
      // 1️⃣ Fade-in du logo (opacity) + scale initial à 1
      await logoCtrl.start(
        { opacity: 1, scale: 1 },
        { duration: 0.3, ease: 'linear' }
      );

      // 2️⃣ Pause de 0.3 s
      await new Promise(r => setTimeout(r, 300));

      // 3️⃣ Scale du logo à la valeur désirée
      await logoCtrl.start(
        { scale: logoScale },
        { duration: 0.6, ease: 'linear' }
      );

      // 4️⃣ Fade-out de l’overlay en 0.4 s
      await overlayCtrl.start(
        { opacity: 0 },
        { duration: 0.4, ease: 'linear' }
      );

      // 5️⃣ On révèle l’app
      onFinish();
    })();
  }, [logoCtrl, overlayCtrl, onFinish, logoScale]);

  return (
    <motion.div
      className="loader__overlay"
      initial={{ opacity: 1 }}
      animate={overlayCtrl}
    >
      <motion.div
        className="loader__logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={logoCtrl}
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
