import About from "@/components/About";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Hero />
      <Steps />
      <About />
      <Testimonial />
      <Brands />
      <Work />
      <Stats />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
