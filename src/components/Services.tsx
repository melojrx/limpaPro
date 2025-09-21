import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Check, Home, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-8 w-8 text-blue-800" />,
    title: 'Limpeza Residencial',
    description: 'Deixe sua casa brilhando com nossos serviços completos e detalhados.',
    items: ['Limpeza de pisos e aspiração', 'Higienização de banheiros', 'Limpeza de cozinha e áreas comuns', 'Remoção de pó e teias de aranha'],
  },
  {
    icon: <Building className="h-8 w-8 text-blue-800" />,
    title: 'Limpeza Comercial',
    description: 'Um ambiente de trabalho limpo e organizado para sua equipe e clientes.',
    items: ['Limpeza de escritórios e salas', 'Manutenção de áreas comuns', 'Limpeza de vidros e fachadas', 'Gestão de resíduos'],
  },
  {
    icon: <Sparkles className="h-8 w-8 text-blue-800" />,
    title: 'Faxina Completa',
    description: 'Uma limpeza profunda para renovar completamente seu espaço.',
    items: ['Limpeza de armários e interiores', 'Higienização de estofados e tapetes', 'Limpeza pós-obra', 'Tratamento de pisos'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-500">
            Oferecemos soluções completas e personalizadas para atender às suas necessidades de limpeza.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="mt-4 text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-500 mb-6">{service.description}</p>
                <ul className="text-left space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;