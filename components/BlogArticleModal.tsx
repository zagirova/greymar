import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { X, Clock, Calendar, User, Share2, ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
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

interface BlogArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function BlogArticleModal({ article, isOpen, onClose, onNext, onPrev }: BlogArticleModalProps) {
  const { t, language } = useLanguage();
  
  if (!article) return null;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = article.title;

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin' | 'copy') => {
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      const message = language === 'es' ? '¡Enlace copiado al portapapeles!' : 'Link copied to clipboard!';
      alert(message);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-[95vw] max-w-[95vw] sm:w-[90vw] sm:max-w-[90vw] lg:w-[50vw] lg:max-w-[50vw] max-h-[90vh] overflow-y-auto p-0">
        {/* Close Button - Fixed Position */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[70] w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all flex items-center justify-center"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Hero Image - Sticky/Fixed */}
        <div className="sticky top-0 z-10 w-full h-64 md:h-96 overflow-hidden relative">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-[#1E88E5] text-white text-xs uppercase tracking-wider rounded-full">
              {article.category}
            </span>
          </div>

          {/* Navigation Buttons - Fixed at bottom of image */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all px-4 py-2 rounded-lg flex items-center gap-2"
              aria-label="Artículo anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#1E88E5]" />
              <span className="text-sm text-[#1E88E5]">Anterior</span>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all px-4 py-2 rounded-lg flex items-center gap-2"
              aria-label="Siguiente artículo"
            >
              <span className="text-sm text-[#1E88E5]">Siguiente</span>
              <ChevronRight className="w-5 h-5 text-[#1E88E5]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Title */}
          <DialogTitle asChild>
            <h1 className="text-gray-900 mb-4">
              {article.title}
            </h1>
          </DialogTitle>

          {/* Description */}
          <DialogDescription className="text-gray-600 mb-6">
            {article.description}
          </DialogDescription>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <User className="w-4 h-4" />
              <span>Grey Martínez</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 mt-12 pt-6 pb-2 border-t border-gray-200">
            <span className="text-gray-600 text-sm mr-2">Compartir este artículo:</span>
            <button
              onClick={() => handleShare('facebook')}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-all flex items-center justify-center"
              aria-label="Compartir en Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#1DA1F2] hover:text-white transition-all flex items-center justify-center"
              aria-label="Compartir en Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#0A66C2] hover:text-white transition-all flex items-center justify-center"
              aria-label="Compartir en LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#1E88E5] hover:text-white transition-all flex items-center justify-center"
              aria-label="Copiar enlace"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}
