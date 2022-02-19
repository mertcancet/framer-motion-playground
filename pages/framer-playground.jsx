import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from 'styles/framer-playground.module.css';
const h1Variant = {
  hover: {
    scale: 1.2,
    originX: 0,
    transition: { ease: 'easeOut', yoyo: Infinity },
  },
};
const boxVariant = {
  init: { x: -70, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -70, opacity: 0 },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ease: 'easeIn',
      duration: 2,
    },
  },
};
const FramerPlayground = () => {
  const [selectedTab, setSelectedTab] = useState('selected1');
  return (
    <div>
      Framer Playground
      <motion.h1 whileHover="hover" variants={h1Variant}>
        Hello framer motion
      </motion.h1>
      <div className={styles.boxes}>
        <button onClick={() => setSelectedTab('selected1')}>1</button>
        <button onClick={() => setSelectedTab('selected2')}>2</button>
        <button onClick={() => setSelectedTab('selected3')}> 3</button>
        <br />
        {selectedTab === 'selected1' && (
          <motion.div
            variants={boxVariant}
            initial="init"
            animate="animate"
            exit="exit"
            className={styles.box}
          >
            box 1
          </motion.div>
        )}
        {selectedTab === 'selected2' && (
          <motion.div
            className={styles.box1}
            variants={boxVariant}
            animate="animate"
            initial="init"
            exit="exit"
          >
            box 2
          </motion.div>
        )}
        {selectedTab === 'selected3' && (
          <motion.div
            variants={boxVariant}
            animate="animate"
            initial="init"
            exit="exit"
            className={styles.box2}
          >
            box 3
          </motion.div>
        )}
      </div>
      <motion.svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        version="1.1"
        viewBox="0 0 16 16"
        height="3em"
        width="3em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M14.341 5.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-5.75c-0.689 0-1.25 0.561-1.25 1.25v11.5c0 0.689 0.561 1.25 1.25 1.25h9.5c0.689 0 1.25-0.561 1.25-1.25v-7.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 4.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-9.5c-0.136 0-0.25-0.114-0.25-0.25v-11.5c0-0.135 0.114-0.25 0.25-0.25 0 0 5.749-0 5.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v7.75z"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M9.421 0.659c-0.806-0.591-1.197-0.659-1.421-0.659h-5.75c-0.689 0-1.25 0.561-1.25 1.25v11.5c0 0.604 0.43 1.109 1 1.225v-12.725c0-0.135 0.115-0.25 0.25-0.25h7.607c-0.151-0.124-0.297-0.238-0.437-0.341z"
        />
      </motion.svg>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        version="1.1"
        viewBox="0 0 16 16"
        height="3em"
        width="3em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z"
        />
      </svg>
    </div>
  );
};

export default FramerPlayground;
