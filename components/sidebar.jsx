import React, { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0, type: 'tween' },
  closed: { opacity: 0, x: -100 },
};
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(prev => !prev)}>click</button>
      <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
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
