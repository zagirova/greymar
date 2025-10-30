import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import puntaCanaImage from 'figma:asset/ba9a79efec8247316d9229bb8a5b48f014ef2cc6.png';
import samanaImage from 'figma:asset/3e70015ea453007466b2f43d6dc00fcde2844db1.png';
import colombiaImage from 'figma:asset/3ce5d8b77afb1ed04aa619d7fd11ba3257ea4cfa.png';
import peruImage from 'figma:asset/461aa85142dab2951d6cfb8ceeaf9daa99c6e46f.png';
import miamiImage from 'figma:asset/88b010e66c8bbe78d5f6d95959ff60f59e2ff456.png';
import { useLanguage } from '../utils/translations';

export function TopDestinations() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleDestinationClick = () => {
    const packagesSection = document.getElementById('paquetes-section');
    if (packagesSection) {
      const headerHeight = 80; // Height of fixed header
      const offsetPosition = packagesSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const destinations = [
    {
      name: t('destinations.puntacana'),
      packages: 12,
      description: t('destinations.puntacana.description'),
      image: puntaCanaImage,
    },
    {
      name: t('destinations.samana'),
      packages: 8,
      description: t('destinations.samana.description'),
      image: samanaImage,
    },
    {
      name: t('destinations.colombia'),
      packages: 15,
      description: t('destinations.colombia.description'),
      image: colombiaImage,
    },
    {
      name: t('destinations.peru'),
      packages: 6,
      description: t('destinations.peru.description'),
      image: peruImage,
    },
    {
      name: t('destinations.miami'),
      packages: 4,
      description: t('destinations.miami.description'),
      image: miamiImage,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="mb-4">
              {t('destinations.title')}
            </h2>
            <p className="text-gray-600">
              {t('destinations.subtitle')}
            </p>
          </div>
          <button className="text-[#1E88E5] hover:underline hidden lg:block">
            {t('destinations.viewall')}
          </button>
        </div>

        {/* Image Accordion - Desktop */}
        <div className="hidden lg:flex gap-2 h-[600px] mb-8">
          {destinations.map((destination, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            
            return (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden flex-shrink-0"
                style={{
                  flexBasis: isHovered 
                    ? '40%' 
                    : isAnyHovered 
                      ? '15%' 
                      : '20%'
                }}
                animate={{
                  flexBasis: isHovered 
                    ? '40%' 
                    : isAnyHovered 
                      ? '15%' 
                      : '20%'
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={handleDestinationClick}
              >
                {/* Image */}
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl mb-2">
                    <strong>{destination.name}</strong>
                  </h3>
                  
                  {/* Description - Only visible on hover */}
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isHovered ? '100px' : '0',
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    <p className="text-sm text-white/90 mb-2">
                      {destination.description}
                    </p>
                    <p className="text-sm text-white/80">
                      {destination.packages} {t('destinations.packages')}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative h-[400px] overflow-hidden cursor-pointer group"
              onClick={handleDestinationClick}
            >
              {/* Image */}
              <ImageWithFallback
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl mb-2">
                  <strong>{destination.name}</strong>
                </h3>
                <p className="text-sm text-white/90 mb-1">
                  {destination.description}
                </p>
                <p className="text-sm text-white/80">
                  {destination.packages} {t('destinations.packages')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden text-center">
          <button className="text-[#1E88E5] hover:underline">
            {t('destinations.viewall')}
          </button>
        </div>
      </div>
    </section>
  );
}
