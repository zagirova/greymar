import { motion } from 'motion/react';
import { useLanguage } from '../utils/translations';

export function WhyChooseUs() {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('why.feature1.title'),
      description: t('why.feature1.description'),
    },
    {
      title: t('why.feature2.title'),
      description: t('why.feature2.description'),
    },
    {
      title: t('why.feature3.title'),
      description: t('why.feature3.description'),
    },
    {
      title: t('why.feature4.title'),
      description: t('why.feature4.description'),
    },
  ];

  return (
    <section className="py-12 lg:py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Title on Mobile, Vertical on Desktop */}
        <div className="lg:hidden text-center mb-8">
          <h3 className="text-2xl text-[#1E88E5]">{t('why.section.title')}</h3>
          <div className="w-16 h-px bg-gray-300 mx-auto mt-2"></div>
        </div>

        <div className="flex gap-6 lg:gap-12">
          {/* Vertical Title on Left - Hidden on mobile */}
          <div className="hidden lg:flex flex-shrink-0 flex-col items-center justify-center gap-4">
            {/* Top Line */}
            <div className="w-px h-6 bg-gray-300"></div>
            
            {/* Rotated Title */}
            <div className="relative">
              <h3 
                className="text-2xl text-[#1E88E5] whitespace-nowrap"
                style={{ 
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}
              >
                {t('why.section.title')}
              </h3>
            </div>
            
            {/* Bottom Line */}
            <div className="w-px h-6 bg-gray-300"></div>
          </div>

          {/* Features Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl px-7 py-9 hover:bg-blue-50/50 transition-colors duration-300 text-left h-full flex flex-col justify-center"
              >
                {/* Title */}
                <h4 className="text-lg text-gray-900 mb-3">
                  <strong>{feature.title}</strong>
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
