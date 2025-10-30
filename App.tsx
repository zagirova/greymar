import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ExperiencesSection } from './components/ExperiencesSection';
import { VideoSection } from './components/VideoSection';
import { PopularPackages } from './components/PopularPackages';
import { HowToBook } from './components/HowToBook';
import { TopDestinations } from './components/TopDestinations';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './utils/translations';
// import { DevServerIndicator } from './components/ServerStatus'; // Descomenta para ver estado del servidor
// import { DemoModeNotice } from './components/DemoModeNotice'; // Descomenta para mostrar aviso de modo demo

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
      {/* Componentes opcionales de desarrollo */}
      {/* <DevServerIndicator /> */}
      {/* <DemoModeNotice /> */}
      
      <Header />
      <Hero />
      <div id="nosotros">
        <TrustSection />
      </div>
      <WhyChooseUs />
      <div id="experiencias">
        <ExperiencesSection />
      </div>
      <VideoSection />
      <div id="paquetes">
        <PopularPackages />
      </div>
      <div id="proceso">
        <HowToBook />
      </div>
      <div id="destinos">
        <TopDestinations />
      </div>
      <Testimonials />
      <div id="blog">
        <BlogSection />
      </div>
      <FinalCTA />
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
    </LanguageProvider>
  );
}
