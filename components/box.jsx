import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from 'styles/Home.module.css';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsOpen(!isOpen)}>animate</button>

      {isOpen && (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 70, opacity: 0 }}
          className={styles.box}
        >
          selam
        </motion.div>
      )}
    </div>
  );
};

export default MyComponent;
