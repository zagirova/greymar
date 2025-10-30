import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Users, Baby, Ticket, Hotel, Music, Star, Plane, Waves } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PrimaryButton } from './PrimaryButton';
import lopesanImage from 'figma:asset/91d7360055d0736888f15639e24e8908cfeda74c.png';
import nickelodeonImage from 'figma:asset/98f5633db9c20f0cd3cd1ec5af33ee5cb6da5140.png';
import palladiumImage from 'figma:asset/74ead2435bdc69ca69cc07b9459f97090aa2eacf.png';
import riuPalaceImage from 'figma:asset/b47035cd9edf210e3e052d322c12467f32fdd9ab.png';
import hardRockImage from 'figma:asset/69dacd4562b305fdaad24c176817703d54369292.png';
import alejandroFernandezImage from 'figma:asset/92f9fa005810839712d046c7e72cfd04e41b9252.png';
import caribePremiumImage from 'figma:asset/003b613878196b080174b2a90b0ff6144849b6af.png';
import balenasImage from 'figma:asset/a11d4732145f8d09f46b6b6d4e303bf707e29761.png';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useForm, Controller } from 'react-hook-form@7.55.0';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner@2.0.3';
import { PhoneInput } from './PhoneInput';
import { NameInput } from './NameInput';

interface Package {
  id: number;
  title: string;
  location: string;
  dates: string;
  description: string;
  price: string;
  priceDetails?: string[];
  includes?: string[];
  image: string;
  icon: any;
  rating: number;
  reviewCount: number;
  isConcert?: boolean;
}

interface FormData {
  packageId: string;
  name: string;
  phone: string;
  email: string;
  comments: string;
}

const packages: Package[] = [
  {
    id: 1,
    title: 'Lopesan Costa Bávaro',
    location: 'Punta Cana, República Dominicana',
    dates: 'Noviembre 8-10 | Feriado de la Constitución',
    description: 'Bloqueo especial — sujeta a disponibilidad sin previo aviso.',
    price: 'US$904',
    priceDetails: ['2 adultos'],
    image: lopesanImage,
    icon: Hotel,
    rating: 4.8,
    reviewCount: 32,
  },
  {
    id: 2,
    title: 'Nickelodeon Hotels & Resorts',
    location: 'Punta Cana, República Dominicana',
    dates: 'Octubre 24-26',
    description: 'Incluye acceso al parque acuático, actividades familiares y diversión temática.',
    price: 'US$640',
    priceDetails: ['2 adultos', 'Niños hasta 12 años: US$100'],
    image: nickelodeonImage,
    icon: Baby,
    rating: 4.9,
    reviewCount: 28,
  },
  {
    id: 3,
    title: 'Grand Palladium',
    location: 'Punta Cana, República Dominicana',
    dates: 'Octubre 10-12',
    description: 'Perfecto para escapadas familiares con entretenimiento para todas las edades.',
    price: 'US$144',
    priceDetails: ['Ocupación doble', '1er niño gratis (3–12 años)'],
    image: palladiumImage,
    icon: Hotel,
    rating: 4.5,
    reviewCount: 15,
  },
  {
    id: 4,
    title: 'Riu Palace',
    location: 'Punta Cana, República Dominicana',
    dates: 'Octubre 10-12',
    description: 'Ambiente elegante, gastronomía premium y parque acuático para adultos y niños.',
    price: 'US$530',
    priceDetails: ['2 adultos'],
    image: riuPalaceImage,
    icon: Hotel,
    rating: 4.7,
    reviewCount: 21,
  },
  {
    id: 5,
    title: 'Hard Rock Hotel',
    location: 'Punta Cana, República Dominicana',
    dates: 'Octubre 10-12',
    description: 'Conciertos, casino, golf y todo el lujo del Caribe en un solo lugar.',
    price: 'US$819',
    priceDetails: ['2 adultos', '2 niños gratis (hasta 17 años)'],
    image: hardRockImage,
    icon: Music,
    rating: 5.0,
    reviewCount: 18,
  },
  {
    id: 6,
    title: 'Concierto Alejandro Fernández',
    location: 'Medellín, Colombia',
    dates: 'Octubre 24-26 (boleto concierto Oct 25)',
    description: 'Aloj. 2 noches 1ra clase, traslados aeropuerto y concierto, boleto y seguro de viaje.',
    price: 'US$613',
    priceDetails: ['General | Preferencial | Palco'],
    image: alejandroFernandezImage,
    icon: Music,
    rating: 4.6,
    reviewCount: 9,
    isConcert: true,
  },
  {
    id: 7,
    title: 'Escapada Caribe Premium',
    location: 'Punta Cana – Bávaro, República Dominicana',
    dates: 'Noviembre 15-19',
    description: 'Resort todo-incluido frente a la playa con actividades acuáticas ilimitadas.',
    price: 'US$1,150',
    priceDetails: ['2 adultos'],
    image: caribePremiumImage,
    icon: Hotel,
    rating: 4.5,
    reviewCount: 24,
  },
  {
    id: 8,
    title: 'Nature & Ballenas',
    location: 'Samaná, República Dominicana',
    dates: 'Enero 20-23, 2026',
    description: 'Tour de ballenas jorobadas, playas vírgenes y excursiones ecológicas con alojamiento incluido.',
    price: 'US$790',
    priceDetails: ['2 adultos'],
    image: balenasImage,
    icon: Waves,
    rating: 4.6,
    reviewCount: 17,
  },
  {
    id: 999,
    title: 'Otro',
    location: 'Personalizado',
    dates: 'Flexible',
    description: 'Itinerario personalizado según tus preferencias y necesidades.',
    price: 'Por consultar',
    priceDetails: [],
    image: '',
    icon: Plane,
    rating: 0,
    reviewCount: 0,
  },
];



export function PopularPackages() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('greymar-favorites');
    if (savedFavorites) {
      try {
        const parsed = JSON.parse(savedFavorites);
        setFavorites(new Set(parsed));
      } catch (e) {
        console.error('Error loading favorites:', e);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('greymar-favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      packageId: '',
      name: '',
      phone: '',
      email: '',
      comments: '',
    },
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const handleReserve = (pkg: Package) => {
    setSelectedPackage(pkg);
    setValue('packageId', pkg.id.toString());
    setIsModalOpen(true);
  };

  const handleCustomItinerary = () => {
    const otroPackage = packages.find(p => p.id === 999);
    if (otroPackage) {
      setSelectedPackage(otroPackage);
      setValue('packageId', '999');
    }
    setIsModalOpen(true);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Get package details
      const selectedPkg = packages.find(p => p.id.toString() === data.packageId);
      
      // Prepare email data
      const emailData = {
        packageTitle: selectedPkg?.title || 'N/A',
        packageLocation: selectedPkg?.location || 'N/A',
        packageDates: selectedPkg?.dates || 'N/A',
        packagePrice: selectedPkg?.price || 'N/A',
        customerName: data.name,
        customerPhone: data.phone,
        customerEmail: data.email,
        customerComments: data.comments || 'Sin comentarios',
      };

      // DEMO MODE - Email functionality disconnected
      console.log('═══════════════════════════════════════════════════════');
      console.log('✅ Solicitud de Reserva Recibida (Modo Demo)');
      console.log('═══════════════════════════════════════════════════════');
      console.log('📦 Paquete:', emailData.packageTitle);
      console.log('📍 Ubicación:', emailData.packageLocation);
      console.log('📅 Fechas:', emailData.packageDates);
      console.log('💰 Precio:', emailData.packagePrice);
      console.log('');
      console.log('👤 Información del Cliente:');
      console.log('   Nombre:', emailData.customerName);
      console.log('   Email:', emailData.customerEmail);
      console.log('   Teléfono:', emailData.customerPhone);
      console.log('   Comentarios:', emailData.customerComments);
      console.log('');
      console.log('ℹ️ Modo Demo Activo - Email Desconectado');
      console.log('   Los datos se capturan correctamente pero no se envían por email.');
      console.log('   Para configurar email con tu nuevo proyecto de Supabase:');
      console.log('   1. Actualiza projectId y publicAnonKey en /utils/supabase/info.tsx');
      console.log('   2. Configura las variables SMTP en tu proyecto de Supabase');
      console.log('   3. Despliega el servidor con: ./deploy-commands.sh');
      console.log('═══════════════════════════════════════════════════════');
      
      // Show success message (demo mode)
      toast.success('¡Solicitud recibida correctamente!', {
        description: 'Los datos se han capturado. (Modo Demo - el email no se envió)',
        duration: 5000,
      });
      
      setIsModalOpen(false);
      reset();
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error al procesar solicitud:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      
      toast.error('Error al enviar la solicitud', {
        description: errorMessage,
        duration: 5000,
      });
      
      setIsSubmitting(false);
    }
  };



  const getIconForPriceDetail = (pkg: Package, detail: string) => {
    if (pkg.isConcert) {
      return Ticket;
    }
    if (detail.toLowerCase().includes('niño') || detail.toLowerCase().includes('niños')) {
      return Baby;
    }
    return Users;
  };

  return (
    <section id="paquetes-section" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="mb-4">
              Paquetes destacados
            </h2>
            <p className="text-gray-600">
              Escapadas, feriados y experiencias internacionales con todo incluido.
            </p>
          </div>
          <button className="text-[#1E88E5] hover:underline hidden lg:block">
            Ver todos →
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {packages.filter(pkg => pkg.id !== 999).map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-3 left-3 bg-white/40 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(pkg.id)}
                    className="absolute top-3 right-3 bg-white/40 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        favorites.has(pkg.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-white'
                      }`}
                    />
                  </button>

                  {/* Reservar Button - appears on hover */}
                  <button
                    onClick={() => handleReserve(pkg)}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#1E88E5] text-white px-6 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#1976D2] hover:scale-105"
                    style={{ fontFamily: 'Coliner-SemiBold, sans-serif' }}
                  >
                    Reservar
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.location}</span>
                  </div>

                  {/* Title */}
                  <h4 className="mb-2">
                    {pkg.title}
                  </h4>

                  {/* Dates */}
                  <div className="flex items-start gap-1 text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-2">{pkg.dates}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Price Details */}
                  {pkg.priceDetails && (
                    <div className="mb-3 space-y-1">
                      {pkg.isConcert ? (
                        <div className="text-sm text-gray-700 flex items-center gap-1">
                          <Ticket className="w-3 h-3 text-gray-400 flex-shrink-0" />
                          <span className="line-clamp-2">{pkg.priceDetails[0]}</span>
                        </div>
                      ) : (
                        pkg.priceDetails.map((detail, index) => {
                          const DetailIcon = getIconForPriceDetail(pkg, detail);
                          return (
                            <div
                              key={index}
                              className="text-sm text-gray-700 flex items-center gap-1"
                            >
                              <DetailIcon className="w-3 h-3 text-gray-400 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}

                  {/* Spacer to push price/rating to bottom */}
                  <div className="flex-grow"></div>

                  {/* Price and Rating */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-500">desde</span>
                        <span className="text-[#1E88E5]" style={{ fontFamily: 'Coliner-SemiBold, sans-serif' }}>
                          {pkg.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm leading-none">
                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                        <span className="leading-none" style={{ fontFamily: 'Coliner-SemiBold, sans-serif' }}>
                          {pkg.rating.toFixed(1)}
                        </span>
                        <span className="text-gray-400 leading-none">({pkg.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            onClick={handleCustomItinerary}
            className="bg-[#1E88E5] text-white px-8 py-3 rounded-full hover:bg-[#1976D2] transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            style={{ fontFamily: 'Coliner-SemiBold, sans-serif' }}
          >
            <Plane className="w-5 h-5" />
            Solicitar itinerario personalizado
          </button>
        </div>
      </div>

      {/* Reservation Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              Solicitar Reserva
            </DialogTitle>
            <DialogDescription>
              Complete el formulario para solicitar información sobre este paquete.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            {/* Package Selection */}
            <div className="space-y-2">
              <Label htmlFor="package">Paquete *</Label>
              <Controller
                name="packageId"
                control={control}
                rules={{ required: 'Por favor selecciona un paquete' }}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                      trigger('packageId');
                    }}
                  >
                    <SelectTrigger id="package" className={errors.packageId ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Seleccionar paquete" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.id.toString()}>
                          {pkg.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.packageId && (
                <p className="text-sm text-red-500">{errors.packageId.message}</p>
              )}
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo *</Label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: 'El nombre es obligatorio',
                  minLength: {
                    value: 2,
                    message: 'El nombre debe tener al menos 2 caracteres',
                  },
                  validate: (value) => {
                    if (value.trim().length === 0) {
                      return 'El nombre es obligatorio';
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <NameInput
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={!!errors.name}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                )}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Móvil *</Label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: 'El número de móvil es obligatorio',
                  validate: (value) => {
                    const digitsOnly = value.replace(/\D/g, '');
                    if (digitsOnly.length !== 10) {
                      return 'El número debe tener 10 dígitos';
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={!!errors.phone}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                )}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'El email es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                }}
                render={({ field }) => (
                  <Input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className={errors.email ? 'border-red-500' : ''}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                  />
                )}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label htmlFor="comments">Comentario</Label>
              <Textarea
                id="comments"
                placeholder="¿Tiene alguna pregunta o solicitud especial?"
                {...register('comments')}
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 justify-end pt-4">
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  reset();
                }}
                className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#1E88E5] text-white rounded-full hover:bg-[#1976D2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Coliner-SemiBold, sans-serif' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
