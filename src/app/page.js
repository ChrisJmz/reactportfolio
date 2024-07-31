'use client';
import styles from '../styles/page.module.css'
import { useRef, useEffect } from 'react'
import Header from '../components/header/header';
import StickyCursor from '../components/stickyCursor';
import './globals.css'
import {AiFillLinkedin, AiFillGithub, AiFillFile} from 'react-icons/ai'
import Lenis from '@studio-freight/lenis';



export default function Home() {

  const stickyElement = useRef(null);
  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 600;
  let start;

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {

    setPath(initialCurve)

  }, [])

  useEffect(() => {

    setPath(initialCurve)

    setTimeout( () => {

      requestAnimationFrame(animate)

    }, 500)

  }, [])


  const animate = (timestamp) => {

    if(start === undefined){

      start = timestamp

    }

    const elapsed = timestamp - start;


    loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";


    if(elapsed < duration){

      requestAnimationFrame(animate)

    }

  }


  const easeOutQuad = (time, start, end, duration) => {

    return -end * (time /= duration) * (time - 2) + start;

  }

  const loaderHeight = () => {

    const loaderBounds = loader.current.getBoundingClientRect();

    return loaderBounds.height;

  }


  const setPath = (curve) => {

    const width = window.innerWidth

    const height = loaderHeight();

    path.current.setAttributeNS(null, "d",

    `M0 0

    L${width} 0

    L${width} ${height}

    Q${width/2} ${height - curve} 0 ${height}

    L0 0`

    )

  }
  
  return (
    <main className={styles.main}>
      <section className={styles.main}>
      <nav className={styles.navbar}>
        <h1 className="text-xl font-medium">developped by cj.</h1>
          <ul className="flex items-center">
            <li>
              <Header ref={stickyElement}/>
              <StickyCursor stickyElement={stickyElement}/>              
            </li>
          </ul>
      </nav>
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium md:text-9xl">Christian JIMENEZ</h1>
          <h2 className="text-2xl py-2 md:text-5xl">Developpeur fullstack.</h2>
          <p className="text-md py-5 leading-7 text-gray-500 max-w-5xl mx-auto md:text-4xl z-10">
            Passionné par la création de site internet, je recherche
              un stage dans le domaine du web. Mon objectif est
              d&apos;approfondir mes compétences, ainsi que d&apos;explorer
              des domaines connexes tels que la conception web,
              l&apos;expérience utilisateur et la sécurité web.
          </p>
        <div className="text-5xl flex justify-center py-4">
            <a href="https://www.linkedin.com/in/jimenez-christian-3aa4201a9/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ChrisJmz/" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className={styles.spacer}></div>

        <div ref={loader} className={styles.loader}>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>
      </section>

      <section className="h-1">
        <div className={styles.spacer}> 

          <div className="w-full bg-gray-50 z-10">
          <div className="text-center">
            <h3 className="text-3xl py-10 flex justify-center md:text-5xl">Projets</h3>
            <p className="text-md py-5 leading-7 text-gray-800 max-w-xl mx-auto ">Voici quelques-uns des projets que j&apos;ai pu
              réaliser durant ma formation à l&apos;école 42. Ces projets m&apos;ont permis de développer
               mes compétences en programmation, en résolution de problèmes et en travail d&apos;équipe.</p>
          </div>


          <div className="lg:flex gap-10 md:px-20 lg:px40" data-aos="fade-up">
          <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
            <div className="flex-grow">
            <h3 className={styles.projectname}>FT_TRANSCENDENCE</h3>
            <p className="text-md py-5 leading-7 text-gray-500 max-w-xl mx-auto">Développement d&apos;une application web (jeu du Pong) </p>
            <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
            <p className="text-gray-800 py-1">NestJs, TypeScript, ReactJs, PostgreSQL, API 42.</p>
            </div>
            <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>

          </div> 
          <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
            <div className="flex-grow">
              <h3 className={styles.projectname}>FT_IRC</h3>
              <p className="text-md py-5 leading-7 text-gray-500 max-w-xl mx-auto">Développement en C++ d&apos;une application de messagerie</p>
              <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
              <p className="text-gray-800 py-1">C++, Makefile.</p>
            </div>
            <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
          </div>

          <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
            <div className="">
              <h3 className={styles.projectname}>CUB3D</h3>
              <p className="text-md py-5 leading-7 text-gray-500 max-w-2xl mx-auto">Développement en C d&apos;un jeu en 3D avec MiniLibX.</p>
              <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
              <p className="text-gray-800 py-1">MiniLibX, Makefile, C.</p>
            </div>
            <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
          </div>

          <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
            <div className="flex-grow">
              <h3 className="text-lg font-bold pt-8 pb-2">FT_INCEPTION</h3>
              <p className="text-md py-5 leading-7 text-gray-500 max-w-2xl mx-auto">Déploiement et gestion de services avec Docker.</p>
              <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
              <p className="text-gray-800 py-1">Docker, Nginx, DbMaria, Wordpress.</p>
            </div>
            <button className="bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
          </div> 

          </div>
          </div>
        </div>
        <div className={styles.spacer}></div>
        </section>

    </main>
  )
}