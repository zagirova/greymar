import { motion } from 'motion/react';
import { MapPin, Palmtree, Ticket, Globe } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import experienceImageLeft from 'figma:asset/0c0e480fd2620a672a939f5416f57744fc554250.png';
import experienceImageRight from 'figma:asset/10395a70428e1045f60a5d2a05ea04f554b751dd.png';
import { useLanguage } from '../utils/translations';

export function ExperiencesSection() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      icon: MapPin,
      title: t('experiences.card1.title'),
      description: t('experiences.card1.description'),
    },
    {
      icon: Palmtree,
      title: t('experiences.card2.title'),
      description: t('experiences.card2.description'),
    },
    {
      icon: Ticket,
      title: t('experiences.card3.title'),
      description: t('experiences.card3.description'),
    },
    {
      icon: Globe,
      title: t('experiences.card4.title'),
      description: t('experiences.card4.description'),
    },
  ];

  return (
    <section className="py-16 lg:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left Side - Images */}
          <div className="grid grid-cols-2 gap-4 h-full order-2 lg:order-1">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden relative h-full"
            >
              <img
                src={experienceImageRight}
                alt="Experiencias de viaje"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl overflow-hidden relative h-full"
            >
              <img
                src={experienceImageLeft}
                alt="Experiencias de viaje"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col order-1 lg:order-2"
          >
            {/* Title */}
            <h2 className="text-gray-900 mb-4">
              {t('experiences.title')}
            </h2>

            {/* Intro Text */}
            <p className="text-gray-600 mb-8">
              {t('experiences.subtitle')}
            </p>

            {/* Experiences Grid - 1 column on mobile, 2 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="flex gap-3"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#1E88E5]" strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="text-gray-900 mb-1">
                        <strong>{experience.title}</strong>
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <PrimaryButton
                onClick={() => {
                  const section = document.getElementById('paquetes');
                  if (section) {
                    const offset = 100;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {t('experiences.cta')}
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
