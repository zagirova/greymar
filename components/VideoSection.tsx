import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { useLanguage } from '../utils/translations';

export function VideoSection() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if API is already loaded
    if ((window as any).YT && (window as any).YT.Player) {
      initializePlayer();
      return;
    }

    // Load YouTube IFrame API if not already loaded
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  // Hide YouTube UI elements only when player is ready
  useEffect(() => {
    if (!isReady) return;

    const hideYouTubeUI = () => {
      try {
        const buttons = document.querySelectorAll('.ytp-large-play-button, .ytp-button, button[class*="ytp"]');
        buttons.forEach(button => {
          (button as HTMLElement).style.display = 'none';
          (button as HTMLElement).style.visibility = 'hidden';
          (button as HTMLElement).style.opacity = '0';
        });
      } catch (e) {
        // Ignore errors
      }
    };

    const interval = setInterval(hideYouTubeUI, 100);
    
    return () => clearInterval(interval);
  }, [isReady]);

  const initializePlayer = () => {
    playerRef.current = new (window as any).YT.Player('youtube-player', {
      videoId: 'UimOC2pV0us',
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        loop: 1,
        playlist: 'UimOC2pV0us',
        mute: 1,
        autohide: 1,
        cc_load_policy: 0,
        playsinline: 1,
        origin: window.location.origin,
      },
      events: {
        onReady: (event: any) => {
          try {
            setIsReady(true);
            // Pause immediately to remove the big play button - check if player is ready first
            if (event.target && typeof event.target.pauseVideo === 'function') {
              setTimeout(() => {
                try {
                  if (event.target && typeof event.target.pauseVideo === 'function') {
                    event.target.pauseVideo();
                  }
                  if (event.target && typeof event.target.unMute === 'function') {
                    event.target.unMute();
                  }
                } catch (e) {
                  console.warn('YouTube player API call failed:', e);
                }
              }, 100);
            }
          } catch (e) {
            console.warn('YouTube player onReady error:', e);
          }
        },
        onStateChange: (event: any) => {
          try {
            if (event.data === (window as any).YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === (window as any).YT.PlayerState.PAUSED || event.data === (window as any).YT.PlayerState.ENDED) {
              setIsPlaying(false);
            }
          } catch (e) {
            console.warn('YouTube player onStateChange error:', e);
          }
        },
      },
    });
  };

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;
    
    try {
      if (isPlaying) {
        if (typeof playerRef.current.pauseVideo === 'function') {
          playerRef.current.pauseVideo();
        }
      } else {
        if (typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
        }
      }
    } catch (e) {
      console.warn('YouTube player toggle error:', e);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Video Container with Aspect Ratio - More compact on mobile */}
      <div className="relative w-full" style={{ paddingBottom: '40%' }}>
        {/* YouTube Player */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            id="youtube-player"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100%',
              minWidth: '177.77vh',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Full overlay to block YouTube's native UI completely */}
          <div 
            className="absolute inset-0 bg-transparent cursor-default"
            style={{ zIndex: 5 }}
          />
          {/* Overlay to hide YouTube UI elements */}
          <style>{`
            #youtube-player iframe {
              width: 100% !important;
              height: 100% !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              pointer-events: none !important;
            }
            .ytp-large-play-button,
            .ytp-large-play-button-red-bg,
            .ytp-title,
            .ytp-title-text,
            .ytp-title-channel,
            .ytp-chrome-top,
            .ytp-chrome-top-buttons,
            .ytp-pause-overlay,
            .ytp-watermark,
            .ytp-youtube-button,
            .ytp-show-cards-title,
            .ytp-iv-video-content,
            .ytp-button,
            .ytp-cued-thumbnail-overlay {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
              width: 0 !important;
              height: 0 !important;
            }
            .html5-video-container,
            .html5-video-container video {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
            }
            /* Aggressively hide all YouTube buttons */
            .ytp-button[aria-label],
            button.ytp-button,
            button.ytp-large-play-button {
              display: none !important;
            }
          `}</style>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          {/* Corner Decorations - Smaller on mobile, full size on desktop */}
          {/* Top Left Corner */}
          <div className="absolute top-4 left-4 md:top-16 md:left-16 lg:top-24 lg:left-24">
            <svg
              width="200"
              height="80"
              viewBox="0 0 200 80"
              fill="none"
              className="text-white/60 md:hidden"
            >
              <line x1="0" y1="80" x2="0" y2="0" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="0" x2="200" y2="0" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg
              width="400"
              height="160"
              viewBox="0 0 400 160"
              fill="none"
              className="text-white/60 hidden md:block"
            >
              <line x1="0" y1="160" x2="0" y2="0" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="0" x2="400" y2="0" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="absolute top-2 left-2 md:top-4 md:left-4 text-white/90 tracking-widest text-xs md:text-lg">
              {t('video.corner1')}
            </div>
          </div>

          {/* Top Right Corner */}
          <div className="absolute top-4 right-4 md:top-16 md:right-16 lg:top-24 lg:right-24">
            <svg
              width="200"
              height="80"
              viewBox="0 0 200 80"
              fill="none"
              className="text-white/60 md:hidden"
            >
              <line x1="200" y1="0" x2="200" y2="80" stroke="currentColor" strokeWidth="1" />
              <line x1="200" y1="0" x2="0" y2="0" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg
              width="400"
              height="160"
              viewBox="0 0 400 160"
              fill="none"
              className="text-white/60 hidden md:block"
            >
              <line x1="400" y1="0" x2="400" y2="160" stroke="currentColor" strokeWidth="1.5" />
              <line x1="400" y1="0" x2="0" y2="0" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Bottom Left Corner */}
          <div className="absolute bottom-4 left-4 md:bottom-16 md:left-16 lg:bottom-24 lg:left-24">
            <svg
              width="200"
              height="80"
              viewBox="0 0 200 80"
              fill="none"
              className="text-white/60 md:hidden"
            >
              <line x1="0" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg
              width="400"
              height="160"
              viewBox="0 0 400 160"
              fill="none"
              className="text-white/60 hidden md:block"
            >
              <line x1="0" y1="0" x2="0" y2="160" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="160" x2="400" y2="160" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-white/90 tracking-widest flex items-center gap-1 md:gap-2 text-xs md:text-lg">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-red-600 rounded-full animate-pulse"></span>
              {t('video.corner2')}
            </div>
          </div>

          {/* Bottom Right Corner */}
          <div className="absolute bottom-4 right-4 md:bottom-16 md:right-16 lg:bottom-24 lg:right-24">
            <svg
              width="200"
              height="80"
              viewBox="0 0 200 80"
              fill="none"
              className="text-white/60 md:hidden"
            >
              <line x1="200" y1="80" x2="200" y2="0" stroke="currentColor" strokeWidth="1" />
              <line x1="200" y1="80" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg
              width="400"
              height="160"
              viewBox="0 0 400 160"
              fill="none"
              className="text-white/60 hidden md:block"
            >
              <line x1="400" y1="160" x2="400" y2="0" stroke="currentColor" strokeWidth="1.5" />
              <line x1="400" y1="160" x2="0" y2="160" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-white/90 tracking-widest text-xs md:text-lg">
              {t('video.corner3')}
            </div>
          </div>

          {/* Center Content */}
          <div className="absolute inset-0 px-4 md:px-6 flex items-center justify-center">
            <div className="flex flex-col items-center">
              {/* Title and Subtitle - Hidden on mobile, visible on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  {t('video.title')}
                </h2>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl whitespace-pre-line">
                  {t('video.subtitle')}
                </p>
              </motion.div>

              {/* Play/Pause Button - Center */}
              <motion.button
                onClick={togglePlay}
                className="pointer-events-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
                ) : (
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
    </section>
  );
}
