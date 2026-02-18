import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? t('theme.toLight') : t('theme.toDark')}
      className="
        flex items-center justify-center w-9 h-9 rounded-md
        text-gray-500 hover:text-blue-800 hover:bg-gray-100
        dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800
        transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800
      "
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
};

export default ThemeToggle;
