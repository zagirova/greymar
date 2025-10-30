import { useState, useEffect } from 'react';
import { User, MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/b5d5351640c83893aeae9a310387a5063ded0784.png';
import { PrimaryButton } from './PrimaryButton';
import { LoginModal } from './LoginModal';
import { useLanguage } from '../utils/translations';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-center transition-all duration-500 ${
          isScrolled ? 'h-20 lg:h-28' : 'h-28 lg:h-44'
        }`}>
          {/* Mobile Hamburger Menu - Left side */}
          <div className="absolute left-4 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'hover:bg-[#1E88E5]/20' : 'hover:bg-white/20'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Center Container with Logo and adjacent menus */}
          <div className="flex items-center gap-8">
            {/* Left Navigation - 2 items */}
            <nav className="hidden lg:flex items-center gap-6 mr-6">
              <button 
                onClick={() => scrollToSection('experiencias')}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                {t('header.explore')}
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                {t('header.about')}
              </button>
            </nav>

            {/* Center Logo */}
            <div className="flex items-center justify-center mx-6">
              <img 
                src={logo} 
                alt="Greymar Travel Solutions" 
                className={`w-auto transition-all duration-500 ${
                  isScrolled ? 'h-[60px] lg:h-[94px]' : 'h-[80px] lg:h-[134px]'
                }`}
              />
            </div>

            {/* Right Navigation - 2 items */}
            <nav className="hidden lg:flex items-center gap-6 ml-6">
              <button 
                onClick={() => scrollToSection('paquetes')}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                {t('header.packages')}
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                {t('header.stories')}
              </button>
            </nav>
          </div>

          {/* Right Icons - Absolute positioning on right side */}
          <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleLanguage}
              className={`px-2 sm:px-3 py-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'hover:bg-[#1E88E5]/20 hover:scale-110' : 'hover:bg-white/20'
              }`}
            >
              <span className="text-sm text-gray-700">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button 
              onClick={() => setLoginModalOpen(true)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'hover:bg-[#1E88E5]/20 hover:scale-110' : 'hover:bg-white/20'
              }`}
            >
              <User className="w-5 h-5 text-gray-700" />
            </button>
            {/* WhatsApp - Icon only on mobile, with text on desktop */}
            <a href="https://wa.me/18098778636" target="_blank" rel="noopener noreferrer">
              <PrimaryButton className="!px-3 sm:!px-5 !py-2.5 !text-base">
                <MessageCircle className="w-4 h-4 sm:inline sm:mr-2" />
                <span className="hidden sm:inline">{t('header.phone')}</span>
              </PrimaryButton>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection('experiencias')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-[#1E88E5]/10 hover:text-[#1E88E5] transition-colors"
              >
                {t('header.explore')}
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-[#1E88E5]/10 hover:text-[#1E88E5] transition-colors"
              >
                {t('header.about')}
              </button>
              <button
                onClick={() => scrollToSection('paquetes')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-[#1E88E5]/10 hover:text-[#1E88E5] transition-colors"
              >
                {t('header.packages')}
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-[#1E88E5]/10 hover:text-[#1E88E5] transition-colors"
              >
                {t('header.stories')}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </motion.header>
  );
}
