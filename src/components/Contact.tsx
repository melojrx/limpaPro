"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import Map from './Map';

const SectionBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium mb-3">
    {label}
  </span>
);

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().min(14, { message: 'Por favor, insira um telefone válido.' }),
  serviceType: z.string({ required_error: 'Por favor, selecione um tipo de serviço.' }),
  message: z.string().optional(),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    let formattedPhone = '';
    if (input.length > 0) formattedPhone = `(${input.substring(0, 2)}`;
    if (input.length > 2) formattedPhone += `) ${input.substring(2, 7)}`;
    if (input.length > 7) formattedPhone += `-${input.substring(7, 11)}`;
    form.setValue('phone', formattedPhone);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Dados do formulário:', values);
      showSuccess(t('contact.toast.success'));
      form.reset();
    } catch {
      showError(t('contact.toast.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionBadge label={t('contact.badge')} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12">

          {/* Formulário */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-transparent dark:border-gray-700 transition-colors duration-300">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-gray-300">{t('contact.form.name')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.form.namePlaceholder')}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder:text-gray-500"
                          {...field}
                        />
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
                      <FormLabel className="dark:text-gray-300">{t('contact.form.email')}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('contact.form.emailPlaceholder')}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder:text-gray-500"
                          {...field}
                        />
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
                      <FormLabel className="dark:text-gray-300">{t('contact.form.phone')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.form.phonePlaceholder')}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder:text-gray-500"
                          {...field}
                          onChange={handlePhoneChange}
                        />
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
                      <FormLabel className="dark:text-gray-300">{t('contact.form.service')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                            <SelectValue placeholder={t('contact.form.servicePlaceholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                          <SelectItem value="residencial" className="dark:text-gray-100 dark:focus:bg-gray-700">
                            {t('contact.form.services.residential')}
                          </SelectItem>
                          <SelectItem value="comercial" className="dark:text-gray-100 dark:focus:bg-gray-700">
                            {t('contact.form.services.commercial')}
                          </SelectItem>
                          <SelectItem value="completa" className="dark:text-gray-100 dark:focus:bg-gray-700">
                            {t('contact.form.services.deep')}
                          </SelectItem>
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
                      <FormLabel className="dark:text-gray-300">{t('contact.form.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('contact.form.messagePlaceholder')}
                          rows={4}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder:text-gray-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    t('contact.form.submit')
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Informações */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-800 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Rua São Joaquim, 240 - Santana, Piracicaba - SP, CEP 13411-515</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-800 dark:text-blue-400" />
                  <a href="tel:+551935420266" className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors">
                    (19) 3542-0266
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-800 dark:text-blue-400" />
                  <span>contato@limpapro.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
                {t('contact.info.location')}
              </h3>
              <Map />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
