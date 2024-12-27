import { motion, useCycle, AnimatePresence, MotionConfig, delay } from "framer-motion"

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  
  return (
    <div className="lg:hidden ml-auto">
      
        <div className="relative z-40">
          <motion.button
          animate={mobileNav ? "open" : "closed"}
          onClick={() => toggleMobileNav()}
          className="flex flex-col space-y-1"
          >
            <motion.span variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6  }
            }} className="w-4 h-[2px] bg-neutral-400 block"></motion.span>
            <motion.span variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }} className="w-4 h-[2px] bg-neutral-400 block"></motion.span>
            <motion.span variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 }
            }} className="w-4 h-[2px] bg-neutral-400 block"></motion.span>
          </motion.button>
        </div>
        <AnimatePresence>
        {mobileNav && (
       <MotionConfig 
       transition={{ type: "tween", bounce: .25 }}
       >
        <motion.div 
       variants={{
        open: {
          x: 0,
          transition: {
            when: "beforeChildren",
          }
        },
        closed: {
          x: "100%",
        },
       }}
       initial="closed"
       animate="open"
       exit="closed"
       className="z-30 fixed inset-0 bg-[#0D0E0C]">
       <motion.nav
       variants={{
        open: {
          y: "0%",
          opacity: 1,
        },
        closed: {
          y: "25%",
          opacity: 0,
        },
      }}
       className="flex flex-col items-start pl-8 justify-center gap-4 h-full">
       <a href='#' className='text-4xl font-bold font-dm text-neutral-400 hover:text-neutral-200 transition ease-in-out'>
           Features
         </a>
         <a href='#' className='text-4xl font-bold font-dm text-neutral-400 hover:text-neutral-200 transition ease-in-out'>
           Case Studies
         </a>
       <a href='#' className='text-4xl font-bold font-dm text-neutral-400 hover:text-neutral-200 transition ease-in-out'>
           English
         </a>
         <a href='#' className='text-4xl font-bold font-dm text-neutral-400 hover:text-neutral-200 transition ease-in-out'>
           Support
         </a>
       </motion.nav>
     </motion.div>
       </MotionConfig>
     )} 
        </AnimatePresence>
     
    </div>
  )
}