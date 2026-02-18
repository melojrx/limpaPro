import { useTranslation } from 'react-i18next';
import { Award, Leaf, ShieldCheck, Users } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

type FeatureKey = 'trained' | 'products' | 'safety' | 'quality';

const featureIcons: Record<FeatureKey, React.ReactNode> = {
  trained:  <Users className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
  products: <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />,
  safety:   <ShieldCheck className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
  quality:  <Award className="h-8 w-8 text-green-600 dark:text-green-400" />,
};

const featureKeys: FeatureKey[] = ['trained', 'products', 'safety', 'quality'];

const SectionBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium mb-3">
    {label}
  </span>
);

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="py-16 md:py-24 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionBadge label={t('whyUs.badge')} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50">
            {t('whyUs.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {t('whyUs.subtitle')}
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((key, index) => (
            <AnimatedWrapper key={key} delay={index * 100} direction="up">
              <div className="text-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300">
                {/* Número */}
                <p className="text-xs font-heading font-bold text-blue-400 dark:text-blue-600 tracking-widest uppercase mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                {/* Círculo do ícone */}
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 dark:bg-blue-950 mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  {featureIcons[key]}
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-800 dark:text-gray-50">
                  {t(`whyUs.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t(`whyUs.${key}.description`)}
                </p>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
