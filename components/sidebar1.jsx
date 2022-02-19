import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from 'styles/sidebar.module.css';

const variants = {
  open: { opacity: 1, x: 0, type: 'tween', width: '250px' },
  closed: { opacity: 0, x: -210, width: '40px' },
};
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(prev => !prev)}>click</button>
      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ ease: 'easeIn', duration: 0.3 }}
        className={styles.nav}
      >
        <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
