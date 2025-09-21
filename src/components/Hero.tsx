import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Limpeza Profissional que Transforma seu Ambiente
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Confiança, qualidade e cuidado em cada detalhe. Deixe a limpeza conosco e aproveite seu tempo.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white font-bold">
            <a href="#contact">Solicitar Orçamento Grátis</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;