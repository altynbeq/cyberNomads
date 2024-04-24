import { styles } from '../styles'
import colorSharp2 from "../assets/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { textVariant, fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { Button } from "react-bootstrap";
import { fiveInOneData } from "../constants";



const ProjectCard = ({index, title, description, tags, imgUrl , source_code_link}) => {
  return (
    <div>
        <div className='bg-transparent p-3 rounded-2xl sm:w-[360px] w-full'>
            <div className='relative w-full h-[230px]'>
                <img
                src={imgUrl}
                alt='project_image'
                className='w-full h-full object-fit rounded-2xl'
                />
            </div>
            <div className='mt-2'>
                <h3 className='text-white font-bold text-[24px] flex content-center justify-center'>{title}</h3>
            </div>
        </div>
    </div>
  )
}

const FiveInOne = ({index, name, image , source_code_link}) => {

  return (
    <div>
        <div>
            <h2 className={styles.heroHeadText}>
                Пакет 6 в 1
            </h2>
        </div>
        <div className='w-full flex'>
            <p className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]">
                Услуга для предпринимателей, которые стремятся цифровизировать свой бизнес и поднять его на новый уровень. <br />
                Мы предоставляем комплексный пакет услуг, который легок в использовании и невероятно эффективен. Все модули находятся на одной платформе и доступны в один клик. <br />
                <br/>
                
                <span className='text-white font-extrabold text-[20px]'>
                Предложение ограничено по времени до конца апреля. <br />
                </span>
            </p>
        </div>
    <div className='mt-10 flex flex-wrap justify-around gap-7 overflow-y-hidden'>
        {fiveInOneData.map( (project, index) => (
        <ProjectCard key={`project-${index}`} {...project}/>
        ) )}
    </div>
    <div className="mt-10 flex justify-center  items-center gap-10">
{/* 
      <a href="#projects" className="text-white xs:w-full xs:text-sm flex flex-row justify-center items-center gap-2 bg-gradient-to-r from-[#151030] to-[#413986] opacity-[0.9] hover:opacity-[1] text-xl px-8 py-4 rounded-xl border border-[#413986] hover:border-transparent transition-colors duration-300">
          Больше инфорамции
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
      </a> */}

      <button onClick={() => { window.open("https://wa.me/message/7C4PIMLFH34GM1")}} className="text-white px-20 flex flex-row justify-center items-center gap-2 bg-gradient-to-r from-[#151030] to-[#413986] opacity-[0.9]  hover:opacity-[1] text-xl py-4 rounded-xl border border-[#413986] hover:border-transparent transition-colors duration-300">
          Заказать
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
      </button>
    </div>


    </div>
  )
}

export default SectionWrapper(FiveInOne, "FiveInOne")