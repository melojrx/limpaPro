import { Facebook, Instagram, Linkedin, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Sparkles className="h-6 w-6" />
            <span>LimpaPro</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
          </div>
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} LimpaPro. Todos os direitos reservados.</p>
            <p>contato@limpapro.com | (11) 98765-4321</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;