import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const isDesktop = window.innerWidth > 1024;

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className="xs:w-[250px] w-full z-0">
      {
        isDesktop ?  (
          <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
        ) :  (
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
         </div> 
        )
      }
      {/* <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div> */}
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      {
        isDesktop ? (
          <div>
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>
                О нас
              </p>
              <h2 className={styles.heroHeadText}>
                Чем мы занимаемся?
              </h2>
            </motion.div>
              <motion.p 
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
              >
              Вложение в автоматизацию ваших бизнес-процессов - это не только выгодное, но и долгосрочное решение! Однократные затраты принесут вам значительные выгоды на протяжении многих лет! <br />
              <br />
              <div className='text-white font-extrabold '> 
                Наши решения не только оптимизируют ваше время и сокращают расходы, но и эффективно управляют вашими ресурсами!
              </div>
            </motion.p>
          </div>
        ) : (
          <div>
            <div>
              <p className={styles.sectionSubText}>
                О нас
              </p>
              <h2 className={styles.heroHeadText}>
                Чем мы занимаемся?
              </h2>
            </div>
            <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                <div className='text-white font-extrabold '> 
                  Мы специализируемся на разработке уникальных и эффективных IT-продуктов для бизнеса.
                </div>
                
                <br />
                <div className='text-white font-extrabold '> 
                  Наши решения не только оптимизируют ваше время и сокращают расходы, но и эффективно управляют вашими ресурсами!
                </div>
            </p>
          </div>
        )
      }
      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          О нас
        </p>
        <h2 className={styles.heroHeadText}>
          Чем мы занимаемся?
        </h2>
      </motion.div> */}
      
      {/* <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
        Вложение в автоматизацию ваших бизнес-процессов - это не только выгодное, но и долгосрочное решение! Однократные затраты принесут вам значительные выгоды на протяжении многих лет! <br />
        <br />
        <div className='text-white font-extrabold '> 
          Наши решения не только оптимизируют ваше время и сокращают расходы, но и эффективно управляют вашими ресурсами!
        </div>
      </motion.p> */}
      <div className='width-full'>
        <div className='mt-20 p-4 flex flex-wrap justify-center gap-10 overflow-y-hidden relative'>
        {services.map((service, index) => {
          return( <ServiceCard key={service.title} index={index} {...service}/> )
        } )}
        </div>
      </div>
      
    </>
  )
}

export default SectionWrapper(About, 'about')