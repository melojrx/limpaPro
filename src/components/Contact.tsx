import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de envio do formulário será adicionada aqui
    alert('Formulário enviado! (simulação)');
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Entre em Contato</h2>
          <p className="mt-4 text-lg text-gray-500">
            Pronto para ter um ambiente impecável? Fale conosco e solicite seu orçamento sem compromisso.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" type="text" placeholder="Seu nome completo" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" placeholder="(XX) XXXXX-XXXX" required />
              </div>
              <div>
                <Label htmlFor="service-type">Tipo de Serviço</Label>
                <Select required>
                  <SelectTrigger id="service-type">
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residencial">Limpeza Residencial</SelectItem>
                    <SelectItem value="comercial">Limpeza Comercial</SelectItem>
                    <SelectItem value="completa">Faxina Completa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Descreva o que você precisa..." rows={4} />
              </div>
              <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nossas Informações</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                  <span>(11) 98765-4321</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-800" />
                  <span>contato@limpapro.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-blue-800" />
                  <span>Av. Principal, 123 - São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                {/* Placeholder para o mapa */}
                <div className="bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Mapa de Localização</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;