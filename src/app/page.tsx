import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/ui/Projects";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
        <Testimonials />
        <Experience />
      </div>
    </main>
  );
}
