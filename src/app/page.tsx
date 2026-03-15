import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";

import Stats from "@/components/Stats";

// Lazy Loaded Sections
const About = dynamic(() => import('@/components/About'));
const Services = dynamic(() => import('@/components/Services'));
const TrustBarWithNames = dynamic(() => import('@/components/TrustBarWithNames'));
const Differentials = dynamic(() => import('@/components/Differentials'));
const BugattiShowcase = dynamic(() => import('@/components/BugattiShowcase'));
const TestimonialsGrid = dynamic(() => import('@/components/TestimonialsGrid'));
const TestimonialsEmbla = dynamic(() => import('@/components/TestimonialsEmbla'));
const Faq = dynamic(() => import('@/components/Faq'));
const ScrollRevealStatement = dynamic(() => import('@/components/ScrollRevealStatement'));
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <TrustBar />
      <Stats />
      <BugattiShowcase />
      <About />
      <Services />
      <Differentials />
      <TestimonialsGrid />
      <TestimonialsEmbla />
      <Faq />
      <ScrollRevealStatement primaryText="EXPERIÊNCIA PREMIUM" hoverText="FALE COM UM CONSULTOR" href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20gr%C3%A1tis%20na%20LiderCar!" />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
