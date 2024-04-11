import React from 'react'
import { navLinks } from '../constants'

const MobileMenu = (active) => {
  return (
    <div>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => {
            return(
                <li key={link.id} 
                    className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                    }}>
                <a href={`#${link.id}`}>{link.title}</a>
                </li>
            )
            })}
        </ul>
    </div>
  )
}

export default MobileMenu