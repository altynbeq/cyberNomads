import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import headerImg from "../assets/header-img.svg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Hero = () => {
  const isDesktop = window.innerWidth > 1024;

  return (
    <section className='relative w-full h-screen mx-auto flex flex-col'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5 mb-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white overflow-hidden`}>Добро пожаловать в
            <br />
            <span className="text-[#915eff]">Cyber Nomads</span>
          </h1>
          <p className={`${styles.heroSubText} hidden font-serif overflow-hidden  lg:block  mt-2 text-white-100`}>
          Ваш надежный партнер в автоматизации бизнес-процессов! <br/>
          Мы предлагаем широкий спектр услуг по выгодным ценам,  без ущерба качеству.
          </p>
        </div>
      </div>

      {/* {CHANGED THIS DIV FROM BOTTOM-32 TO BOTTOM-10} */}
      <div className='absolute xs:bottom-10 bottom-10 mt-10 w-full flex flex-col justify-center items-center'>
        <div className={`${isDesktop ? "w-[23%] animate-pulse" : "w-[63%] mb-10"}`}
          style={{ animationDuration: '3s', animationTimingFunction: 'cubic-bezier(0.8, 0.5, 0.5, 0.5)' }}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
        </div>
            
        <a href='#about'>
          <div className='w-[35px] h-[44px] bottom-2 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            >
            </ motion.dev>
            <h1></h1>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero