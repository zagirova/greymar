import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'header.explore': 'Explora',
    'header.about': 'Nosotros',
    'header.packages': 'Paquetes',
    'header.stories': 'Historias',
    'header.phone': '(809) 877-8636',
    
    // Hero
    'hero.title': 'Tu viaje, nuestra misión.',
    'hero.subtitle1': 'Creamos experiencias seguras, personalizadas y memorables en cada destino.',
    'hero.subtitle2': 'Viaja con tranquilidad, viaja con GreyMar.',
    'hero.cta': 'ELIGE TU DESTINO',
    
    // Login Modal
    'login.title.signin': 'Iniciar Sesión',
    'login.title.signup': 'Crear Cuenta',
    'login.description.signin': 'Ingresa a tu cuenta de GreyMar Travel',
    'login.description.signup': 'Crea tu cuenta para comenzar a viajar',
    'login.name': 'Nombre completo',
    'login.name.placeholder': 'Juan Pérez',
    'login.email': 'Correo electrónico',
    'login.email.placeholder': 'tu@email.com',
    'login.password': 'Contraseña',
    'login.password.placeholder': '••••••••',
    'login.button.signin': 'Iniciar Sesión',
    'login.button.signup': 'Crear Cuenta',
    'login.switch.signup': '¿No tienes cuenta? Regístrate',
    'login.switch.signin': '¿Ya tienes cuenta? Inicia sesión',
    
    // Trust Section
    'trust.title': 'Tu guía de viaje de confianza',
    'trust.subtitle': 'Acompañamos tu viaje desde la idea hasta el regreso.',
    'trust.stat1.number': '10+',
    'trust.stat1.label': 'años de experiencia',
    'trust.stat1.description': 'Diseñando viajes seguros en el Caribe y Latinoamérica.',
    'trust.stat2.number': '2,000+',
    'trust.stat2.label': 'viajeros satisfechos',
    'trust.stat2.description': 'Clientes que confían en nosotros para vivir experiencias sin preocupaciones.',
    'trust.stat3.number': '80+',
    'trust.stat3.label': 'destinos gestionados',
    'trust.stat3.description': 'Desde escapadas locales hasta eventos internacionales exclusivos.',
    'trust.stat4.number': '24/7',
    'trust.stat4.label': 'atención humana',
    'trust.stat4.description': 'Soporte constante antes, durante y después de tu viaje.',
    'trust.content.title': 'Creamos experiencias que superan expectativas.',
    'trust.content.p1': 'En GreyMar Travel Solutions, cada itinerario combina seguridad, personalización y cercanía humana.',
    'trust.content.p2': 'Nuestro compromiso es hacer de tu viaje algo tan confiable como inolvidable: tú disfrutas, nosotros cuidamos cada detalle.',
    'trust.cta': 'Conoce cómo trabajamos',
    
    // Why Choose Us
    'why.title': 'Siempre contigo',
    'why.subtitle': 'Cada fase del viaje, cubierta con detalle.',
    'why.reason1.title': 'Diseño personalizado',
    'why.reason1.description': 'Adaptamos cada itinerario a tus intereses, presupuesto y ritmo de viaje.',
    'why.reason2.title': 'Seguridad garantizada',
    'why.reason2.description': 'Trabajamos con proveedores certificados y tenemos protocolos de respaldo.',
    'why.reason3.title': 'Asistencia 24/7',
    'why.reason3.description': 'Estamos disponibles en todo momento para resolver cualquier imprevisto.',
    'why.reason4.title': 'Transparencia total',
    'why.reason4.description': 'Sin costos ocultos. Conoces cada detalle antes de confirmar.',
    
    // Experiences
    'experiences.title': 'Experiencias',
    'experiences.subtitle': 'Desde escapadas locales hasta viajes por el mundo, diseñamos experiencias seguras y a tu medida.',
    'experiences.card1.title': 'Tours personalizados',
    'experiences.card1.description': 'Crea tu propio itinerario con destinos y actividades únicas.',
    'experiences.card2.title': 'Resorts & escapadas',
    'experiences.card2.description': 'Relájate en playas del Caribe o disfruta de hoteles de lujo en Europa.',
    'experiences.card3.title': 'Eventos y conciertos',
    'experiences.card3.description': 'Viaja a espectáculos internacionales con todo organizado.',
    'experiences.card4.title': 'Circuitos culturales',
    'experiences.card4.description': 'Descubre historia, gastronomía y paisajes en distintos continentes.',
    'experiences.cta': 'Explorar ahora',
    
    // Video Section
    'video.title': 'Vive el Caribe con nosotros',
    'video.description': 'Descubre los destinos que hacen de cada viaje una experiencia única',
    
    // Packages
    'packages.title': 'Paquetes destacados',
    'packages.subtitle': 'Ofertas seleccionadas para este mes',
    'packages.filter.all': 'Todos',
    'packages.filter.family': 'Familiar',
    'packages.filter.concert': 'Conciertos',
    'packages.filter.beach': 'Playas',
    'packages.from': 'Desde',
    'packages.reviews': 'reseñas',
    'packages.includes': 'Incluye:',
    'packages.reserve': 'Reservar ahora',
    'packages.favorites': 'Mis favoritos',
    
    // Package Details
    'package.lopesan.title': 'Lopesan Costa Bávaro Resort',
    'package.lopesan.location': 'Punta Cana, República Dominicana',
    'package.lopesan.dates': 'Octubre 21-23',
    'package.lopesan.description': 'Aloj. 2 noches todo incluido, traslados aeropuerto, acceso a todas las áreas y actividades, seguro de viaje.',
    'package.lopesan.price': 'US$480',
    
    'package.nickelodeon.title': 'Nickelodeon Hotels & Resorts',
    'package.nickelodeon.location': 'Punta Cana, República Dominicana',
    'package.nickelodeon.dates': 'Octubre 24-26',
    'package.nickelodeon.description': 'Aloj. 2 noches todo incluido, encuentros con personajes, parque acuático, club infantil, traslados, seguro.',
    'package.nickelodeon.price': 'US$640',
    
    'package.palladium.title': 'Grand Palladium Resort',
    'package.palladium.location': 'Punta Cana, República Dominicana',
    'package.palladium.dates': 'Octubre 27-29',
    'package.palladium.description': 'Aloj. 2 noches todo incluido premium, acceso a 5 resorts, 12 restaurantes, traslados, seguro de viaje.',
    'package.palladium.price': 'US$690',
    
    'package.riu.title': 'Riu Palace Bávaro',
    'package.riu.location': 'Punta Cana, República Dominicana',
    'package.riu.dates': 'Octubre 30 - Noviembre 1',
    'package.riu.description': 'Aloj. 2 noches todo incluido, 4 piscinas, spa, actividades acuáticas, traslados, seguro de viaje.',
    'package.riu.price': 'US$550',
    
    'package.hardrock.title': 'Hard Rock Hotel & Casino',
    'package.hardrock.location': 'Punta Cana, República Dominicana',
    'package.hardrock.dates': 'Noviembre 3-5',
    'package.hardrock.description': 'Aloj. 2 noches todo incluido, acceso al casino, música en vivo, entretenimiento nocturno, traslados, seguro.',
    'package.hardrock.price': 'US$710',
    
    'package.alejandro.title': 'Concierto Alejandro Fernández',
    'package.alejandro.location': 'Medellín, Colombia',
    'package.alejandro.dates': 'Octubre 24-26 (boleto concierto Oct 25)',
    'package.alejandro.description': 'Aloj. 2 noches 1ra clase, traslados aeropuerto y concierto, boleto y seguro de viaje.',
    'package.alejandro.price': 'US$960',
    
    'package.caribe.title': 'Caribe Premium en Las Terrenas',
    'package.caribe.location': 'Las Terrenas, República Dominicana',
    'package.caribe.dates': 'Noviembre 6-8',
    'package.caribe.description': 'Aloj. 2 noches en hotel boutique frente al mar, desayuno gourmet, tour guiado, traslados, seguro de viaje.',
    'package.caribe.price': 'US$420',
    
    'package.ballenas.title': 'Observación de Ballenas - Samaná',
    'package.ballenas.location': 'Samaná, República Dominicana',
    'package.ballenas.dates': 'Noviembre 9-11',
    'package.ballenas.description': 'Aloj. 2 noches, tour de avistamiento de ballenas, visita a Cayo Levantado, guía especializado, traslados, seguro.',
    'package.ballenas.price': 'US$385',
    
    // How to Book
    'howto.title': '¿Cómo reservar tu viaje?',
    'howto.subtitle': 'Sigue cuatro pasos simples para planificar tu próxima experiencia GreyMar.',
    'howto.step1.title': 'Descubre & selecciona',
    'howto.step1.description': 'Elige el paquete que más se adapte a tu estilo.',
    'howto.step2.title': 'Confirma tu reserva',
    'howto.step2.description': 'Envía tu solicitud y valida fechas y detalles básicos.',
    'howto.step3.title': 'Realiza tu pago',
    'howto.step3.description': 'Completa el pago de forma segura y flexible.',
    'howto.step4.title': 'Disfruta tu viaje',
    'howto.step4.description': 'Relájate, nosotros nos ocupamos del resto.',
    
    // Top Destinations
    'destinations.title': 'Nuestros destinos top',
    'destinations.subtitle': 'Cada lugar con su encanto, cultura y experiencias únicas.',
    'destinations.packages': 'paquetes',
    'destinations.viewall': 'Ver todos los destinos →',
    'destinations.puntacana': 'Punta Cana',
    'destinations.puntacana.description': 'Playas paradisíacas y resorts de lujo',
    'destinations.samana': 'Samaná',
    'destinations.samana.description': 'Naturaleza virgen y ballenas jorobadas',
    'destinations.colombia': 'Colombia',
    'destinations.colombia.description': 'Cultura vibrante y diversidad natural',
    'destinations.peru': 'Perú',
    'destinations.peru.description': 'Historia ancestral y maravillas incas',
    'destinations.miami': 'Miami',
    'destinations.miami.description': 'Ciudad moderna y playas cosmopolitas',
    
    // Why Choose Us
    'why.section.title': 'Siempre',
    'why.feature1.title': 'Soporte 24/7',
    'why.feature1.description': 'Siempre disponibles antes, durante y después del viaje.',
    'why.feature2.title': 'Pagos flexibles',
    'why.feature2.description': 'Opciones seguras y cómodas para tu reserva.',
    'why.feature3.title': 'Cambios sin drama',
    'why.feature3.description': 'Reagenda fácilmente sin complicaciones.',
    'why.feature4.title': 'Alianzas verificadas',
    'why.feature4.description': 'Hoteles y operadores certificados para tu tranquilidad.',
    
    // Testimonials
    'testimonials.title': 'Lo que dicen nuestros viajeros',
    'testimonials.subtitle': 'Experiencias reales de clientes satisfechos',
    'testimonials.testimonial1.name': 'Carlos Martínez',
    'testimonials.testimonial1.location': 'Santo Domingo, R.D.',
    'testimonials.testimonial1.text': 'Reservé el paquete familiar a Lopesan y fue espectacular. Desde el primer contacto hasta el regreso, todo estuvo perfectamente coordinado. Mis hijos quedaron fascinados.',
    'testimonials.testimonial2.name': 'Laura Jiménez',
    'testimonials.testimonial2.location': 'Medellín, Colombia',
    'testimonials.testimonial2.text': 'Asistí al concierto de Alejandro Fernández con su paquete completo. Todo fluyó perfecto: hotel, traslados y entradas. Viajar con GreyMar fue sentirse VIP de principio a fin.',
    'testimonials.testimonial3.name': 'Miguel Ángel Pérez',
    'testimonials.testimonial3.location': 'Santiago, R.D.',
    'testimonials.testimonial3.text': 'Organizaron nuestra luna de miel en Samaná. Cada detalle estaba cuidado: el hotel boutique, el tour privado, la cena romántica. Fue más de lo que esperábamos.',
    'testimonials.testimonial4.name': 'Katherine Torres',
    'testimonials.testimonial4.location': 'Miami, EE. UU.',
    'testimonials.testimonial4.text': 'Descubrí las playas de Las Terrenas gracias a GreyMar. Su equipo organizó todo con precisión y cercanía. Un servicio que combina calidez caribeña con profesionalismo internacional.',
    
    // Video Section
    'video.title': 'Vive el viaje.',
    'video.subtitle': 'Momentos reales, destinos que inspiran.\nTu historia comienza aquí.',
    'video.corner1': 'MUNDO',
    'video.corner2': 'REC',
    'video.corner3': 'EXPERIENCIAS',
    
    // Blog
    'blog.title': 'Ideas que cambian tu forma de viajar',
    'blog.subtitle': 'Tendencias, historias y nuevas maneras de descubrir el mundo — desde el Caribe hasta los rincones menos explorados del planeta.',
    'blog.label': 'Nuestro Blog',
    'blog.readmore': 'Leer más',
    'blog.close': 'Cerrar',
    'blog.previous': 'Anterior',
    'blog.next': 'Siguiente',
    'blog.share': 'Compartir este artículo:',
    'blog.author': 'Grey Martínez',
    
    // Blog Posts
    'blog.post1.title': '5 Playas Secretas en República Dominicana',
    'blog.post1.excerpt': 'Descubre rincones paradisíacos fuera de las rutas turísticas convencionales.',
    'blog.post2.title': 'Guía Completa: Avistamiento de Ballenas en Samaná',
    'blog.post2.excerpt': 'Todo lo que necesitas saber para vivir esta experiencia única de enero a marzo.',
    'blog.post3.title': 'Los Mejores Resorts Todo Incluido en Punta Cana',
    'blog.post3.excerpt': 'Comparativa detallada de los resorts más populares y sus experiencias exclusivas.',
    'blog.post4.title': 'Viajar con Niños: Consejos de Nuestros Expertos',
    'blog.post4.excerpt': 'Estrategias probadas para que tus vacaciones familiares sean inolvidables.',
    'blog.post5.title': 'Itinerario Perfecto: 3 Días en Medellín',
    'blog.post5.excerpt': 'Descubre la ciudad de la eterna primavera con nuestra guía local.',
    'blog.post6.title': 'Conciertos y Eventos 2024: Lo que Viene',
    'blog.post6.excerpt': 'Los eventos musicales más esperados del año en el Caribe y Latinoamérica.',
    
    // Final CTA
    'cta.title': '¿Listo para vivir tu próxima experiencia?',
    'cta.subtitle': 'Diseñamos cada viaje pensando en tus sueños. Hablemos de tu destino ideal.',
    'cta.button': 'Escríbenos por WhatsApp',
    
    // Form Modal
    'form.title': 'Solicitar información',
    'form.subtitle': 'Completa tus datos y nos pondremos en contacto contigo pronto',
    'form.package': 'Paquete seleccionado',
    'form.name': 'Nombre completo',
    'form.name.placeholder': 'Juan Pérez',
    'form.phone': 'Teléfono',
    'form.phone.placeholder': '+1 (809) 555-1234',
    'form.email': 'Correo electrónico',
    'form.email.placeholder': 'tu@email.com',
    'form.comments': 'Comentarios o preguntas (opcional)',
    'form.comments.placeholder': 'Cuéntanos más sobre tu viaje...',
    'form.submit': 'Enviar solicitud',
    'form.cancel': 'Cancelar',
    
    // Footer
    'footer.slogan': 'Tu guía de viaje de confianza',
    'footer.description': 'Creamos experiencias seguras, personalizadas y memorables en cada destino del Caribe y Latinoamérica.',
    'footer.company': 'Empresa',
    'footer.about': 'Sobre nosotros',
    'footer.destinations': 'Destinos',
    'footer.services': 'Servicios',
    'footer.contact.title': 'Contacto',
    'footer.follow': 'Síguenos',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos y condiciones',
    'footer.copyright': '© 2024 GreyMar Travel Solutions. Todos los derechos reservados.',
    'footer.quick': 'Enlaces rápidos',
    'footer.packages': 'Paquetes',
    'footer.blog': 'Blog',
    'footer.faq': 'Preguntas frecuentes',
  },
  en: {
    // Header
    'header.explore': 'Explore',
    'header.about': 'About Us',
    'header.packages': 'Packages',
    'header.stories': 'Stories',
    'header.phone': '(809) 877-8636',
    
    // Hero
    'hero.title': 'Your journey, our mission.',
    'hero.subtitle1': 'We create safe, personalized, and memorable experiences at every destination.',
    'hero.subtitle2': 'Travel with peace of mind, travel with GreyMar.',
    'hero.cta': 'CHOOSE YOUR DESTINATION',
    
    // Login Modal
    'login.title.signin': 'Sign In',
    'login.title.signup': 'Create Account',
    'login.description.signin': 'Log in to your GreyMar Travel account',
    'login.description.signup': 'Create your account to start traveling',
    'login.name': 'Full name',
    'login.name.placeholder': 'John Doe',
    'login.email': 'Email address',
    'login.email.placeholder': 'your@email.com',
    'login.password': 'Password',
    'login.password.placeholder': '••••••••',
    'login.button.signin': 'Sign In',
    'login.button.signup': 'Create Account',
    'login.switch.signup': "Don't have an account? Sign up",
    'login.switch.signin': 'Already have an account? Sign in',
    
    // Trust Section
    'trust.title': 'Your trusted travel guide',
    'trust.subtitle': 'We accompany your journey from idea to return.',
    'trust.stat1.number': '10+',
    'trust.stat1.label': 'years of experience',
    'trust.stat1.description': 'Designing safe trips in the Caribbean and Latin America.',
    'trust.stat2.number': '2,000+',
    'trust.stat2.label': 'satisfied travelers',
    'trust.stat2.description': 'Clients who trust us to live worry-free experiences.',
    'trust.stat3.number': '80+',
    'trust.stat3.label': 'managed destinations',
    'trust.stat3.description': 'From local getaways to exclusive international events.',
    'trust.stat4.number': '24/7',
    'trust.stat4.label': 'human support',
    'trust.stat4.description': 'Constant support before, during and after your trip.',
    'trust.content.title': 'We create experiences that exceed expectations.',
    'trust.content.p1': 'At GreyMar Travel Solutions, every itinerary combines safety, personalization and human closeness.',
    'trust.content.p2': 'Our commitment is to make your trip as reliable as it is unforgettable: you enjoy, we take care of every detail.',
    'trust.cta': 'Learn how we work',
    
    // Why Choose Us
    'why.title': 'Always with you',
    'why.subtitle': 'Every phase of the journey, covered in detail.',
    'why.reason1.title': 'Personalized design',
    'why.reason1.description': 'We adapt every itinerary to your interests, budget and travel pace.',
    'why.reason2.title': 'Guaranteed security',
    'why.reason2.description': 'We work with certified providers and have backup protocols.',
    'why.reason3.title': '24/7 assistance',
    'why.reason3.description': 'We are available at all times to resolve any unforeseen events.',
    'why.reason4.title': 'Total transparency',
    'why.reason4.description': 'No hidden costs. You know every detail before confirming.',
    
    // Experiences
    'experiences.title': 'Experiences',
    'experiences.subtitle': 'From local getaways to trips around the world, we design safe, customized experiences.',
    'experiences.card1.title': 'Personalized tours',
    'experiences.card1.description': 'Create your own itinerary with unique destinations and activities.',
    'experiences.card2.title': 'Resorts & getaways',
    'experiences.card2.description': 'Relax on Caribbean beaches or enjoy luxury hotels in Europe.',
    'experiences.card3.title': 'Events and concerts',
    'experiences.card3.description': 'Travel to international shows with everything organized.',
    'experiences.card4.title': 'Cultural circuits',
    'experiences.card4.description': 'Discover history, gastronomy and landscapes across different continents.',
    'experiences.cta': 'Explore now',
    
    // Video Section
    'video.title': 'Experience the Caribbean with us',
    'video.description': 'Discover the destinations that make every trip a unique experience',
    
    // Packages
    'packages.title': 'Featured packages',
    'packages.subtitle': 'Selected offers for this month',
    'packages.filter.all': 'All',
    'packages.filter.family': 'Family',
    'packages.filter.concert': 'Concerts',
    'packages.filter.beach': 'Beaches',
    'packages.from': 'From',
    'packages.reviews': 'reviews',
    'packages.includes': 'Includes:',
    'packages.reserve': 'Book now',
    'packages.favorites': 'My favorites',
    
    // Package Details
    'package.lopesan.title': 'Lopesan Costa Bávaro Resort',
    'package.lopesan.location': 'Punta Cana, Dominican Republic',
    'package.lopesan.dates': 'October 21-23',
    'package.lopesan.description': 'All-inclusive 2-night accommodation, airport transfers, access to all areas and activities, travel insurance.',
    'package.lopesan.price': 'US$480',
    
    'package.nickelodeon.title': 'Nickelodeon Hotels & Resorts',
    'package.nickelodeon.location': 'Punta Cana, Dominican Republic',
    'package.nickelodeon.dates': 'October 24-26',
    'package.nickelodeon.description': 'All-inclusive 2-night accommodation, character encounters, water park, kids club, transfers, insurance.',
    'package.nickelodeon.price': 'US$640',
    
    'package.palladium.title': 'Grand Palladium Resort',
    'package.palladium.location': 'Punta Cana, Dominican Republic',
    'package.palladium.dates': 'October 27-29',
    'package.palladium.description': 'Premium all-inclusive 2-night accommodation, access to 5 resorts, 12 restaurants, transfers, travel insurance.',
    'package.palladium.price': 'US$690',
    
    'package.riu.title': 'Riu Palace Bávaro',
    'package.riu.location': 'Punta Cana, Dominican Republic',
    'package.riu.dates': 'October 30 - November 1',
    'package.riu.description': 'All-inclusive 2-night accommodation, 4 pools, spa, water activities, transfers, travel insurance.',
    'package.riu.price': 'US$550',
    
    'package.hardrock.title': 'Hard Rock Hotel & Casino',
    'package.hardrock.location': 'Punta Cana, Dominican Republic',
    'package.hardrock.dates': 'November 3-5',
    'package.hardrock.description': 'All-inclusive 2-night accommodation, casino access, live music, nighttime entertainment, transfers, insurance.',
    'package.hardrock.price': 'US$710',
    
    'package.alejandro.title': 'Alejandro Fernández Concert',
    'package.alejandro.location': 'Medellín, Colombia',
    'package.alejandro.dates': 'October 24-26 (concert ticket Oct 25)',
    'package.alejandro.description': 'First-class 2-night accommodation, airport and concert transfers, ticket and travel insurance.',
    'package.alejandro.price': 'US$960',
    
    'package.caribe.title': 'Premium Caribbean in Las Terrenas',
    'package.caribe.location': 'Las Terrenas, Dominican Republic',
    'package.caribe.dates': 'November 6-8',
    'package.caribe.description': '2-night accommodation in beachfront boutique hotel, gourmet breakfast, guided tour, transfers, travel insurance.',
    'package.caribe.price': 'US$420',
    
    'package.ballenas.title': 'Whale Watching - Samaná',
    'package.ballenas.location': 'Samaná, Dominican Republic',
    'package.ballenas.dates': 'November 9-11',
    'package.ballenas.description': '2-night accommodation, whale watching tour, Cayo Levantado visit, specialized guide, transfers, insurance.',
    'package.ballenas.price': 'US$385',
    
    // How to Book
    'howto.title': 'How to book your trip?',
    'howto.subtitle': 'Follow four simple steps to plan your next GreyMar experience.',
    'howto.step1.title': 'Discover & select',
    'howto.step1.description': 'Choose the package that best fits your style.',
    'howto.step2.title': 'Confirm your reservation',
    'howto.step2.description': 'Send your request and validate dates and basic details.',
    'howto.step3.title': 'Make your payment',
    'howto.step3.description': 'Complete payment securely and flexibly.',
    'howto.step4.title': 'Enjoy your trip',
    'howto.step4.description': 'Relax, we take care of the rest.',
    
    // Top Destinations
    'destinations.title': 'Our top destinations',
    'destinations.subtitle': 'Each place with its charm, culture and unique experiences.',
    'destinations.packages': 'packages',
    'destinations.viewall': 'View all destinations →',
    'destinations.puntacana': 'Punta Cana',
    'destinations.puntacana.description': 'Paradise beaches and luxury resorts',
    'destinations.samana': 'Samaná',
    'destinations.samana.description': 'Virgin nature and humpback whales',
    'destinations.colombia': 'Colombia',
    'destinations.colombia.description': 'Vibrant culture and natural diversity',
    'destinations.peru': 'Peru',
    'destinations.peru.description': 'Ancient history and Inca wonders',
    'destinations.miami': 'Miami',
    'destinations.miami.description': 'Modern city and cosmopolitan beaches',
    
    // Why Choose Us
    'why.section.title': 'Always',
    'why.feature1.title': '24/7 Support',
    'why.feature1.description': 'Always available before, during and after the trip.',
    'why.feature2.title': 'Flexible payments',
    'why.feature2.description': 'Safe and convenient options for your reservation.',
    'why.feature3.title': 'Changes without drama',
    'why.feature3.description': 'Easily reschedule without complications.',
    'why.feature4.title': 'Verified alliances',
    'why.feature4.description': 'Certified hotels and operators for your peace of mind.',
    
    // Testimonials
    'testimonials.title': 'What our travelers say',
    'testimonials.subtitle': 'Real experiences from satisfied customers',
    'testimonials.testimonial1.name': 'Ana Rodríguez',
    'testimonials.testimonial1.location': 'Santo Domingo, DR',
    'testimonials.testimonial1.text': 'My trip to Samaná with GreyMar was impeccable. Everything was perfectly coordinated: transfers, hotel and whale tour. I felt taken care of from booking to return.',
    'testimonials.testimonial2.name': 'Carlos Méndez',
    'testimonials.testimonial2.location': 'Santiago, DR',
    'testimonials.testimonial2.text': 'We traveled as a family to Punta Cana and it was a stress-free experience. GreyMar helped us with every detail and were always attentive. Excellent service and human attention.',
    'testimonials.testimonial3.name': 'Laura Jiménez',
    'testimonials.testimonial3.location': 'Medellín, Colombia',
    'testimonials.testimonial3.text': 'I attended the Alejandro Fernández concert with their complete package. Everything flowed perfectly: hotel, transfers and tickets. Traveling with GreyMar was feeling VIP from start to finish.',
    'testimonials.testimonial4.name': 'Pierre Lefevre',
    'testimonials.testimonial4.location': 'Paris, France',
    'testimonials.testimonial4.text': 'I booked a cultural circuit through the Dominican Republic and it exceeded my expectations. Authentic places, professional guides and impeccable logistics. I will definitely return with GreyMar.',
    'testimonials.testimonial5.name': 'Katherine Torres',
    'testimonials.testimonial5.location': 'Miami, USA',
    'testimonials.testimonial5.text': 'I discovered the beaches of Las Terrenas thanks to GreyMar. Their team organized everything with precision and warmth. A service that combines Caribbean charm with international professionalism.',
    
    // Video Section
    'video.title': 'Live the journey.',
    'video.subtitle': 'Real moments, inspiring destinations.\\nYour story starts here.',
    'video.corner1': 'WORLD',
    'video.corner2': 'REC',
    'video.corner3': 'EXPERIENCES',
    
    // Blog
    'blog.title': 'Ideas that change the way you travel',
    'blog.subtitle': 'Trends, stories and new ways to discover the world — from the Caribbean to the least explored corners of the planet.',
    'blog.label': 'Our Blog',
    'blog.readmore': 'Read more',
    'blog.close': 'Close',
    'blog.previous': 'Previous',
    'blog.next': 'Next',
    'blog.share': 'Share this article:',
    'blog.author': 'Grey Martínez',
    
    // Blog Posts
    'blog.post1.title': '5 Secret Beaches in the Dominican Republic',
    'blog.post1.excerpt': 'Discover paradise corners off the conventional tourist routes.',
    'blog.post2.title': 'Complete Guide: Whale Watching in Samaná',
    'blog.post2.excerpt': 'Everything you need to know to live this unique experience from January to March.',
    'blog.post3.title': 'The Best All-Inclusive Resorts in Punta Cana',
    'blog.post3.excerpt': 'Detailed comparison of the most popular resorts and their exclusive experiences.',
    'blog.post4.title': 'Traveling with Children: Tips from Our Experts',
    'blog.post4.excerpt': 'Proven strategies to make your family vacation unforgettable.',
    'blog.post5.title': 'Perfect Itinerary: 3 Days in Medellín',
    'blog.post5.excerpt': 'Discover the city of eternal spring with our local guide.',
    'blog.post6.title': 'Concerts and Events 2024: What\'s Coming',
    'blog.post6.excerpt': 'The most anticipated musical events of the year in the Caribbean and Latin America.',
    
    // Final CTA
    'cta.title': 'Ready to live your next experience?',
    'cta.subtitle': 'We design each trip thinking about your dreams. Let\'s talk about your ideal destination.',
    'cta.button': 'Write us on WhatsApp',
    
    // Form Modal
    'form.title': 'Request information',
    'form.subtitle': 'Complete your details and we will contact you soon',
    'form.package': 'Selected package',
    'form.name': 'Full name',
    'form.name.placeholder': 'John Doe',
    'form.phone': 'Phone',
    'form.phone.placeholder': '+1 (809) 555-1234',
    'form.email': 'Email address',
    'form.email.placeholder': 'your@email.com',
    'form.comments': 'Comments or questions (optional)',
    'form.comments.placeholder': 'Tell us more about your trip...',
    'form.submit': 'Submit request',
    'form.cancel': 'Cancel',
    
    // Footer
    'footer.slogan': 'Your trusted travel guide',
    'footer.description': 'We create safe, personalized and memorable experiences at every destination in the Caribbean and Latin America.',
    'footer.company': 'Company',
    'footer.about': 'About us',
    'footer.destinations': 'Destinations',
    'footer.services': 'Services',
    'footer.contact.title': 'Contact',
    'footer.follow': 'Follow us',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms and conditions',
    'footer.copyright': '© 2024 GreyMar Travel Solutions. All rights reserved.',
    'footer.quick': 'Quick links',
    'footer.packages': 'Packages',
    'footer.blog': 'Blog',
    'footer.faq': 'FAQ',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
