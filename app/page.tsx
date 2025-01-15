import HeroCard from "@/components/HeroCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <section className="flex flex-col">
    <div className="flex flex-col">
      <Navbar/>
      <div className="flex items-center">
        <HeroCard/>
      </div>
    </div>
   </section>
  );
}
