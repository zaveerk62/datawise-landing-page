import Image from "next/image";
import DatawiseLogo from '@/public/assets/DataWise-logo.svg';

export const Footer = () => {
  return <footer className="py-24 lg:py-28 lg:pb-10">
    <div className="container">
      <div className="border-t border-b border-neutral-500/30 py-10 pb-14">
        <div className="lg:flex lg:justify-between lg:items-start">
        <Image src={DatawiseLogo} alt="DataWise Logo" className="w-auto lg:mt-8" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mt-10 font-dm">
          <nav>
            <h4 className="text-neutral-300 font-medium text-lg">About</h4>
            <div className="flex flex-col gap-4 text-neutral-500 mt-4">
              <a href="#">Company Overview</a>
              <a href="#">Careers</a>
              <a href="#">Press & Media</a>
              <a href="#">Testimonials</a>
            </div>
          </nav>
          <nav>
            <h4 className="text-neutral-300 font-medium text-lg">Resources</h4>
            <div className="flex flex-col gap-4 text-neutral-500 mt-4">
              <a href="#">Blog</a>
              <a href="#">Help Center</a>
              <a href="#">Webinars & Events</a>
              <a href="#">Case Studies</a>
            </div>
          </nav>
          <nav className="hidden md:block">
            <h4 className="text-neutral-300 font-medium text-lg">Support & Contact</h4>
            <div className="flex flex-col gap-4 text-neutral-500 mt-4">
              <a href="#">Contact Us</a>
              <a href="#">Technical Support</a>
              <a href="#">Feedback</a>
              <a href="#">Community Forum</a>
            </div>
          </nav>
        </div>
        </div>
      </div>
      <div className="flex md:justify-between items-center flex-1 font-dm mt-6">
        <p className="w-20 md:w-auto text-neutral-500">© 2023 NIMBUS. All rights reserved.</p>
        <div className="ml-4 flex text-xs md:text-base gap-4 whitespace-nowrap text-neutral-400">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Security</a>
        </div>
      </div>
    </div>
  </footer>;
};
