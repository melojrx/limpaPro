import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#why-us',   label: t('nav.whyUs') },
    { href: '#about',    label: t('nav.about') },
    { href: '#contact',  label: t('nav.contact') },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      {/* Gradiente divisor */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Coluna 1 — Marca */}
          <div>
            <div className="flex items-center gap-2 font-heading font-bold text-xl">
              <Sparkles className="h-6 w-6 text-blue-400" />
              <span>LimpaPro</span>
            </div>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Links Rápidos */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-gray-300 uppercase tracking-widest mb-4">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-gray-300 uppercase tracking-widest mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Rua São Joaquim, 240 - Santana, Piracicaba - SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+551935420266" className="hover:text-white transition-colors">
                  (19) 3542-0266
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>contato@limpapro.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          {t('footer.rights', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
