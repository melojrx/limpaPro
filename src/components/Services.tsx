import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building, Check, Home, Sparkles } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

type ServiceKey = 'residential' | 'commercial' | 'deep';

const serviceIcons: Record<ServiceKey, React.ReactNode> = {
  residential: <Home className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
  commercial:  <Building className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
  deep:        <Sparkles className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
};

const serviceKeys: ServiceKey[] = ['residential', 'commercial', 'deep'];

const SectionBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium mb-3">
    {label}
  </span>
);

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionBadge label={t('services.badge')} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, index) => {
            const items = t(`services.${key}.items`, { returnObjects: true }) as string[];
            const orderNum = String(index + 1).padStart(2, '0');
            return (
              <AnimatedWrapper key={key} delay={index * 120} direction="up">
                <Card className="
                  group h-full relative
                  border border-gray-200 dark:border-gray-700
                  shadow-md hover:shadow-xl
                  hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-800
                  transition-all duration-300
                ">
                  {/* Número de ordem */}
                  <span className="absolute top-4 right-4 text-4xl font-heading font-extrabold text-gray-100 dark:text-gray-800 select-none leading-none">
                    {orderNum}
                  </span>

                  <CardHeader className="items-center text-center">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300">
                      {serviceIcons[key]}
                    </div>
                    <CardTitle className="mt-4 text-xl font-heading font-semibold dark:text-gray-50">
                      {t(`services.${key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      {t(`services.${key}.description`)}
                    </p>
                    <ul className="text-left space-y-2 mb-6">
                      {items.map((item) => (
                        <li key={item} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-800 dark:text-blue-400 hover:gap-2.5 transition-all duration-200"
                    >
                      {t('common.learnMore')}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
