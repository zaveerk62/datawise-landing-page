'use client';

import Image from 'next/image';
import sparkleIcon from '@/public/assets/sparkle.svg';
import sparkleWhiteIcon from '@/public/assets/sparkle-white.svg';
import abstractImg from '@/public/assets/abstract.svg';
import blogImg1 from '@/public/assets/Business.svg';
import blogImg2 from '@/public/assets/Business-2.svg';
import blogImg3 from '@/public/assets/Business-3.svg';
import blogImg4 from '@/public/assets/Business-4.svg';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

const blogs = [
  {
    id: 1,
    img: blogImg1,
    subtitle: "Report",
    title: "The Rise of AI in Business Analytics: What You Need to Know",
  },
  {
    id: 2,
    img: blogImg2,
    subtitle: "News",
    title: "Customizing Your Datawise Dashboard: A Step-by-Step Guide",
  },
  {
    id: 3,
    img: blogImg3,
    subtitle: "News",
    title: "Enhancing Your Datawise Dashboard: A Step-by-Step Guide",
  },
  {
    id: 4,
    img: blogImg4,
    subtitle: "Report",
    title: "The Rise of AI in Business Analytics: What You Need to Know",
  },
]

export const Blogs = () => {
  
  const blogRef = useRef(null);
  
  return (
    <section ref={blogRef} className='py-16 lg:py-24'>
      <div className='flex flex-col lg:flex-col-reverse'>
      <div className='w-full bg-[#181a16] py-10'>
        <div className='px-6 container mx-auto lg:flex lg:items-center flex-row '>
          <div className='flex flex-col gap-2 items-center md:items-start'>
            <h4 className='text-white text-3xl md:text-5xl font-semibold mb-4 w-full font-dm'>
              Experience the future of Business Analytics
            </h4>
            <p className='text-neutral-500 text-base md:max-w-[500px]'>
              Get hands on with our advanced AI-driven features and see the
              difference for yourself. Start your free trial today.
            </p>
          
          <div>
            <ul className='mt-10 flex flex-col gap-4'>
              <li className='flex items-start gap-2 text-neutral-300'>
                <Image src={sparkleIcon} alt='Sparkle Icon' />
                <span>Context-aware natural Language search and discovery</span>
              </li>
              <li className='flex items-start gap-2 text-neutral-300'>
                <Image src={sparkleIcon} alt='Sparkle Icon' />
                <span>Embark on a journey of data-driven decision-making</span>
              </li>
              <li className='flex items-start gap-2 text-neutral-300'>
                <Image src={sparkleIcon} alt='Sparkle Icon' />
                <span>Single permission model for data + AI</span>
              </li>
            </ul>
          </div>
          <button className='mt-10 btn-primary text-gray-900 md:text-white md:w-auto w-full'>
            <span className='block md:hidden'>
            Get a demo
            </span>
            <span className='hidden md:block'>
              Start your free trial
              <Image src={sparkleWhiteIcon} alt='Arrow Right' className='inline-block ml-3' />
            </span>
          </button>
          </div>
          <div className='p-6 border border-neutral-500/30 rounded-2xl mt-10 relative w-full'>
            <motion.img src={abstractImg.src} alt='Abstract Image' className='w-full'
            animate={{
              translateY: [-30, 30],
            }} 
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 3,
              ease: 'easeInOut',
            }}
            />
            <div className='bg-[#141612] rounded-2xl px-6 pr-60 lg:pr-80 py-4 z-10 absolute bottom-0 left-0'>
              <Image src={sparkleIcon} alt='Sparkle Icon' className='' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 lg:mt-0 container'>
       <div className='text-center'>
       <h3 className='uppercase text-primary-green mb-3 font-dm'>Blogs</h3>
        <h2 className='text-5xl md:text-6xl font-bold leading-normal font-dm'>
          In the spotlight
        </h2>
        
          <p className='mt-8 text-neutral-500 text-base w-[250px] md:w-[600px] mx-auto'>
            Stay updated with the latest trends, tips and insights in business
            analytics. Explore our curated articles designed to empower your
            data-driven journey.
          </p>
        
       </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 lg:pb-16 mx-auto'>
         {blogs.map((blog)=>(
          <div key={blog.id} className='flex flex-col gap-4 p-8 lg:p-0'>
            <Image src={blog.img} alt="Blog Image" className='rounded-2xl w-full h-[160px] object-cover' />
            <span className='text-neutral-500 text-sm font-medium'>{blog.subtitle}</span>
            <h4 className='font-semibold font-dm text-xl'>{blog.title}</h4>
          </div>
         ))}
        </div>
      </div>
      </div>
    </section>
  );
};
