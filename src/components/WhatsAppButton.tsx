import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const WHATSAPP_NUMBER = '5519987654321';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="28"
    height="28"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4.868 43.303l2.694-9.835a18.981 18.981 0 0 1-2.542-9.52C5.026 13.08 13.098 5 23.027 5c4.814.002 9.34 1.881 12.744 5.292a17.97 17.97 0 0 1 5.279 12.764c-.005 9.938-8.077 18.018-18.006 18.018h-.008a17.966 17.966 0 0 1-8.603-2.196L4.868 43.303zm10.733-6.188l.547.326a14.927 14.927 0 0 0 7.615 2.092h.006c8.232 0 14.931-6.703 14.934-14.943a14.956 14.956 0 0 0-4.394-10.624 14.929 14.929 0 0 0-10.613-4.398c-8.241 0-14.94 6.703-14.943 14.942a14.93 14.93 0 0 0 2.289 7.966l.356.567-1.513 5.523 5.716-1.451zm16.99-8.358c-.118-.196-.43-.314-.899-.55-.47-.235-2.775-1.37-3.206-1.527-.432-.157-.746-.235-1.06.236-.314.47-1.215 1.527-1.49 1.84-.274.314-.549.353-1.018.118-.47-.235-1.982-.73-3.775-2.33-1.395-1.245-2.337-2.781-2.611-3.251-.275-.47-.03-.724.206-.958.211-.21.47-.549.705-.823.236-.275.314-.47.471-.784.157-.314.079-.588-.039-.823-.118-.236-1.06-2.548-1.451-3.489-.382-.916-.77-.792-1.06-.807l-.903-.015c-.314 0-.823.118-1.254.588-.43.47-1.645 1.606-1.645 3.919 0 2.313 1.684 4.548 1.919 4.862.236.314 3.312 5.06 8.023 7.098 1.121.483 1.996.772 2.677.988.948.3 1.812.258 2.494.156.76-.113 2.345-.958 2.677-1.884.33-.927.33-1.72.21-1.884z" />
  </svg>
);

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const { t } = useTranslation();

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('whatsapp.message'))}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <span
        className={`
          bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900
          text-sm font-medium px-3 py-1.5 rounded-lg shadow-md
          whitespace-nowrap transition-all duration-300
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}
        `}
        aria-hidden={!hovered}
      >
        {t('whatsapp.label')}
      </span>

      {/* Botão */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsapp.ariaLabel')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg
          hover:bg-[#20b858] hover:scale-110 active:scale-95
          transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default WhatsAppButton;
