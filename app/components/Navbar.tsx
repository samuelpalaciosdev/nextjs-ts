import Link from 'next/link';

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
      label: 'Contact',
      route: '/contact',
    },
  ];

  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
