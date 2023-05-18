import { Link } from 'react-router-dom';
import './Navbar.css';
const navbar = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
  },
  {
    path: '/about',
    name: 'About',
  },
];

function Navbar() {
  return (
    <section className='navbarSecundary'>
      <section>
        <h1>Duvan Rozo</h1>
      </section>
      <section className='listNavbar'>
        <ul>
          {navbar.map((element) => (
            <li key={element.name}>
              <Link to={element.path}>{element.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Navbar;
