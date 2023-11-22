import Image from 'next/image';
import { Inter } from 'next/font/google';
import NewNavBarComp from '@/components/NewNavBarComp';
import HeroSection from '@/modules/HomePageModule/HeroSection';
import WhySD from '@/modules/HomePageModule/WhySD';
import Importance from '@/modules/HomePageModule/Importance';
import About from '@/modules/HomePageModule/About';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="customcontainer">
        <NewNavBarComp />
        <HeroSection />
        <WhySD />
        <Importance />
        <About />
      </div>
    </>
  );
}
