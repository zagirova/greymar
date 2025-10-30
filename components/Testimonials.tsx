import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import travelImage from 'figma:asset/794ed297624a89e6508e4146d6e03c521c4733b1.png';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Ana Rodríguez',
      location: 'Santo Domingo, RD',
      text: 'Mi viaje a Samaná con GreyMar fue impecable. Todo estaba perfectamente coordinado: traslados, hotel y excursión de ballenas. Me sentí cuidada desde la reserva hasta el regreso.',
      avatar: 'https://images.unsplash.com/photo-1607151658386-305a46a8834a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEb21pbmljYW4lMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTc1MzgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Carlos Méndez',
      location: 'Santiago, RD',
      text: 'Viajamos en familia a Punta Cana y fue una experiencia sin estrés. GreyMar nos ayudó con cada detalle y siempre estuvieron pendientes. Excelente servicio y atención humana.',
      avatar: 'https://images.unsplash.com/photo-1547429299-aea7bf817390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEb21pbmljYW4lMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjE3NTM4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Laura Jiménez',
      location: 'Medellín, Colombia',
      text: 'Asistí al concierto de Alejandro Fernández con su paquete completo. Todo fluyó perfecto: hotel, traslados y entradas. Viajar con GreyMar fue sentirse VIP de principio a fin.',
      avatar: 'https://images.unsplash.com/photo-1734174040793-a2951b0e5f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTc1MzgwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Pierre Lefevre',
      location: 'París, Francia',
      text: 'Reservé un circuito cultural por República Dominicana y superó mis expectativas. Lugares auténticos, guías profesionales y logística impecable. Sin duda volveré con GreyMar.',
      avatar: 'https://images.unsplash.com/photo-1584203112613-40130d131d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGcmVuY2glMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjE3NTM4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Katherine Torres',
      location: 'Miami, EE. UU.',
      text: 'Descubrí las playas de Las Terrenas gracias a GreyMar. Su equipo organizó todo con precisión y cercanía. Un servicio que combina calidez caribeña con profesionalismo internacional.',
      avatar: 'https://images.unsplash.com/photo-1607108511847-ab1d54de6280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWVyaWNhbiUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYxNzUzODA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  // Auto-advance testimonials every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden">
      {/* Wave background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 25 40, 50 50 T 100 50"
                fill="none"
                stroke="#1E88E5"
                strokeWidth="2"
              />
              <path
                d="M0 70 Q 25 60, 50 70 T 100 70"
                fill="none"
                stroke="#1E88E5"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="mb-4">
            Lo que dicen nuestros viajeros
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
            {/* Polaroid Image Stack - Left (Static) */}
            <div className="relative hidden lg:block">
              {/* Background Polaroids - stacked behind (4 layers) */}
              <div className="absolute top-0 left-0 bg-white p-4 pb-12 shadow-xl transform rotate-12 opacity-25 z-0">
                <div className="aspect-[4/3] bg-gray-200 w-full"></div>
              </div>
              <div className="absolute top-2 left-2 bg-white p-4 pb-12 shadow-xl transform rotate-8 opacity-35 z-5">
                <div className="aspect-[4/3] bg-gray-200 w-full"></div>
              </div>
              <div className="absolute top-4 left-4 bg-white p-4 pb-12 shadow-xl transform rotate-5 opacity-50 z-10">
                <div className="aspect-[4/3] bg-gray-200 w-full"></div>
              </div>
              <div className="absolute top-6 left-6 bg-white p-4 pb-12 shadow-xl transform rotate-2 opacity-70 z-15">
                <div className="aspect-[4/3] bg-gray-200 w-full"></div>
              </div>

              {/* Main Polaroid Frame */}
              <div className="relative bg-white p-4 pb-16 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={travelImage}
                    alt="Viajera"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mobile image */}
            <div className="relative lg:hidden">
              <div className="bg-white p-4 pb-12 shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={travelImage}
                    alt="Viajera"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Text - Right */}
            <div className="relative">
              {/* Large Quote Icon Background */}
              <Quote className="absolute -bottom-4 -right-4 w-32 h-32 lg:w-40 lg:h-40 text-[#1E88E5]/5 pointer-events-none z-0" strokeWidth={1} />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {/* Quote Text */}
                  <div className="mb-8">
                    <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                      {currentTestimonial.text}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-8">
                    {/* Circular avatar with real person photo */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                      <img 
                        src={currentTestimonial.avatar} 
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-900">
                        <strong>{currentTestimonial.name}</strong>
                      </h4>
                      <p className="text-sm text-gray-600">
                        {currentTestimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation - Static (no animation) */}
              <div className="flex items-center gap-4 relative z-10">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center text-gray-700"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center text-gray-700"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2 ml-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-[#1E88E5] w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ver testimonio ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
