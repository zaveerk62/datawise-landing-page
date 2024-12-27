import Image from 'next/image';
import heroImg from '@/public/assets/hero-img.svg';

export const Hero = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between md:px-8 lg:px-0 mx-auto container">
      <div className='text-start mx-auto flex px-0 flex-col gap-4 lg:max-w-[900px] md:mx-0 w-full'>
        <h1 className='font-dm text-neutral-200 font-semibold text-6xl md:text-7xl tracking-tight md:tracking-normal leading-tight md:max-w-[600px] lg:[max-width:900px]'>
          Unleash&nbsp;the Power of Data
        </h1>
        <p className='text-neutral-500 text-xl leading-relaxed lg:max-w-[650px]'>
          Step into the future with our state-of-the-art AI solutions. Unleash
          the potential of machine learning to innovate, optimize, and transform
          your business processes.
        </p>
        <div className='mt-4 flex flex-col md:flex-row gap-4 w-full'>
          <button className='btn-primary'>
            <a href='#' className='tracking-wide'>
              Start your free trial
            </a>
          </button>
          <button className='btn-outline text-neutral-200'>
            <a href='#' className='tracking-wide'>
              Learn more
            </a>
          </button>
        </div>
      </div>
      <div className='mt-10 flex items-center justify-center md:justify-end'>
        <Image src={heroImg} alt='Hero Image' className='lg:size-96' />
      </div>
      </div>
    </section>
  );
};
