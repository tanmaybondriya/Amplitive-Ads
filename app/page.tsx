import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import ModuleSection from "@/components/ModuleSection";
import StudioSection from "@/components/StudioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Features/>
      <ModuleSection/>
      <StudioSection/>
      <Footer/>
    </div>
  );
} 
