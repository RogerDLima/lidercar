import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
const TrustBarWithNames = dynamic(() => import('@/components/TrustBarWithNames'));
import Stats from "@/components/Stats";

// Lazy Loaded Sections
const About = dynamic(() => import('@/components/About'));
const Services = dynamic(() => import('@/components/Services'));
const Differentials = dynamic(() => import('@/components/Differentials'));
const BugattiShowcase = dynamic(() => import('@/components/BugattiShowcase'));
const TestimonialsGrid = dynamic(() => import('@/components/TestimonialsGrid'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
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
      <div style={{ padding: '2rem 0', textAlign: 'center', background: '#111' }}><span style={{ color: '#fff', fontSize: '0.8rem', background: '#333', padding: '0.2rem 1rem', borderRadius: '1rem' }}>Opção 2 de Marcas (Com textos)</span></div>
      <TrustBarWithNames />
      <Stats />
      <BugattiShowcase />
      <About />
      <Services />
      <Differentials />
      <TestimonialsGrid />
      <div style={{ padding: '2rem 0', textAlign: 'center', background: '#111' }}><span style={{ color: '#fff', fontSize: '0.8rem', background: '#333', padding: '0.2rem 1rem', borderRadius: '1rem' }}>Opção 2 de Depoimentos (Carrossel)</span></div>
      <Testimonials />
      <Faq />
      <ScrollRevealStatement primaryText="EXPERIÊNCIA PREMIUM" hoverText="FALE COM UM CONSULTOR" href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20gr%C3%A1tis%20na%20LiderCar!" />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
