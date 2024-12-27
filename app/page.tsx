import { About } from "./sections/About";
import { Blogs } from "./sections/Blogs";
import { Faqs } from "./sections/Faqs";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import { Solutions } from "./sections/Solutions";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <About />
      <Solutions />
      <Blogs />
      <Faqs />
      <Footer />
    </>
  );
}
