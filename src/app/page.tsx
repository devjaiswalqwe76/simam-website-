import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import AboutLead from "../components/home/AboutLead";
import Trust from "../components/home/Trust";
import Portfolio from "../components/home/Portfolio";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      
      {/* 1. Hero Section & Consultation Form */}
      {/*  */}
      <section id="hero">
        <Hero />
      </section>

      {/* 2. Red Statistics Bar & Services Cards */}
      {/* */}
      <section id="services">
        <Services />
      </section>

      {/* 3. About Section & Lead Generation (Horizontal Layout) */}
      {/* */}
      <section id="about">
        <AboutLead />
      </section>

      {/* 4. Value Proposition & Video Testimonials (Dark Theme) */}
      {/*  */}
      <section id="trust">
        <Trust />
      </section>

      {/* 5. Client Portfolio Grid */}
      {/*  */}
      <section id="portfolio" className="pb-40"> 
        {/* */}
        <Portfolio />
      </section>

    </div>
  );
}