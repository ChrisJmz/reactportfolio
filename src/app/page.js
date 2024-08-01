'use client';
import styles from '@/styles/page.module.css'
import { useRef, useEffect, useState } from 'react'
import Header from '@/components/header/header';
import StickyCursor from '@/components/stickyCursor';
import './globals.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Lenis from '@studio-freight/lenis';
import Index from './home';
import Curve from '@/components/curve';
import { AnimatePresence } from 'framer-motion';



export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    setTimeout( () => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0,0);
    }, 2000)

    requestAnimationFrame(raf)
  }, [])
  
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Curve />}
        </AnimatePresence>
        <Index/>
    </main>
    // <main className={styles.main}>
    // <section className={styles.main}>
    //   <nav className={styles.navbar}>
    //     <h1 className="text-xl font-medium">developped by cj.</h1>
    //       <ul className="flex items-center">
    //         <li>
    //           <Header ref={stickyElement}/>
    //           <StickyCursor stickyElement={stickyElement}/>              
    //         </li>
    //       </ul>
    //   </nav>
    //   <div className="flex flex-col justify-center items-center">
        // <div ref={loader} className={styles.loader}>
        //   <svg>
        //     <path ref={path}></path>
        //   </svg>
        // </div>
    //       <h1 className="text-5xl font-medium md:text-9xl">Christian JIMENEZ</h1>
    //       <h2 className="text-2xl py-2 md:text-5xl">Developpeur fullstack.</h2>
    //       <p className="text-md py-5 leading-7 text-gray-500 max-w-5xl mx-auto md:text-4xl z-10">
    //         Passionné par la création de site internet, je recherche
    //           un stage dans le domaine du web. Mon objectif est
    //           d&apos;approfondir mes compétences, ainsi que d&apos;explorer
    //           des domaines connexes tels que la conception web,
    //           l&apos;expérience utilisateur et la sécurité web.
    //       </p>
    //     <div className="text-5xl flex justify-center py-4">
    //         <a href="https://www.linkedin.com/in/jimenez-christian-3aa4201a9/" target="_blank" rel="noopener noreferrer">
    //           <AiFillLinkedin />
    //         </a>
    //         <a href="https://github.com/ChrisJmz/" target="_blank" rel="noopener noreferrer">
    //           <AiFillGithub />
    //         </a>
    //       </div>
    //     </div>
    //     <div className={styles.spacer}></div>

    //   </section>

    //   <section className="h-1">
    //     <div className={styles.spacer}> 

    //       <div className="w-full bg-gray-50 z-10">
    //       <div className="text-center">
    //         <h3 className="text-3xl py-10 flex justify-center md:text-5xl">Projets</h3>
    //         <p className="text-md py-5 leading-7 text-gray-800 max-w-xl mx-auto ">Voici quelques-uns des projets que j&apos;ai pu
    //           réaliser durant ma formation à l&apos;école 42. Ces projets m&apos;ont permis de développer
    //            mes compétences en programmation, en résolution de problèmes et en travail d&apos;équipe.</p>
    //       </div>


    //       <div className="lg:flex gap-10 md:px-20 lg:px40" data-aos="fade-up">
    //       <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
    //         <div className="flex-grow">
    //         <h3 className={styles.projectname}>FT_TRANSCENDENCE</h3>
    //         <p className="text-md py-5 leading-7 text-gray-500 max-w-xl mx-auto">Développement d&apos;une application web (jeu du Pong) </p>
    //         <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
    //         <p className="text-gray-800 py-1">NestJs, TypeScript, ReactJs, PostgreSQL, API 42.</p>
    //         </div>
    //         <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>

    //       </div> 
    //       <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
    //         <div className="flex-grow">
    //           <h3 className={styles.projectname}>FT_IRC</h3>
    //           <p className="text-md py-5 leading-7 text-gray-500 max-w-xl mx-auto">Développement en C++ d&apos;une application de messagerie</p>
    //           <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
    //           <p className="text-gray-800 py-1">C++, Makefile.</p>
    //         </div>
    //         <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
    //       </div>

    //       <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
    //         <div className="">
    //           <h3 className={styles.projectname}>CUB3D</h3>
    //           <p className="text-md py-5 leading-7 text-gray-500 max-w-2xl mx-auto">Développement en C d&apos;un jeu en 3D avec MiniLibX.</p>
    //           <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
    //           <p className="text-gray-800 py-1">MiniLibX, Makefile, C.</p>
    //         </div>
    //         <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
    //       </div>

    //       <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
    //         <div className="flex-grow">
    //           <h3 className="text-lg font-bold pt-8 pb-2">FT_INCEPTION</h3>
    //           <p className="text-md py-5 leading-7 text-gray-500 max-w-2xl mx-auto">Déploiement et gestion de services avec Docker.</p>
    //           <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
    //           <p className="text-gray-800 py-1">Docker, Nginx, DbMaria, Wordpress.</p>
    //         </div>
    //         <button className="bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
    //       </div> 

    //       </div>
    //       </div>
    //     </div>
    //     <div className={styles.spacer}></div>
    //     </section>

    // </main>
  )
}