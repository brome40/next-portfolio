import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
        {/* <Testimonials/> */}
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
