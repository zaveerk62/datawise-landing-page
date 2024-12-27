import Image from 'next/image';
import solutionIcon1 from '@/public/assets/Icon.svg';
import solutionIcon2 from '@/public/assets/Icon-2.svg';
import solutionIcon3 from '@/public/assets/Icon-3.svg';
import solutionIcon4 from '@/public/assets/Icon-4.svg';

const cards = [
  {
    icon: solutionIcon1,
    title: 'Advanced Data Analytics',
    description: 'Predictive analytics to gain actionable insights and forecast future trends.',
  },
  {
    icon: solutionIcon2,
    title: 'Operations with Automation',
    description: 'Enhance your operational efficiency with our AI-driven automated workflows.',
  },
  {
    icon: solutionIcon3,
    title: 'Unlock Insights with NLP',
    description: 'Language processing to extract meaningful unstructured data.',
  },
  {
    icon: solutionIcon4,
    title: 'Custom AI for Your Needs',
    description: 'Collaborate with our AI experts to build and deploy bespoke models',
  },
]

export const Solutions = () => {
  return <section className='py-16 lg:py-24'>
    <div className="container">
      <div className='md:max-w-[550px] lg:max-w-[700px] mx-auto'>
      <h3 className='uppercase text-center text-primary-green mb-4 font-dm'>Solutions</h3>
      <h2 className='text-5xl font-bold text-center leading-snug mb-10 font-dm'>Revolutionize Your Business with Our AI-Powered Features</h2>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {cards.map((card)=>(
          <div key={card.title} className="border-t-[1px] border-neutral-500/40 py-10">
          <Image src={card.icon.src} alt="Solution Icon" className='mb-16' width={61} height={61} />
          <h4 className='text-neutral-400 text-2xl font-semibold mb-4 font-dm'>{card.title}</h4>
          <p className='text-neutral-500 text-base'>{card.description}</p>
        </div>
        ))}
       
      </div>
    </div>
  </section>;
};
