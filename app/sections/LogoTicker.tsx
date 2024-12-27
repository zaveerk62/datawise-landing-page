'use client';

import Image from 'next/image';
import tickerLogo2 from '@/public/assets/Logo-2.svg';
import tickerLogo3 from '@/public/assets/Logo-3.svg';
import tickerLogo4 from '@/public/assets/Logo-4.svg';
import tickerLogo5 from '@/public/assets/Logo-5.svg';
import tickerLogo6 from '@/public/assets/Logo-6.svg';
import tickerLogo7 from '@/public/assets/Logo-7.svg';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className='py-8 lg:py-16'>
      <div className='container'>
        <div className='flex flex-col gap-8'>
          <div className='overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <motion.div
              className='flex flex-none gap-14 pr-14'
              animate={{ translateX: '-50%' }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              <Image src={tickerLogo2} alt='Logo Ticker' />
              <Image src={tickerLogo3} alt='Logo Ticker' />
              <Image src={tickerLogo4} alt='Logo Ticker' />
              <Image src={tickerLogo5} alt='Logo Ticker' />
              <Image src={tickerLogo6} alt='Logo Ticker' />
              <Image src={tickerLogo5} alt='Logo Ticker' />
              <Image src={tickerLogo6} alt='Logo Ticker' />
              <Image src={tickerLogo7} alt='Logo Ticker' />
              
              <Image src={tickerLogo2} alt='Logo Ticker' />
              <Image src={tickerLogo3} alt='Logo Ticker' />
              <Image src={tickerLogo4} alt='Logo Ticker' />
              <Image src={tickerLogo5} alt='Logo Ticker' />
              <Image src={tickerLogo6} alt='Logo Ticker' />
              <Image src={tickerLogo5} alt='Logo Ticker' />
              <Image src={tickerLogo6} alt='Logo Ticker' />
              <Image src={tickerLogo7} alt='Logo Ticker' />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
