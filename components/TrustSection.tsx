import { motion } from 'motion/react';
import { Clock, Users, MapPin, Headset } from 'lucide-react';
import travelImage from 'figma:asset/a18d62b5da1e533a27bd8a7469d67486ab5ec290.png';
import { PrimaryButton } from './PrimaryButton';
import { useLanguage } from '../utils/translations';

export function TrustSection() {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Clock,
      number: t('trust.stat1.number'),
      label: t('trust.stat1.label'),
      description: t('trust.stat1.description'),
    },
    {
      icon: Users,
      number: t('trust.stat2.number'),
      label: t('trust.stat2.label'),
      description: t('trust.stat2.description'),
    },
    {
      icon: MapPin,
      number: t('trust.stat3.number'),
      label: t('trust.stat3.label'),
      description: t('trust.stat3.description'),
    },
    {
      icon: Headset,
      number: t('trust.stat4.number'),
      label: t('trust.stat4.label'),
      description: t('trust.stat4.description'),
    },
  ];

  return (
    <section className="py-20 px-6 bg-white mb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header - Same style as PopularPackages */}
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="mb-4">
              {t('trust.title')}
            </h2>
            <p className="text-gray-600">
              {t('trust.subtitle')}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex flex-col justify-center h-full">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-[#1E88E5]" strokeWidth={1.5} />
                    </div>
                    <div className="text-4xl text-gray-900 mb-1">
                      <strong>{stat.number}</strong>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">
                      <strong>{stat.label}</strong>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Content Block with Image - Desktop: side by side, Mobile: stacked full width */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col lg:flex-row gap-6 h-full"
          >
            {/* Text Content - Flexbox with space-between */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="lg:mt-8">
                <h4 className="text-2xl text-gray-900 mb-4">
                  <strong>{t('trust.content.title')}</strong>
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('trust.content.p1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('trust.content.p2')}
                </p>
              </div>

              <PrimaryButton 
                className="lg:mb-8 self-start mt-6 lg:mt-0"
                onClick={() => {
                  const section = document.getElementById('proceso');
                  if (section) {
                    const offset = 100;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {t('trust.cta')}
              </PrimaryButton>
            </div>

            {/* Image - Full width on mobile, fixed width on desktop */}
            <div className="w-full lg:w-64 lg:flex-shrink-0 h-64 lg:h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={travelImage}
                alt="Traveler in tropical paradise"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
