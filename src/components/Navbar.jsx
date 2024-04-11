import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom' 
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full fixed  overflow-hidden flex items-center py-5  top-0 z-10 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link 
          to="/" 
          className='flex items-center gap-2' 
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Cyber Nomads <span className='sm:block hidden'>| Digital Agency</span></p>
        </Link>
        <ul className='list-none  z-10 hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => {
            return(
              <li key={link.id} 
                  className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title)
                  }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          })}
        </ul>
        <div className='sm:hidden sm:fixed z-50 flex flex-1 justify-end items-center'>
          {/* <a href="#contact">Контакты</a> */}
          <img  src={toggle ? close : menu} alt="menu" 
                className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex fixed'} top-10  p-6 black-gradient right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl`}>
            <MobileMenu active={active} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar