import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

const aboutItemKeys = ['experience', 'clients', 'team', 'products'] as const;

const SectionBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium mb-3">
    {label}
  </span>
);

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Imagem com badge flutuante */}
          <AnimatedWrapper direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt={t('about.imgAlt')}
                className="rounded-xl shadow-xl w-full dark:brightness-90"
              />
              {/* Badge flutuante */}
              <div className="absolute -bottom-4 -right-4 bg-blue-800 dark:bg-blue-600 text-white px-4 py-3 rounded-xl shadow-lg">
                <p className="text-2xl font-heading font-extrabold leading-none">10+</p>
                <p className="text-xs font-medium text-blue-200 mt-0.5">{t('about.imgBadge')}</p>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Conteúdo */}
          <AnimatedWrapper direction="right" delay={100}>
            <SectionBadge label={t('about.badge')} />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50">
              {t('about.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed">
              {t('about.p2')}
            </p>

            {/* Lista de diferenciais */}
            <ul className="mt-6 space-y-3">
              {aboutItemKeys.map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-900">
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {t(`about.items.${key}`)}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-lg bg-blue-800 hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-200"
            >
              {t('about.cta')} →
            </a>
          </AnimatedWrapper>

        </div>
      </div>
    </section>
  );
};

export default About;
