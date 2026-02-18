import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollUp}
      aria-label={t('scrollToTop')}
      className={`
        fixed bottom-24 right-6 z-50
        flex items-center justify-center w-10 h-10 rounded-full
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        text-gray-600 dark:text-gray-300
        shadow-md hover:shadow-lg
        hover:bg-gray-50 dark:hover:bg-gray-700
        hover:-translate-y-1 active:translate-y-0
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
