import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
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
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl mb-4">
              GreyMar Travel
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              • Viajes nacionales e internacionales<br/>• Transporte privado<br/>• Paquetes personalizados<br/>• Eventos y conciertos
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/18098778636" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-[#1E88E5] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (809) 877-8636
              </a>
              <a 
                href="mailto:info@greymartravel.com"
                className="flex items-center gap-2 text-sm hover:text-[#1E88E5] transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@greymartravel.com
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Santo Domingo, República Dominicana</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white mb-4">Horarios</h4>
            <div className="space-y-2 text-sm">
              <p>Lunes a viernes: 9:00 a.m. – 6:00 p.m.</p>
              <p>Sábados: 9:00 a.m. – 1:00 p.m.</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-4">Enlaces</h4>
            <nav className="space-y-2 text-sm">
              <button 
                onClick={() => scrollToSection('experiencias')}
                className="block hover:text-[#1E88E5] transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('paquetes')}
                className="block hover:text-[#1E88E5] transition-colors"
              >
                Paquetes
              </button>
              <button 
                onClick={() => scrollToSection('destinos')}
                className="block hover:text-[#1E88E5] transition-colors"
              >
                Destinos
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="block hover:text-[#1E88E5] transition-colors"
              >
                Nosotros
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-sm text-center text-gray-400 italic">
            GreyMar Travel Solutions promueve el turismo responsable, la seguridad de sus viajeros y la conexión humana detrás de cada experiencia.
          </p>
          <p className="text-xs text-center text-gray-500 mt-4">
            © {new Date().getFullYear()} GreyMar Travel Solutions. Todos los derechos reservados. Diseño y desarrollo <strong><a href="https://zagirova.com" target="_blank">Zagirova.com</a></strong>.
          </p>
        </div>
      </div>
    </footer>
  );
}
