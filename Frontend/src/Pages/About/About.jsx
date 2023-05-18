import './About.css';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiRedux, SiMongodb, SiSequelize, SiTypescript } from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import anime from 'animejs/lib/anime.es.js';

const data = [
  {
    name: 'Telefono',
    value: '+57 3004256663',
  },
  {
    name: 'Años',
    value: '22',
  },
  {
    name: 'Correo',
    value: 'rozoparraduvan@gmail.com',
  },
  {
    name: 'Freelance',
    value: 'Disponible',
  },
];

const skills = [
  {
    name: 'Html',
    icon: <AiFillHtml5 style={{ color: '#ff7a00' }} />,
  },
  {
    name: 'Css',
    icon: <DiCss3 style={{ color: '#0084ff' }} />,
  },
  {
    name: 'Javascript',
    icon: <IoLogoJavascript style={{ color: 'yellow' }} />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript style={{ color: '#0037ff' }} />,
  },
  {
    name: 'React',
    icon: <FaReact style={{ color: '#00ccff' }} />,
  },
  {
    name: 'Redux',
    icon: <SiRedux style={{ color: '#7700ff' }} />,
  },
  {
    name: 'Squelize',
    icon: <SiSequelize style={{ color: '#006aff' }} />,
    color: '#006aff',
  },
  {
    name: 'Nodejs',
    icon: <IoLogoNodejs style={{ color: '#009800' }} />,
  },
  {
    name: 'MongoDb',
    icon: <SiMongodb style={{ color: '#086201' }} />,
  },
  {
    name: 'Git',
    icon: <BsGithub style={{ color: '#ff7a00' }} />,
  },
];

const intereses = [
  {
    name: 'Golang',
    icon: <TbBrandGolang style={{ color: '#006aff' }} />,
  },
];

const stats = [
  {
    name: 'Proyectos',
    value: 1,
  },
  {
    name: 'Investigaciones',
    value: 2,
  },
  {
    name: 'Trabajos',
    value: 2,
  },
];

export default function About() {
  const refArray = Array.from({ length: 6 }, () => useRef(null));

  useEffect(() => {
    AOS.init();
    anime({
      targets: [refArray[0].current, refArray[1].current, refArray[2].current],
      translateX: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: 1500,
    });
    anime({
      targets: [refArray[3].current, refArray[4].current, refArray[5].current],
      translateX: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: 1500,
    });
  }, []);
  return (
    <section className='about'>
      <section className='info'>
        <h1 ref={refArray[0]}>MÁS INFORMACIÓN SOBRE MÍ</h1>
        <section className='bibiografia'>
          <section>
            <div>
              <img src='/icon2.png' ref={refArray[1]} />
              <div>
                <h1 ref={refArray[2]}>Programador Frontend</h1>
                <p ref={refArray[3]}>
                  soy un programador encantado con el mundo de las
                  investigaciones y actualmente me encuentro trabajando en
                  semilleros de investigacion con la univerisidad corporativa
                  del meta, para el desarrollo de nuevas metodologias de
                  enseñanza para el area del departamento de ciencias basicas y
                  ingles.
                </p>
                <section ref={refArray[4]} className='infoPersonal'>
                  {data.map((element) => (
                    <p key={element.name}>
                      <strong>{element.name}:</strong>
                      {element.value}
                    </p>
                  ))}
                </section>
                <p ref={refArray[5]}>
                  Como programador, tengo experiencia en tecnologías de
                  front-end como Angular, React, TypeScript y CSS, y habilidades
                  en backend con Node.js, Express, MongoDB y PostgreSQL. Mi
                  experiencia lo cual me permite adaptarme rapidamente.
                </p>
              </div>
            </div>
            <section className='stat'>
              {stats.map((stat) => (
                <section data-aos='fade-up' key={stat.name}>
                  <h2>{stat.name}</h2>
                  <p>{stat.value}</p>
                </section>
              ))}
            </section>
            <div className='containerSkill'>
              <section className='skill'>
                <h1 data-aos='fade-up'>Habilidades</h1>
                <section>
                  {skills.map((skill) => (
                    <div data-aos='fade-up' key={skill.name}>
                      {skill.icon}
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </section>
              </section>
              <section data-aos='fade-up' className='interest'>
                <h1 data-aos='fade-up'>Intereses</h1>
                <section>
                  {intereses.map((interest) => (
                    <div key={interest.name}>
                      {interest.icon}
                      <p>{interest.name}</p>
                    </div>
                  ))}
                </section>
              </section>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
