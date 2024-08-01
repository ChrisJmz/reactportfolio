// src/app/home.js
import React, { useRef, useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Header from '@/components/header/header';
import StickyCursor from '@/components/stickyCursor';
// import './globals.css';
import styles from '@/styles/page.module.css'
import Menu from '@/components/menu/index';
import CenteredPixelTransition from '@/components/pixelTransition/centered/index';


const Index = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0});
  const stickyElement = useRef(null);
  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 1000;
  let start;

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


    if (loader.current){
      loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
    }


    if(elapsed < duration){

      requestAnimationFrame(animate)

    }

  }


  const easeOutQuad = (time, start, end, duration) => {

    return -end * (time /= duration) * (time - 2) + start;

  }

  const loaderHeight = () => {
    if (loader.current) {
      const loaderBounds = loader.current.getBoundingClientRect();
      return loaderBounds.height;
    }
    return 0;
  };


  const setPath = (curve) => {

    const width = window.innerWidth

    const height = loaderHeight();

    if (path.current) {
      path.current.setAttributeNS(null, "d",
        `M0 0
        L${width} 0
        L${width} ${height}
        Q${width / 2} ${height - curve} 0 ${height}
        L0 0`
      );
    }
  }
  
  const updateDimensions = () => {
    const {innerWidth, innerHeight} = window;
    setDimensions({width: innerWidth, height: innerHeight});
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <main className={styles.main}>
            <nav className={styles.navbar}>
                <h1 className="text-xl font-medium">developped by cj.</h1>
                <ul className="flex items-center">
                    <li>
                    <Header ref={stickyElement} menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
                    {!menuIsActive && <StickyCursor stickyElement={stickyElement}/>}              
                    <Menu menuIsActive={menuIsActive}/>
                    <CenteredPixelTransition menuIsActive={menuIsActive}/>
                    </li>
                </ul>
            </nav>
        <div className="flex py-10 flex-col justify-center items-center">
            <h1 className="text-5xl font-medium md:text-6xl">Hi, i&apos;m Christian Jimenez</h1>
            <h2 className="text-2xl py-4 md:text-5xl">Fullstack developper.</h2>
            <p className="text-md py-5 leading-7 text-gray-500 max-w-5xl mx-auto md:text-3xl z-1">
                Explore my portfolio to see my projects and resume.
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
        {/* <div ref={loader} className={styles.loader}>
          <svg>
            <path ref={path}></path>
          </svg>
      </div> */}
    </main>
  );
};

export default Index;