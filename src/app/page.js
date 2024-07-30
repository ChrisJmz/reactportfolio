"use client";

import Head from "next/head"
import './globals.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import cjimenez from '../../public/cjimenez.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    AOS.init({duration: 2500});
  }, []);

  return (
    <div>
      <Head>
        <title>Christian JIMENEZ PORTFOLIO</title>
        <meta name="description" content="developped by me." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen" data-aos="fade-down">
          <nav className="py-10 flex justify-between">
            <h1 className="text-xl font-medium">developped by cj.</h1>
            <ul className="flex items-center">
              <li>
                <a className="bg-black text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5" data-aos="fade-down">
            <h2 className="text-5xl text-black font-medium md:text-9xl"> Christian JIMENEZ</h2>
            <h3 className="text-2xl py-2 md:text-5xl">Developpeur fullstack</h3>
            <p className="text-md py-5 leading-7 text-gray-500 max-w-5xl mx-auto md:text-5xl">Passionné par la création de site internet, je recherche
              un stage dans le domaine du web. Mon objectif est
              d&apos;approfondir mes compétences, ainsi que d&apos;explorer
              des domaines connexes tels que la conception web,
              l&apos;expérience utilisateur et la sécurité web.
          </p>
          </div>
          <div className="text-5xl flex justify-center gap-3" data-aos="fade-down">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </section>

        <section className="min-h-screen">
          <div className="w-full bg-gray-50 py-10 rounded-3xl">
          <div className="max-w-7xl mx-auto">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-3xl py-1 flex justify-center md:text-5xl">Projets</h3>
            <p className="text-md py-5 leading-7 text-gray-800 max-w-xl mx-auto ">Voici quelques-uns des projets que j&apos;ai pu
              réaliser durant ma formation à l&apos;école 42. Ces projets m&apos;ont permis de développer
               mes compétences en programmation, en résolution de problèmes et en travail d&apos;équipe.</p>
          </div>


          <div className="lg:flex gap-10 md:px-20 lg:px40" data-aos="fade-up">
          <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
            <div className="flex-grow">
            <h3 className="text-lg font-bold pt-8 pb-2">FT_TRANSCENDENCE</h3>
            <p className="text-md py-5 leading-7 text-gray-500">Développement d&apos;une application web (jeu du Pong) </p>
            <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
            <p className="text-gray-800 py-1">NestJs</p>
            <p className="text-gray-800 py-1">TypeScript</p>
            <p className="text-gray-800 py-1">ReactJs</p>
            <p className="text-gray-800 py-1">PostgreSQL</p>
            <p className="text-gray-800 py-1">API 42</p>
            </div>
            <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>

          </div>

          <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
            <div>
            <h3 className="text-lg font-bold pt-8 pb-2">FT_IRC</h3>
            <p className="text-md py-5 leading-7 text-gray-500 max-w-xl mx-auto">Développement en C++ d&apos;une application de messagerie</p>
            <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
            <p className="text-gray-800 py-1">C++</p>
            <p className="text-gray-800 py-1">Makefile</p>
            </div>
            <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
          </div>

          <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
            <div className="flex-grow">
            <h3 className="text-lg font-bold pt-8 pb-2">CUB3D</h3>
            <p className="text-md py-5 leading-7 text-gray-500 max-w-2xl mx-auto">Développement en C d&apos;un jeu en 3D,.</p>
            <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
            <p className="text-gray-800 py-1">C</p>
            <p className="text-gray-800 py-1">MiniLibX</p>
            <p className="text-gray-800 py-1">Makefile</p>
            </div>
            <button className=" bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
          </div>

          <div className="text-center bg-white shadow-lg p-10 rounded-3xl my-10 flex-1 flex flex-col justify-between"> 
            <div>
            <h3 className="text-lg font-bold pt-8 pb-2">FT_INCEPTION</h3>
            <p className="text-md py-5 leading-7 text-gray-500 max-w-2xl mx-auto">Déploiement et gestion de services avec Docker.</p>
            <h4 className="text-black font-medium">Langage/Outils utilisé</h4>
            <p className="text-gray-800 py-1">Docker</p>
            <p className="text-gray-800 py-1">Nginx</p>
            <p className="text-gray-800 py-1">DbMaria</p>
            <p className="text-gray-800 py-1">Wordpress</p>
            </div>
            <button className="bg-[#0068db] text-white px-4 py-2 rounded-full w-30 mx-auto ">Voir le projet</button>
          </div>

          </div>
          </div>
          </div>  
        </section>
      </main>
    </div>
  )
}