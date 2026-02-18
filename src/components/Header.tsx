import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#why-us',   label: t('nav.whyUs') },
    { href: '#about',    label: t('nav.about') },
    { href: '#contact',  label: t('nav.contact') },
  ];

  return (
    <header className="
      fixed top-0 left-0 right-0 z-50
      bg-white/80 dark:bg-gray-950/80
      backdrop-blur-sm shadow-sm
      border-b border-transparent dark:border-gray-800
      transition-colors duration-300
    ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-blue-800 dark:text-blue-400">
          <Sparkles className="h-6 w-6" />
          <span>LimpaPro</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-blue-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button asChild className="ml-2 bg-blue-800 hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-500 text-white">
            <a href="#contact">{t('nav.cta')}</a>
          </Button>
        </div>

        {/* Mobile: toggle + lang + menu */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="dark:bg-gray-950 dark:border-gray-800">
              <div className="flex flex-col gap-6 p-6">
                <a
                  href="#"
                  className="flex items-center gap-2 font-bold text-lg text-blue-800 dark:text-blue-400 mb-2"
                  onClick={() => setSheetOpen(false)}
                >
                  <Sparkles className="h-6 w-6" />
                  <span>LimpaPro</span>
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setSheetOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-blue-800 hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-500 text-white mt-2"
                >
                  <a href="#contact" onClick={() => setSheetOpen(false)}>
                    {t('nav.cta')}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Header;
