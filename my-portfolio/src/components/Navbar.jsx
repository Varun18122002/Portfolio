import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../../src/constants';
import { menu, close, linked, github } from '../../src/assets'; // Import LinkedIn and GitHub images
import { AnimatePresence, delay, motion, stagger } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [showSlide, setShowSlide] = useState(false);

  const topVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 1,
      width: 30,
      rotate: 45,
    },
  };
  const middleVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      width: 30,
    },
  };

  const listVariants = {
    closed: {
      x: 0,
    },
    opened: {
      x: '100vh',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const handleSlideAnimation = (link) => {
    setActive(link.title);
    setShowSlide(true);
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence mode="wait">
      {showSlide && (
        <div>
          <motion.div
            className="h-screen w-screen fixed bg-gradient-to-b from-[#915eff] to-red-800 rounded-b-[100px] z-40"
            initial={{ height: '100vh' }}
            animate={{ height: '0vh' }}
            exit={{ height: '140vh' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onAnimationComplete={() => setShowSlide(false)}
          />

        </div>
      )}
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              setShowSlide(false);
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white lg:text-[30px] fonts-poppins font-bold cursor-pointer sm:text-[25px] text-[25px]">
              Varun
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title
                    ? 'text-white'
                    : 'text-secondary hover:text-red-500'
                  } text-[18px] fonts-poppins drop-shadow-sm font-semibold cursor-pointer item-center lg:text-[22px] flex`}
                onClick={() => handleSlideAnimation(link)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}

            <li className="text-secondary hover:text-red-500 text-[18px] fonts-poppins drop-shadow-sm font-semibold cursor-pointer item-center lg:text-[22px] flex">
              <a href="https://www.linkedin.com/in/varun-s-237640269/">
                <img src={linked} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </li>
            <li className="text-secondary hover:text-red-500 text-[18px] fonts-poppins drop-shadow-sm font-semibold cursor-pointer item-center lg:text-[22px] flex">
              <a href="https://github.com/Varun18122002">
                <img src={github} alt="GitHub" className="h-6 w-6" />
              </a>
            </li>
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button
              className="w-10 h-6 flex flex-col justify-between z-50 relative"
              onClick={() => setToggle(!toggle)}
            >
              <motion.div
                variants={topVariants}
                animate={toggle ? 'opened' : 'closed'}
                className="w-6 h-1 bg-white rounded origin-left"
              />
              <motion.div
                variants={middleVariant}
                animate={toggle ? 'opened' : 'closed'}
                className="w-10 h-1 bg-white rounded"
              />
              <motion.div
                variants={bottomVariant}
                animate={toggle ? 'opened' : 'closed'}
                className="w-10 h-1 bg-white rounded origin-left"
              />
            </button>
            <motion.div
              variants={listVariants}
              className={`${!toggle ? 'hidden' : 'flex'
                } absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl`}
            >
              {navLinks.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  key={link.id}
                  className={`${active === link.title
                      ? 'text-white'
                      : 'text-secondary hover:text-red-500'
                    } fonts-poppins font-medium cursor-pointer pb-5 text-3xl`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleSlideAnimation(link);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </motion.div>
              ))}

              <li className="text-secondary hover:text-red-500 text-[18px] fonts-poppins drop-shadow-sm font-semibold cursor-pointer item-center lg:text-[22px] flex">
                <a href="https://www.linkedin.com/in/varun-s-237640269/">
                  <img src={linked} alt="LinkedIn" className="h-6 w-6" />
                </a>
              </li>
              <li className="text-secondary hover:text-red-500 text-[18px] fonts-poppins drop-shadow-sm font-semibold cursor-pointer item-center lg:text-[22px] flex">
                <a href="https://github.com/Varun18122002">
                  <img src={github} alt="GitHub" className="h-6 w-6" />
                </a>
              </li>
            </motion.div>
          </div>
        </div>
      </nav>
    </AnimatePresence>
  );
};

export default Navbar;
