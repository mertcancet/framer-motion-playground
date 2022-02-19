import { motion, useCycle } from 'framer-motion';
import styles from 'styles/sidebar2.module.css';

const sidebarVariants = {
  open: {
    width: '100%',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  close: {
    width: 45,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Sidebar2 = () => {
  const [animation, cycleAnimation] = useCycle('open', 'close');
  const toggle = () => cycleAnimation();

  return (
    <motion.div
      className={styles.wrapper}
      variants={sidebarVariants}
      animate={animation}
    >
      asd
      <button onClick={toggle}>ac kapa</button>
    </motion.div>
  );
};

export default Sidebar2;
