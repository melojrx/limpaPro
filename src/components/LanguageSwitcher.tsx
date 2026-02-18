import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'pt-BR', label: 'PT', flag: '🇧🇷' },
  { code: 'en',    label: 'EN', flag: '🇬🇧' },
  { code: 'fr',    label: 'FR', flag: '🇫🇷' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Selecionar idioma"
        aria-expanded={open}
        className="
          flex items-center gap-1.5 px-2.5 h-9 rounded-md text-sm font-medium
          text-gray-500 hover:text-blue-800 hover:bg-gray-100
          dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800
          transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800
        "
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="
          absolute right-0 top-full mt-1.5 w-36 rounded-md border shadow-lg py-1 z-50
          bg-white border-gray-200
          dark:bg-gray-900 dark:border-gray-700
        ">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`
                w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left
                transition-colors duration-150
                ${lang.code === i18n.language
                  ? 'text-blue-800 bg-blue-50 font-medium dark:text-blue-400 dark:bg-blue-950'
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                }
              `}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
              {lang.code === i18n.language && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-800 dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
