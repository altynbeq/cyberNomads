import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { Tilt } from 'react-tilt'
import { github } from '../assets'
import { whatsapp } from '../assets'

const isDesktop = window.innerWidth > 1024;

const ProjectCard = ({index, name, description, tags, image , source_code_link}) => (
  <>
  { isDesktop ? (
      <div>
        <motion.div
          variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
          <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
              <div className='relative w-full h-[230px]'>
                <img
                  src={image}
                  alt='project_image'
                  className='w-full h-full object-fit rounded-2xl'
                />

                {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  >
                    <img
                      src={github}
                      alt='source code'
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div> */}
              </div>

              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px] flex content-center justify-center'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px] flex content-center justify-center'>{description}</p>
              </div>

              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </motion.div>
      </div>
    ) : (
      <div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-fit rounded-2xl'
            />

            {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient  w-fit p-2 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <p>Заказать</p>
              </div>
            </div> */}
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px] flex content-center justify-center'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] flex content-center justify-center'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          <div className='flex justify-center align-center '>
            <button className='flex  width-[50%] mt-3  justify-center card-img_hover black-gradient pt-2 pb-2 pr-4 pl-4 rounded-xl'>Заказать</button>
          </div>
        </Tilt>
      </div>
    )
    }
  </>
)
  // <motion.div
  //   variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  // >
  //   <Tilt
  //       options={{
  //         max: 45,
  //         scale: 1,
  //         speed: 450,
  //       }}
  //       className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
  //     >
  //       <div className='relative w-full h-[230px]'>
  //         <img
  //           src={image}
  //           alt='project_image'
  //           className='w-full h-full object-fit rounded-2xl'
  //         />

  //         <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
  //           <div
  //             onClick={() => window.open(source_code_link, "_blank")}
  //             className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  //           >
  //             <img
  //               src={github}
  //               alt='source code'
  //               className='w-1/2 h-1/2 object-contain'
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       <div className='mt-5'>
  //         <h3 className='text-white font-bold text-[24px] flex content-center justify-center'>{name}</h3>
  //         <p className='mt-2 text-secondary text-[14px] flex content-center justify-center'>{description}</p>
  //       </div>

  //       <div className='mt-4 flex flex-wrap gap-2'>
  //         {tags.map((tag) => (
  //           <p
  //             key={`${name}-${tag.name}`}
  //             className={`text-[14px] ${tag.color}`}
  //           >
  //             #{tag.name}
  //           </p>
  //         ))}
  //       </div>
  //     </Tilt>
  //   </motion.div>

const Works = () => {
  return (
    <>
    {
      isDesktop ? (
        <div>
        <motion.div variants={textVariant()}>
            <h2 className={styles.heroHeadText}>
              Наши услуги
            </h2>
          </motion.div> 
          <div className='w-full flex'>
            <motion.p 
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
              >
              Откройте двери к новым возможностям с нашими услугами! <br />
              Мы предлагаем нечто большее, чем просто стандартный каталог услуг. Оставьте заявку на консультацию, и мы создадим индивидуальное решение, подходящее именно для вашего бизнеса. <br />
              <br/>
              Наши услуги сопровождаются безукоризненной поддержкой 24/7 после запуска проекта.<br /> 
              <br />
              <div className='text-white font-extrabold text-[20px]'>
                И помните, наши услуги - это инвестирование в успех вашего бизнеса. Оптимизация процессов приведет к уменьшению издержек и повышению эффективности вашего предприятия. 
              </div>
              </motion.p>
          </div>
          <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map( (project, index) => (
              <ProjectCard key={`project-${index}`} {...project}/>
            ) )}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h2 className={styles.heroHeadText}>
              Наши услуги
            </h2>
          </div>
          <div className='w-full flex'>
            <p className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]">
              Откройте двери к новым возможностям с нашими изысканными услугами! <br />
              Мы предлагаем нечто большее, чем просто стандартный каталог услуг. Оставьте заявку на консультацию, и мы создадим индивидуальное решение, подходящее именно для вашего бизнеса. <br />
              <br/>
              
              <div className='text-white font-extrabold text-[20px]'>
                И помните, наши услуги - это инвестирование в успех вашего бизнеса. Оптимизация процессов приведет к уменьшению издержек и повышению эффективности вашего предприятия. 
              </div>
            </p>
          </div>
          <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map( (project, index) => (
              <ProjectCard key={`project-${index}`} {...project}/>
            ) )}
          </div>
        </div>
      )
    }
    </>
  )
}

export default SectionWrapper(Works, 'projects');