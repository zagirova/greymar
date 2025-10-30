import { MessageCircle } from 'lucide-react';
import ctaBackground from 'figma:asset/f8d5a0b39629d9f69bbd14f5d577c6754eaca131.png';
import { useLanguage } from '../utils/translations';

export function FinalCTA() {
  const { t, language } = useLanguage();
  const whatsappNumber = '+18098778636'; // Sin espacios ni guiones para el link
  const defaultMessage = language === 'es' 
    ? 'Hola! Me gustaría obtener más información sobre los paquetes de viaje de GreyMar.'
    : 'Hello! I would like to get more information about GreyMar travel packages.';
  const whatsappMessage = encodeURIComponent(defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-16 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ctaBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E88E5]/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-center lg:justify-end">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Title */}
            <h2 className="text-white mb-4 lg:mb-6">
              {t('cta.title')}
            </h2>

            {/* Description */}
            <p className="text-white/90 text-base lg:text-xl mb-8 lg:mb-10">
              {t('cta.subtitle')}
            </p>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-4 lg:py-5 bg-white text-[#1E88E5] rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-xs lg:text-sm opacity-75 mb-0.5">{t('cta.button')}</div>
                <div className="font-semibold text-sm lg:text-base">+1 (809) 877-8636</div>
              </div>
            </a>

            {/* Sub-text */}
            <p className="text-white/70 text-xs lg:text-sm mt-6 lg:mt-8">
              {language === 'es' ? 'Respuesta inmediata • Asesoría personalizada • Sin compromiso' : 'Immediate response • Personalized advice • No commitment'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
