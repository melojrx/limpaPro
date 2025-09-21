import { Award, Leaf, ShieldCheck, Users } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-10 w-10 text-blue-800" />,
    title: 'Equipe Treinada',
    description: 'Profissionais qualificados e de confiança para garantir o melhor serviço.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-green-600" />,
    title: 'Produtos Ecológicos',
    description: 'Utilizamos produtos sustentáveis que são seguros para sua família e o planeta.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-800" />,
    title: 'Seguro Total',
    description: 'Nossos serviços são totalmente segurados para sua tranquilidade e segurança.',
  },
  {
    icon: <Award className="h-10 w-10 text-green-600" />,
    title: 'Qualidade Garantida',
    description: 'Compromisso com a excelência e a sua satisfação em cada limpeza realizada.',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Por que nos escolher?</h2>
          <p className="mt-4 text-lg text-gray-500">
            Nossos diferenciais garantem um serviço de limpeza superior e a sua total satisfação.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;