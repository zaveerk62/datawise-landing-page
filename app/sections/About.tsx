import Image from 'next/image';
import arrowRight from '@/public/assets/arrow-right.svg';

export const About = () => {
  
  const stats = [
    {
      value: "32+",
      name: 'Years in AI Innovation',
    },
    {
      value: "20",
      name: 'Clients Countries Worldwide',
    },
    {
      value: "4000+",
      name: 'Projects Successfully Implemented',
    },
  ]

  return <section className="py-16 lg:py-24">
    <div className="container">
      <h3 className="uppercase text-primary-green mb-4 font-dm">about us</h3>
      <h2 className="text-5xl font-bold leading-normal font-dm">Empowering Innovation AI</h2>
      <div className="text-neutral-500 text-xl leading-relaxed flex flex-col gap-6 mt-10">
      <p>We are driven by the vision of transforming businesses with artificial intelligence. Founded in 2024, we have consistently pushed the boundaries of AI to offer smart, scalable and intuitive solutions that drive growth and efficiency.</p>
      <p>Our team of expert data scientists, engineers, and strategists combines cutting-edge technology with deep industry knowledge to deliver custom AI solutions that cater to unique business challenges.</p>
      </div>
      <div className="mt-10 flex flex-wrap gap-8">
        {stats.map((stat)=> (
          <div key={stat.name} className='flex-1 flex-col gap-2 max-w-[150px] last-of-type:max-w-[180px]'>
            <p className="text-neutral-400 text-4xl font-semibold font-dm">{stat.value}</p>
            <p className="text-neutral-500 text-base">{stat.name}</p>
          </div>
        ))}
      </div> 
      
      <a href="#" className="text-[#3a7326] text-sm inline-flex items-center justify-center gap-2 mt-8 hover:underline">Read more <span><Image className='size-3' src={arrowRight} alt="Arrow Right" /></span></a>
     
    </div>
  </section>;
};
