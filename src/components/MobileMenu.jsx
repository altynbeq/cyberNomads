import React, { useContext, useState } from 'react';
import { navLinks } from '../constants';
// import ActiveContext from '../ActiveContext'; // Import ActiveContext

const MobileMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <div className='absolute z-50 top-10 p-6 black-gradient right-0 mx-4 my-2 min-w-[140px] rounded-xl'>
      <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={() => {
              setActive(link.title);
              setToggle(false); // Close the mobile menu
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;