// "use client";
// import { motion } from "framer-motion";

// export default function FadeInSection({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {children}
//     </motion.div>
//   );
// }


'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}  // on n’anim plus si hors vue
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ display: 'block' }}
    >
      {children}
    </motion.div>
  );
}
