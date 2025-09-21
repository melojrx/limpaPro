import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedWrapper from '@/components/AnimatedWrapper';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Services />
        <WhyUs />
        <AnimatedWrapper>
          <About />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <Contact />
        </AnimatedWrapper>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;