import { useRef } from 'react';
import { motion } from 'motion/react';
import heroImage from 'figma:asset/2d8dd3df60b0b39738ade685d1259010bbd0bcde.png';
import { useAdaptiveTextColor } from './useAdaptiveTextColor';
import { PrimaryButton } from './PrimaryButton';
import { useLanguage } from '../utils/translations';

export function Hero() {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const titleColor = useAdaptiveTextColor({ imageRef, textRef: titleRef });
  const subtitleColor = useAdaptiveTextColor({ imageRef, textRef: subtitleRef });
  const scrollColor = useAdaptiveTextColor({ imageRef, textRef: scrollIndicatorRef });

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Tropical beach with white sand and turquoise water"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center lg:mt-[-10%] mt-[-20%]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 lg:mb-6 tracking-tight transition-colors duration-500 uppercase"
              style={{ color: titleColor }}
            >
              {t('hero.title')}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p 
              ref={subtitleRef}
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 mx-auto transition-colors duration-500 text-white px-4"
            >
              {t('hero.subtitle1')}
            </p>
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 mx-auto transition-colors duration-500 text-white px-4"
            >
              {t('hero.subtitle2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <PrimaryButton
              onClick={() => {
                const section = document.getElementById('paquetes');
                if (section) {
                  const offset = 100;
                  const elementPosition = section.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              {t('hero.cta')}
            </PrimaryButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        ref={scrollIndicatorRef}
        onClick={() => {
          const trustSection = document.querySelector('section:nth-of-type(2)');
          if (trustSection) {
            const offset = 100; // Offset to account for fixed header
            const elementPosition = trustSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full flex items-start justify-center p-2 transition-colors duration-500"
          style={{ 
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: scrollColor
          }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: scrollColor }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
