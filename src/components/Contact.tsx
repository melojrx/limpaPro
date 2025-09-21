"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import Map from './Map';

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().min(14, { message: 'Por favor, insira um telefone válido.' }),
  serviceType: z.string({ required_error: 'Por favor, selecione um tipo de serviço.' }),
  message: z.string().optional(),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    let formattedPhone = '';
    if (input.length > 0) {
      formattedPhone = `(${input.substring(0, 2)}`;
    }
    if (input.length > 2) {
      formattedPhone += `) ${input.substring(2, 7)}`;
    }
    if (input.length > 7) {
      formattedPhone += `-${input.substring(7, 11)}`;
    }
    form.setValue('phone', formattedPhone);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Dados do formulário:', values);
      showSuccess('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    } catch (error) {
      showError('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(XX) XXXXX-XXXX" {...field} onChange={handlePhoneChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Serviço</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o serviço" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residencial">Limpeza Residencial</SelectItem>
                          <SelectItem value="comercial">Limpeza Comercial</SelectItem>
                          <SelectItem value="completa">Faxina Completa</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Descreva o que você precisa..." rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nossas Informações</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-800 flex-shrink-0 mt-1" />
                  <span>Rua São Joaquim, 240 - Santana, Piracicaba - SP, CEP 13411-515</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                  <a href="tel:+551935420266" className="hover:text-blue-800">(19) 3542-0266</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-800" />
                  <span>contato@limpapro.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nossa Localização</h3>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;