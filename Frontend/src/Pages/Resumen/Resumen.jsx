import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import './Resumen.css';

export default function Resumen() {
  const sectionRef = useRef();
  const myRefs = useRef(Array.from({ length: 5 }, () => React.createRef()));
  const [animationState, setAnimationState] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const div = sectionRef.current;
      const elements = myRefs.current;

      const { y } = div.getBoundingClientRect();

      elements.forEach((element, index) => {
        const elementTop = element.current.offsetTop;

        const height = window.innerHeight;
        const distance = height - height * 0;

        const positionY = Number(y * -1);
        const startedAnimation = Number(Math.floor(elementTop - distance));

        if (
          positionY > startedAnimation &&
          !animationState[index] &&
          index <= 2
        ) {
          anime({
            targets: element.current,
            translateX: [-200, 100],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
          });
          setAnimationState({ ...animationState, [index]: true });
        }

        if (
          positionY > startedAnimation &&
          !animationState[index] &&
          index > 2
        ) {
          anime({
            targets: element.current,
            translateX: [0, -200],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
          });
          setAnimationState({ ...animationState, [index]: true });
        }
      });
    };

    const handleScrollReset = () => {
      if (window.scrollY === 0) {
        setAnimationState({});
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollReset);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleScrollReset);
    };
  }, [animationState]);

  return (
    <section>
      <section ref={sectionRef} className='containerResumen'>
        {myRefs.current.map((ref, index) => (
          <section key={index} ref={ref} className='prueba'>
            hola + {index}
          </section>
        ))}
      </section>
    </section>
  );
}
