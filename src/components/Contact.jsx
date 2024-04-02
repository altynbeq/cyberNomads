import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Нажмите на поле для связи</p>
          <h3 className={styles.sectionHeadText}>Контакты</h3>

          <form  className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Название</span>
              <input 
                type="text" 
                name="name" 
                placeholder='Enter name' 
                value='Cyber Nomads'
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email</span>
              <input 
                type="email" 
                name="email" 
                value="alt.quat@gmail.com"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary cursor-pointer text-white rounded-lg outlined-none border-none font-medium" />
            </label>
            <label className='flex flex-col cursor-pointer'>
              <span className='text-white font-medium mb-4'>WhatsApp</span>
              <input 
                value="+77765591327"
                onClick={() => window.open("https://wa.me/message/7C4PIMLFH34GM1")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg cursor-pointer outlined-none border-none font-medium" />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Instagram</span>
              <input 
                value="cybernomads_agency"
                onClick={() => window.open("https://www.instagram.com/cybernomads_agency?igsh=c3p6YnVqZ2lhaDk=")}
                className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white cursor-pointer rounded-lg outlined-none border-none font-medium" />
            </label>
          </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto  md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')