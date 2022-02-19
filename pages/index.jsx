import Link from 'next/link';
import styles from 'styles/Home.module.css';
export const MyComponent = () => {
  return (
    <div className={styles.container}>
      <Link href="/sidebar1">Sidebar 1</Link>
      <Link href="/sidebar2">Sidebar 2</Link>
      <Link href="/slider">Slider</Link>
      <Link href="/framer-playground">Framer Playground</Link>
    </div>
  );
};

export default MyComponent;
