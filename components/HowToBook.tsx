import { motion } from 'motion/react';
import { Search, FileText, CreditCard, Plane } from 'lucide-react';
import { useLanguage } from '../utils/translations';

export function HowToBook() {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: '01',
      icon: Search,
      title: t('howto.step1.title'),
      description: t('howto.step1.description'),
    },
    {
      number: '02',
      icon: FileText,
      title: t('howto.step2.title'),
      description: t('howto.step2.description'),
    },
    {
      number: '03',
      icon: CreditCard,
      title: t('howto.step3.title'),
      description: t('howto.step3.description'),
    },
    {
      number: '04',
      icon: Plane,
      title: t('howto.step4.title'),
      description: t('howto.step4.description'),
    },
  ];

  return (
    <section className="py-12 lg:py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-gray-900 mb-4">
            {t('howto.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
            {t('howto.subtitle')}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-left"
              >
                {/* Icon with Number Background */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  {/* Semi-transparent Number Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span 
                      className="text-[120px] leading-none select-none pointer-events-none"
                      style={{ 
                        color: 'rgba(30, 136, 229, 0.08)',
                        fontFamily: 'Coliner-SemiBold, sans-serif'
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 p-6">
                    <Icon className="w-10 h-10 text-[#1E88E5]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-gray-900 mb-3">
                  <strong>{step.title}</strong>
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
