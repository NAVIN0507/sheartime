"use client"
import Footer from "@/components/Footer";

import HeroCard from "@/components/HeroCard";
import Testimonial from "@/components/Testimonial";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

import Image from "next/image";
import { FloatingNavDemo } from "@/components/FloatingNavbar";
import { developers } from "@/constants";
import Typewriter from "@/components/fancy/typewriter";
import { WobbleCard } from "../components/ui/wobble-card";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export default function Home() {
  
  return (
    <main className="max-w-7xl mx-auto w-full">
       
   <section className="flex flex-col">
    <div className="flex flex-col">
      
      <FloatingNavDemo/>
     
      <div className="flex items-center text-center">
      
        <HeroCard/>
      </div>

     <section id="guide">
     <div className="items-center text-center mt-[100px]">
      <Typewriter
      text={[ 
        "How to use ShearTime?",
        "How to use ShearTime?",
        "How to use ShearTime?",
        "How to use ShearTime?",
      ]}
      speed={70}
          className="guide-title"
          waitTime={10000}
          deleteSpeed={40}
          cursorChar={""}
      />
    
      </div>
      <div>

      </div>
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-green-1 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-red-500">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-1">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
<WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-red-500 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
      
      </section>
  
    
      <div>
        <section id="contact">
        <div className="items-center text-center mt-10">
        <Typewriter
      text={[
        "Development Team and Contact",
        "Development Team and Contact",
        "Development Team and Contact",
        "Development Team and Contact",
      ]}
      speed={70}
          className="guide-title"
          waitTime={10000}
          deleteSpeed={40}
          cursorChar={""}
      />
        </div>
        <div className=" grid grid-cols-4 gap-4 items-center ml-20 mt-20 mb-10">
          {developers.map((dev)=>( <Testimonial name={dev.name} image={dev.image} role={dev.role} key={dev.name}/>))}
       </div>
       </section>
      </div>
          </div>
          <Footer/>
   </section>
   
   </main>
  );
}
