import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
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
      <About />
      <Services />
      <Differentials />
      <Testimonials />
      <Faq />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
