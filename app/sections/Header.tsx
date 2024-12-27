// 'use client';

// import DatawiseLogo from '@/public/assets/DataWise-logo.svg';
// import ArrowDown from '@/public/assets/arrow-down.svg';
// import MenuIcon from '@/public/assets/icon-menu.svg';
// import Image from 'next/image';

// export const Header = () => {

//   return (
//     <header className='flex items-center p-8 lg:px-16 justify-between border-b border-opacity-10 border-neutral-400'>
//       <div className='flex gap-20 items-center'>
//         <Image src={DatawiseLogo} alt='DataWise Logo' className='' />
//         <nav className='gap-10 hidden lg:flex'>
//           <a href='#' className='text-sm text-neutral-400 hover:text-neutral-200 transition ease-in-out tracking-wider'>
//             <span className='inline-flex items-center justify-center gap-2'>
//               Features <Image src={ArrowDown} alt='Arrow Down' />
//             </span>
//           </a>
//           <a href='#' className='text-sm text-neutral-400 hover:text-neutral-200 transition ease-in-out tracking-wider'>
//             <span className='inline-flex items-center justify-center gap-2'>
//               Case Studies <Image src={ArrowDown} alt='Arrow Down' />
//             </span>
//           </a>
//           <a href='#' className='text-sm text-neutral-400 tracking-wider'>
//             English
//           </a>
//           <a href='#' className='text-sm text-neutral-400 tracking-wider'>
//             Support
//           </a>
//         </nav>
//       </div>

//       <div className='md:flex md:w-full lg:w-auto md:justify-end md:mr-6 lg:mr-0 hidden gap-4'>
//         <button className='btn-outline'>
//           <a href='#' className='tracking-wide'>
//             Get a demo
//           </a>
//         </button>
//         <button className='btn-primary'>
//           <a href='#' className='tracking-wide'>
//             Start your free trial
//           </a>
//         </button>
//       </div>
//       <Image
//         src={MenuIcon}
//         alt='Menu Icon'
//         className='size-6 lg:hidden ml-auto'
//       />
//     </header>
//   );
// };

'use client';

import DatawiseLogo from '@/public/assets/DataWise-logo.svg';
import ArrowDown from '@/public/assets/arrow-down.svg';
import MenuIcon from '@/public/assets/icon-menu.svg';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileMenu } from '../components/MobileMenu';

export const Header = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | 'l' | 'r'>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l'); // Determine direction
    } else {
      setDir(null); // Reset direction when none selected
    }
    setSelected(val);
  };

  const dropdownContent = [
    {
      id: 0,
      label: 'Features',
      items: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      id: 1,
      label: 'Case Studies',
      items: ['Case Study 1', 'Case Study 2', 'Case Study 3'],
    },
  ];

  return (
    <header className='flex items-center p-8 lg:px-16 justify-between border-b border-opacity-10 border-neutral-400'>
      <div className='flex gap-20 items-center'>
        <Image src={DatawiseLogo} alt='DataWise Logo' />
        <nav className='gap-10 hidden lg:flex lg:items-center relative'>
          {dropdownContent.map((tab) => (
            <div
              key={tab.id}
              className='relative group'
              onMouseEnter={() => handleSetSelected(tab.id)}
              onMouseLeave={() => handleSetSelected(null)}
            >
              <a
                href='#'
                className='text-sm text-neutral-400 hover:text-neutral-200 transition ease-in-out tracking-wider flex items-center gap-2'
              >
                {tab.label}
                <Image
                  src={ArrowDown}
                  alt='Arrow Down'
                  className='transition-transform duration-300 group-hover:rotate-180'
                />
              </a>
              <AnimatePresence>
                {selected === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{
                      opacity: 0,
                      x: dir === 'l' ? -20 : dir === 'r' ? 20 : 0, // Start shifted based on direction
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0, // Reset to center
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: dir === 'l' ? -20 : dir === 'r' ? 20 : 0, // Exit shifted in direction
                      y: -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                    className='absolute top-full left-0 w-64 mt-2 p-4 rounded-lg border border-neutral-600 bg-neutral-900 shadow-lg'
                  >
                    <h3 className='text-sm font-medium mb-2'>{tab.label}</h3>
                    <ul className='space-y-1 text-neutral-400'>
                      {tab.items?.map((item, index) => (
                        <li key={index}>
                          <a href='#'>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a href='#' className='text-sm text-neutral-400 hover:text-neutral-200 transition ease-in-out tracking-wider'>
            English
          </a>
          <a href='#' className='text-sm text-neutral-400 hover:text-neutral-200 transition ease-in-out tracking-wider'>
            Support
          </a>
        </nav>
      </div>

      <div className='md:flex md:w-full lg:w-auto md:justify-end md:mr-6 lg:mr-0 hidden gap-4'>
        <button className='btn-outline'>
          <a href='#' className='tracking-wide'>
            Get a demo
          </a>
        </button>
        <button className='btn-primary'>
          <a href='#' className='tracking-wide'>
            Start your free trial
          </a>
        </button>
      </div>
      {/* <Image
        src={MenuIcon}
        alt='Menu Icon'
        className='size-6 lg:hidden ml-auto'
        onClick={() => toggleMobileNav()}
      /> */}
    <MobileMenu />
    </header>
  );
};

export default Header;
