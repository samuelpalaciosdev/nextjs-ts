import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'About',
      route: '/about',
    },
    {
      label: 'Posts',
      route: '/posts',
    },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          {links.map(({ label, route }) => (
            <li key={label} className={styles.item}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
