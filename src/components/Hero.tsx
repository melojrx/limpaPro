import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Imagem com Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')" }}
        />
      </div>

      {/* Gradiente multi-camada */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-black/60 to-black/50 dark:from-blue-950/90 dark:via-black/75 dark:to-black/65" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
          <Sparkles className="h-3.5 w-3.5 text-green-400" />
          {t('hero.badge')}
        </span>

        {/* Título */}
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl">
          {t('hero.title')}
        </h1>

        {/* Subtítulo */}
        <p className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 dark:text-gray-300 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Button
            size="lg"
            asChild
            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold shadow-lg shadow-green-900/40 hover:shadow-green-900/60 transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href="#contact">{t('hero.cta')}</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-6 md:gap-16">
          {(['clients', 'years', 'satisfaction'] as const).map((key) => (
            <div key={key} className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-extrabold text-white">
                {t(`hero.stats.${key}`)}
              </p>
              <p className="mt-1 text-sm text-gray-300 font-medium tracking-wide uppercase">
                {t(`hero.stats.${key}Label`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label={t('hero.scrollDown')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
};

export default Hero;
