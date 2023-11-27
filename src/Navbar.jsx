import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion} from 'framer-motion';
import images from './Assets/Images';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Events', link: '/events' },
    { name: 'Team', link: '/team' },
    { name: 'Contact', link: '/contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.17, // Adjust the stagger effect
      },
    },
  };

  // const logoVariants = {
  //   hidden: {
  //     x: '0%', // Initially, the logo is at 0%
  //   },
  //   visible: {
  //     x: '0%', // When visible, it stays at 0%
  //   },
  //   slide: {
  //     x: '-100%', // Slide the logo to -100%
  //   },
  // };

  // const logoTransition = {
  //   duration: 0.3,
  //   ease: 'easeOut',
  // };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className={`${toggle ? 'flex-col transform translate-y-0 transition-transform ease-out duration-300' : 'flex lg:flex-row'} h-min min-h-[60px] w-full p-4 mb-4 border-b-2 fixed font-medium z-50 shadow-lg bg-white bg-opacity-25 backdrop-blur-md border border-opacity-25 border-white`}>
      <div className="nav__logo flex justify-center items-center">
        <img src={images.SiamLogo} alt="" className={`${toggle ? '' : 'm-4'} h-8`} />
        {/* <motion.img
          initial="hidden" // Initially, set it to hidden state
          animate={toggle ? 'visible' : 'slide'} // Animate based on toggle
          variants={logoVariants}
          transition={logoTransition}
          src={SiamLogo}
          alt=""
          className={`${toggle ? '' : 'm-4'} h-8`}
          color="#04A89B"
        /> */}
      </div>

      <div className="flex-grow"></div>
      <ul className="nav__menu hidden lg:flex flex-row justify-center items-center">
        {navItems.map((item, key) => (
          <li key={key}>
            <NavLink
              to={item.link}
              className={({ isActive, isPending }) =>
                isActive
                  ? 'text-primary m-4 border-b-2 border-primary'
                  : isPending
                  ? 'pending'
                  : 'flex m-4'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* responsive nav */}

      <div className="responsive__navbar-menu lg:hidden relative flex flex-col justify-center items-end">
        {toggle ? (
          <>
            <HiX onClick={() => setToggle(false)} className='hover:text-primary'/>
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              
              className="space-y-2 flex flex-col justify-center items-center w-screen"
            >
              {navItems.map((item, key) => (
                <motion.li
                  key={key}
                  variants={menuItemVariants}
                  className="flex justify-center items-center w-full"
                >
                  <NavLink
                    to={item.link}
                    onClick={() => setToggle(false)}
                        className={({ isActive, isPending }) =>
                        isActive
                        ? 'text-primary m-2 border-b-2 border-primary'
                        : isPending
                        ? 'pending'
                        : 'flex m-2'
              }
            >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </>
        ) : (
          <HiMenuAlt4 onClick={() => setToggle(true)} className='hover:text-primary' />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
