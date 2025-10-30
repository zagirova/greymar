import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BlogArticleModal } from './BlogArticleModal';
import { useLanguage } from '../utils/translations';

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
}

export function BlogSection() {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles: Article[] = [
    {
      id: '1',
      title: 'Viajar de noche: la magia del "noctourism"',
      description: 'Descubre experiencias que solo ocurren bajo las estrellas: playas silenciosas, rutas iluminadas y tours nocturnos que cambian tu percepción del destino.',
      image: 'https://images.unsplash.com/photo-1631599797710-83f1cbe65653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHNreSUyMGJlYWNofGVufDF8fHx8MTc2MTc1NjEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'TENDENCIAS',
      readTime: '7 min de lectura',
      date: '15 de octubre, 2025',
      content: [
        '¿Alguna vez has caminado por una playa vacía a medianoche, con el sonido de las olas como única compañía y un cielo tan lleno de estrellas que parece irreal? Eso no es coincidencia. Es noctourism, la tendencia de viaje que está cambiando radicalmente cómo exploramos el mundo.',
        'El turismo nocturno no tiene nada que ver con la vida nocturna tradicional. Olvida los bares ruidosos y las discotecas. Estamos hablando de experiencias profundamente transformadoras: observar el cielo nocturno sin contaminación lumínica, navegar en kayak bajo aguas bioluminiscentes que brillan con cada movimiento, o simplemente sentir el silencio absoluto de un desierto bajo la Vía Láctea.',
        'En el Caribe, destinos como República Dominicana están liderando esta revolución silenciosa. Las playas de Bahía de las Águilas, por ejemplo, permanecen prácticamente vírgenes después del atardecer. Sin hoteles masivos ni luces artificiales, el cielo se convierte en un espectáculo natural que rivaliza con cualquier atracción turística diseñada por humanos.',
        'Pero la magia real sucede en lugares como la laguna de Oviedo o las costas de Samaná, donde el fenómeno de bioluminiscencia transforma el agua en un mar de luces azules eléctricas. Cada palada de tu kayak, cada movimiento de tu mano, crea explosiones de luz natural. Es como nadar entre estrellas líquidas, un espectáculo que solo la naturaleza puede orquestar.',
        'Los expertos en astroturismo están diseñando rutas específicas para cazadores de estrellas. Imagina una cena privada en una terraza colonial de Santo Domingo mientras un astrónomo te enseña a identificar constelaciones del hemisferio sur. O una caminata nocturna guiada por biólogos en Los Haitises, donde los sonidos de la selva nocturna revelan un ecosistema completamente diferente al del día.',
        'El noctourism también responde a una necesidad emocional creciente: desconectar del ruido digital y reconectar con algo más antiguo. Viajar de noche significa escapar de las multitudes, encontrar silencio genuino, y permitir que el cerebro procese la experiencia sin distracciones. Es meditación en movimiento.',
        '¿Por qué está explotando esta tendencia ahora? Simple: cansancio del turismo masivo. Los viajeros buscan autenticidad, intimidad, experiencias que no puedan ser replicadas en Instagram. Una foto de una playa de día se ve igual en todos lados. Pero una imagen del cielo estrellado sobre el agua caribeña, con la Vía Láctea reflejada en las olas, cuenta una historia única.',
        'En GreyMar estamos pioneros en diseñar experiencias nocturnas personalizadas. No hablamos de tours genéricos. Hablamos de cenas privadas en playas desiertas iluminadas solo por antorchas naturales, rutas de senderismo nocturno con guías que conocen cada sonido de la selva, sesiones de fotografía nocturna para capturar la magia del cielo caribeño. Porque sabemos que la verdadera magia de un destino no termina cuando se pone el sol. En realidad, apenas comienza.',
      ],
    },
    {
      id: '2',
      title: 'Viajes con propósito real',
      description: 'El turismo regenerativo y consciente está redefiniendo cómo exploramos. Menos prisa, más conexión con la naturaleza y las comunidades locales.',
      image: 'https://images.unsplash.com/photo-1644945220247-7b48dc168e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMHdhdGVyZmFsbCUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2MTc1NjEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'SOSTENIBILIDAD',
      readTime: '8 min de lectura',
      date: '22 de octubre, 2025',
      content: [
        'Aquí está la verdad incómoda sobre el turismo tradicional: estamos amando los destinos hasta destruirlos. Playas saturadas, comunidades locales desplazadas, ecosistemas colapsados por la presión de millones de visitantes. Pero hay una alternativa que está ganando tracción entre viajeros conscientes: el turismo regenerativo.',
        'No confundas esto con "turismo sostenible" o "eco-turismo". Esos términos se han vuelto clichés de marketing. El turismo regenerativo va un paso más allá: no se trata solo de minimizar el daño, sino de dejar los lugares activamente mejores de lo que los encontraste. Es viajar con propósito, con impacto positivo medible.',
        '¿Cómo se ve esto en la práctica? En República Dominicana, hay proyectos fascinantes sucediendo ahora mismo. En Monte Cristi, viajeros participan en la reforestación de manglares, ecosistemas críticos que protegen las costas de huracanes y sirven como criaderos para miles de especies marinas. Plantas un manglar, aprendes sobre el ecosistema, y literalmente ves el impacto de tus manos.',
        'En el interior del país, cooperativas de cacao orgánico están transformando la economía local. Los viajeros no solo visitan las plantaciones: participan en el proceso de fermentación, aprenden técnicas ancestrales de los agricultores, y compran directamente del productor. Cada compra fortalece la economía circular, eliminando intermediarios que tradicionalmente se quedan con la mayoría de las ganancias.',
        'Pero el turismo regenerativo también implica decisiones más simples. ¿Dónde te hospedas? Elegir un hotel pequeño gestionado por familias locales en lugar de una cadena internacional significa que tu dinero circula en la economía local. ¿Dónde comes? Las fondas familiares no solo ofrecen comida más auténtica, también emplean a cocineras locales y compran ingredientes de agricultores cercanos.',
        'Este enfoque requiere cambiar completamente la mentalidad del "checklist turístico". En lugar de visitar 10 lugares en 5 días, el turismo regenerativo te invita a quedarte más tiempo en menos sitios. Conocer artesanos, aprender sus técnicas, entender las historias detrás de los productos. Es profundidad sobre amplitud.',
        'Las comunidades locales son el corazón del turismo regenerativo. Contratar guías nativos que conocen cada piedra, cada planta medicinal, cada leyenda transmitida de generación en generación. Comer en comedores donde la abuela cocina las recetas de su bisabuela. Comprar artesanías directamente del artesano y escuchar la historia de cada pieza. Cada transacción es una redistribución consciente de valor.',
        '¿Por qué importa esto ahora más que nunca? Porque el turismo masivo está colapsando destinos. Venecia se está hundiendo, Barcelona está expulsando turistas, Tailandia cierra playas por años para recuperación. Los viajeros inteligentes entienden que necesitamos un nuevo modelo o perderemos los lugares que amamos.',
        'En GreyMar no vendemos paquetes turísticos. Diseñamos experiencias regenerativas. Colaboramos con proyectos comunitarios verificados, con alojamientos que invierten en sus comunidades, con guías que protegen ecosistemas en lugar de explotarlos. Cada itinerario está diseñado para que tu viaje genere impacto positivo real, medible, duradero. Porque creemos que viajar bien significa dejar el mundo un poco mejor de lo que lo encontraste.',
      ],
    },
    {
      id: '3',
      title: 'Nuevos modos de viajar',
      description: 'Solitarios, parejas o grupos pequeños: cómo las nuevas generaciones transforman la forma de moverse y disfrutar cada destino.',
      image: 'https://images.unsplash.com/photo-1666935326498-12a58d50777f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmF2ZWwlMjBtb3VudGFpbiUyMHN1bnNldHxlbnwxfHx8fDE3NjE3NTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'LIFESTYLE',
      readTime: '6 min de lectura',
      date: '29 de octubre, 2025',
      content: [
        'Los tours en autobús con 50 personas están muriendo. Los itinerarios inflexibles donde visitas 8 países en 10 días están obsoletos. Y los paquetes todo incluido que te encierran en un resort están perdiendo su atractivo. Bienvenido a la era del viajero independiente, donde cada experiencia es única, personal e intransferible.',
        'Las estadísticas son claras: el turismo en solitario ha crecido más del 40% en los últimos tres años. Pero aquí está la parte interesante: no es solo millennials y Gen Z. Profesionales de 40 y 50 años también están eligiendo viajar solos, buscando experiencias de autodescubrimiento que simplemente no ocurren en grupos grandes.',
        'Para las mujeres, especialmente, viajar sola ha dejado de ser un acto de valentía para convertirse en una declaración de autonomía. Destinos como República Dominicana están invirtiendo fuertemente en seguridad y servicios específicamente diseñados para mujeres viajeras. Excursiones en grupos pequeños, alojamientos verificados, apps de seguridad locales. El mensaje es claro: tu género no debería limitar tu deseo de explorar.',
        'Pero no todo es soledad. Las parejas y grupos pequeños de amigos están redefiniendo qué significa viajar juntos. Olvida los resorts masivos con buffets interminables. Los viajeros modernos prefieren alquilar una villa privada en las montañas, contratar un chef local para una cena íntima, o diseñar una ruta de senderismo personalizada que los lleve a lugares que no aparecen en las guías turísticas.',
        'Esta transformación está impulsada por algo más profundo que solo preferencias: es un rechazo al turismo de consumo masivo. Los viajeros quieren autenticidad. Quieren conversaciones reales con locales, no interacciones transaccionales. Quieren probar comida en mercados familiares, no en restaurantes diseñados para extranjeros. Quieren calidad sobre cantidad, profundidad sobre amplitud.',
        'La tecnología ha sido el catalizador. Apps como TripAdvisor, Google Maps, y plataformas de alquiler como Airbnb han democratizado la información. Ya no necesitas un agente de viajes para diseñar un itinerario. Puedes leer reseñas de otros viajeros, ver fotos reales, comunicarte directamente con anfitriones locales. El poder se transfirió del intermediario al viajero.',
        'Pero aquí está el truco: más opciones no siempre significan mejores decisiones. La sobrecarga de información puede ser paralizante. ¿Qué playa elegir? ¿Cuál tour es realmente bueno y cuál es marketing? ¿Cómo distinguir experiencias auténticas de trampas turísticas? Aquí es donde entra el valor de la curación inteligente.',
        'En GreyMar entendemos que cada viajero tiene una huella digital única. No hacemos paquetes genéricos. Diseñamos experiencias a medida: para el viajero solitario que busca introspección, para la pareja que quiere reconectar lejos del ruido, para el grupo de amigos que celebra un hito importante. Flexibilidad total, autenticidad garantizada, experiencias que se adaptan a ti, no al revés. Porque viajar no debería ser seguir un guion. Debería ser escribir tu propia historia.',
      ],
    },
    {
      id: '4',
      title: 'Bleisure: trabajo y viaje en equilibrio',
      description: 'El mundo remoto abrió una era de viajeros híbridos. Aprende cómo combinar productividad con experiencias auténticas y descanso real.',
      image: 'https://images.unsplash.com/photo-1635826077719-684f5c795223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwbGFwdG9wJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzYxNzU2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'TRABAJO REMOTO',
      readTime: '7 min de lectura',
      date: '5 de noviembre, 2025',
      content: [
        '¿Qué pasaría si tu próxima videollamada de trabajo tuviera como fondo una playa caribeña en lugar de tu sala de estar? ¿Y si pudieras terminar tu jornada laboral a las 3 PM y estar explorando cascadas escondidas a las 4? Esto no es fantasía. Es bleisure, el fenómeno que está borrando la línea entre trabajo y vacaciones, y transformando cómo miles de profesionales diseñan sus vidas.',
        'El término "bleisure" (business + leisure) surgió en el mundo corporativo, pero ha sido adoptado agresivamente por trabajadores remotos que se negaron a elegir entre productividad profesional y calidad de vida. La pandemia aceleró esta tendencia exponencialmente: si puedo trabajar desde casa, ¿por qué no desde una villa con vista al mar?',
        'República Dominicana está emergiendo como uno de los destinos bleisure más atractivos del planeta. Y no es coincidencia. La infraestructura está ahí: internet de fibra óptica en zonas costeras, espacios de coworking en ciudades como Santo Domingo y Punta Cana, zonas horarias convenientes para trabajar con Estados Unidos y Europa, y un costo de vida significativamente más bajo que ciudades como Nueva York o Barcelona.',
        'Pero aquí está el secreto que los nómadas digitales experimentados ya descubrieron: bleisure no es trabajar en la playa con una laptop (la arena y el sol hacen eso imposible). Es sobre diseñar tu día estratégicamente. Mañanas productivas desde un café con aire acondicionado y wifi excelente. Videollamadas desde tu balcón privado con vista al océano. Y tardes completamente libres para vivir experiencias que normalmente requieren pedir vacaciones.',
        'El equilibrio es la clave del éxito bleisure. Los mejores practicantes dividen sus días de forma clara: 4-6 horas de trabajo profundo e ininterrumpido por las mañanas cuando la energía está alta, y tardes dedicadas completamente al ocio. No es multitasking. Es time-blocking inteligente que maximiza tanto productividad como disfrute.',
        'Este modelo también está transformando economías locales. Los viajeros bleisure se quedan semanas o meses en lugar de días. Alquilan apartamentos, comen en restaurantes locales repetidamente, contratan servicios (limpieza, lavandería, coworking), se integran a comunidades. Generan un flujo económico constante y sostenible en lugar del consumo explosivo y volátil del turista tradicional.',
        'Pero bleisure requiere infraestructura específica. No cualquier destino funciona. Necesitas internet confiable (no negociable), espacios de trabajo ergonómicos (trabajar desde la cama arruina tu espalda), acceso a servicios básicos (supermercados, farmacias, gimnasios), y una oferta cultural suficiente para no aburrirte después de dos semanas.',
        'Los desafíos son reales. Zonas horarias complicadas si trabajas con equipos globales. Impuestos y visas si te quedas varios meses. Soledad si no encuentras comunidad. Pero las recompensas superan ampliamente los obstáculos: libertad geográfica, experiencias culturales continuas, calidad de vida exponencialmente mejorada, y la sensación de que tu vida es realmente tuya.',
        'En GreyMar hemos diseñado paquetes específicos para trabajadores remotos. No son vacaciones tradicionales. Son experiencias de vida: alojamientos con internet de alta velocidad verificado, escritorios ergonómicos, zonas de trabajo silenciosas, pero también acceso a excursiones flexibles que se adaptan a tu agenda laboral. Opciones de 2 semanas, 1 mes, 3 meses. Porque entendemos que el futuro del trabajo no es regresar a la oficina. Es trabajar desde donde quieras, viviendo como siempre soñaste.',
      ],
    },
  ];

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeArticle = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
  };

  const nextArticle = () => {
    if (!selectedArticle) return;
    const currentIndex = articles.findIndex(a => a.id === selectedArticle.id);
    const nextIndex = (currentIndex + 1) % articles.length;
    setSelectedArticle(articles[nextIndex]);
  };

  const prevArticle = () => {
    if (!selectedArticle) return;
    const currentIndex = articles.findIndex(a => a.id === selectedArticle.id);
    const prevIndex = (currentIndex - 1 + articles.length) % articles.length;
    setSelectedArticle(articles[prevIndex]);
  };

  const featuredPost = articles[0];
  const otherPosts = articles.slice(1);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1E88E5] uppercase tracking-wider text-sm mb-3">
            {t('blog.label')}
          </p>
          <h2 className="mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:items-start">
          {/* Featured Post - Left */}
          <div className="group cursor-pointer lg:sticky lg:top-8" onClick={() => openArticle(featuredPost)}>
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/2]">
              <ImageWithFallback
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
            
            <div>
              <p className="text-[#1E88E5] text-xs uppercase tracking-wider mb-3">
                {featuredPost.category}
              </p>
              <h3 className="text-gray-900 mb-3 group-hover:text-[#1E88E5] transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {featuredPost.description}
              </p>
              <button className="inline-flex items-center gap-2 text-[#1E88E5] hover:gap-3 transition-all group">
                <span>{t('blog.readmore')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Smaller Posts - Right */}
          <div className="space-y-6">
            {otherPosts.map((post, index) => (
              <div
                key={index}
                onClick={() => openArticle(post)}
                className="group cursor-pointer flex gap-6 bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl w-40 h-32 flex-shrink-0">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-[#1E88E5] text-xs uppercase tracking-wider mb-2">
                    {post.category}
                  </p>
                  <h4 className="text-gray-900 mb-2 group-hover:text-[#1E88E5] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-[#1E88E5] text-sm hover:gap-3 transition-all">
                    <span>{t('blog.readmore')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Article Modal */}
        <BlogArticleModal
          article={selectedArticle}
          isOpen={isModalOpen}
          onClose={closeArticle}
          onNext={nextArticle}
          onPrev={prevArticle}
        />
      </div>
    </section>
  );
}
