import Footer from "@/components/Footer";
import Guidecard from "@/components/Guidecard";
import HeroCard from "@/components/HeroCard";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { developers } from "@/constants";
export default function Home() {
  
  return (
   <section className="flex flex-col">
    <div className="flex flex-col">
      <Navbar/>
       <div className="line" />
      <div className="flex items-center text-center">
      
        <HeroCard/>
      </div>
     <div className="line" />
     <div className="items-center text-center ">
      <h1 className="guide-title">How to use ShearTime?</h1>
      </div>
      <div className="grid grid-rows-1">
        <Guidecard imageUrl="/icons/1.svg" title="Create your Account" des="Create your new account in ShearTime" className="text-green-1 ml-[300px] mt-20 "/>
        <Guidecard imageUrl="/icons/2.svg" title="Book Your Slot" des="Book your first slot now ShearTime" className="ml-[800px] mt-5 text-red-400 "/>
        <Guidecard imageUrl="/icons/3.svg" title="Get your Hair Cut" des="Go to shop at time and get hair cut" className="text-secondry-1 ml-[300px] mt-5"/>
      </div>
      <div className="line" />
      <div>
        <div className="items-center text-center">
        <h1 className={cn("guide-title max-lg:hidden")}>Development Team and Contact</h1>
        </div>
        <div className=" grid grid-cols-4 gap-4 items-center ml-20 mt-20 mb-10">
          {developers.map((dev)=>( <Testimonial name={dev.name} image={dev.image} role={dev.role}/>))}
       </div>
      </div>
          </div>
          <Footer/>
   </section>
  );
}
