import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from 'styles/slider.module.css';
const Slider = () => {
  const [position, positionSet] = useState(0);
  const onDragEnd = async (event, info) => {
    const offset = info.offset.x;
    const direction = offset > 0 ? 'left' : 'right';
    console.log(direction);
    if (direction === 'right') {
      if (position < 3 - 1) {
        positionSet(position + 1);
      }
    }
    if (direction === 'left') {
      if (position > 0) {
        positionSet(position - 1);
      }
    }
  };
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      className={styles.container}
      onDragEnd={onDragEnd}
    >
      <motion.div
        initial={{ scale: 0, rotation: -180 }}
        animate={{
          rotate: 0,
          left: `${(0 - position) * 60 - 30}vw`,
          scale: 0 === position ? 1 : 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className={styles.box1}
      >
        box 1
      </motion.div>
      <motion.div
        initial={{ scale: 0, rotation: -180 }}
        animate={{
          rotate: 0,
          left: `${(1 - position) * 60 - 30}vw`,
          scale: 1 === position ? 1 : 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className={styles.box1}
      >
        box 1
      </motion.div>
      <motion.div
        initial={{ scale: 0, rotation: -180 }}
        animate={{
          rotate: 0,
          left: `${(2 - position) * 60 - 30}vw`,
          scale: 2 === position ? 1 : 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className={styles.box1}
      >
        box 1
      </motion.div>
    </motion.div>
  );
};

export default Slider;
