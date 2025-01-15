import Footer from "@/components/Footer";
import Guidecard from "@/components/Guidecard";
import HeroCard from "@/components/HeroCard";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
   <section className="flex flex-col">
    <div className="flex flex-col">
      <Navbar/>
      <div className="flex items-center">
        
        <HeroCard/>
      </div>
    
      <h1 className="guide-title">How to use ShearTime?</h1>
      <div className="grid grid-rows-1">
        <Guidecard imageUrl="/icons/1.svg" title="Create your Account" des="Create your new account in ShearTime" className="text-green-1 ml-[300px] mt-20"/>
        <Guidecard imageUrl="/icons/2.svg" title="Book Your Slot" des="Book your first slot now ShearTime" className="ml-[800px] mt-5 text-red-400 "/>
        <Guidecard imageUrl="/icons/3.svg" title="Get your Hair Cut" des="Go to shop at time and get hair cut" className="text-secondry-1 ml-[300px] mt-5"/>
      </div>
      <div>
        <h1 className={cn("guide-title" , 'text-green-4')}>Development Team and Contact</h1>
        <Testimonial/>
      </div>
          </div>
          <Footer/>
   </section>
  );
}
