import './Presentation.css';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import twitter from '../../assets/twitter.png';
import instragram from '../../assets/instragram.png';
import linkedin from '../../assets/linkedin.png';

const Redes = [
  {
    name: 'twitter',
    img: twitter,
    refer: () => {
      window.open('https://twitter.com/DuvanRozoParra1', '_blank');
    },
  },
  {
    name: 'Instagram',
    img: instragram,
    refer: () => {
      window.open('https://www.instagram.com/duvanrozoparra/', '_blank');
    },
  },
  {
    name: 'linkedin',
    img: linkedin,
    refer: () => {
      window.open(
        'https://www.linkedin.com/in/duvan-rozo-parra-581a7924b/',
        '_blank'
      );
    },
  },
];

const Router = [
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

function Presentation() {
  const imgDuvan = useRef(null);
  const infoTitle = useRef(null);
  const infoDescription = useRef(null);
  const navigator = useRef(null);
  const redesAnimation = useRef(null);

  useEffect(() => {
    anime({
      targets: imgDuvan.current,
      translateX: [500, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: 1500,
    });

    anime({
      targets: [
        infoTitle.current,
        infoDescription.current,
        navigator.current,
        redesAnimation.current,
      ],
      translateX: [-500, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: anime.stagger(500),
    });
  }, []);

  return (
    <section className='containerPresentation'>
      <div className='containerInfo'>
        <h1 ref={infoTitle}>Duvan Rozo</h1>
        <p ref={infoDescription}>
          I am a passionate <strong>web Developer</strong> from Colombia
        </p>
        <div className='lista' ref={navigator}>
          <ul>
            {Router.map((route) => (
              <li key={route.name}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div ref={redesAnimation} className='containerRedes'>
          {Redes.map((element) => (
            <div key={element.name} className='circle' onClick={element.refer}>
              <img src={element.img} alt={element.name} />
            </div>
          ))}
        </div>
      </div>
      <div ref={imgDuvan} className='containerImg'></div>
    </section>
  );
}

export default Presentation;
