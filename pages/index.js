import Sidebar from 'components/sidebar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from 'styles/Home.module.css';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return <Sidebar />;
};

export default MyComponent;
