import Header from "@/components/Header";
import ScrollRevealStatement from "@/components/ScrollRevealStatement";
import BugattiShowcase from "@/components/BugattiShowcase";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import TestimonialsEmbla from "@/components/TestimonialsEmbla";
import Faq from "@/components/Faq";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Stats />
      <BugattiShowcase />
      <About />
      <Services />
      <Differentials />
      {/* <Testimonials /> */}
      <TestimonialsGrid />
      <TestimonialsEmbla />
      <Faq />
      <ScrollRevealStatement primaryText="EXPERIÊNCIA PREMIUM" hoverText="FALE COM UM CONSULTOR" href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20gr%C3%A1tis%20na%20LiderCar!" />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
