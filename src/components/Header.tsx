import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Serviços' },
  { href: '#why-us', label: 'Diferenciais' },
  { href: '#about', label: 'Sobre Nós' },
  { href: '#contact', label: 'Contato' },
];

const Header = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-blue-800">
          <Sparkles className="h-6 w-6" />
          <span>LimpaPro</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-500 hover:text-blue-800 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-blue-800 hover:bg-blue-900">
            <a href="#contact">Solicitar Orçamento</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <a href="#" className="flex items-center gap-2 font-bold text-lg text-blue-800 mb-4" onClick={() => setSheetOpen(false)}>
                  <Sparkles className="h-6 w-6" />
                  <span>LimpaPro</span>
                </a>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-lg font-medium text-gray-600 hover:text-blue-800" onClick={() => setSheetOpen(false)}>
                    {link.label}
                  </a>
                ))}
                <Button asChild className="bg-blue-800 hover:bg-blue-900 mt-4">
                  <a href="#contact" onClick={() => setSheetOpen(false)}>Solicitar Orçamento</a>
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