import { useEffect, useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

export function ServerStatus() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/server/health`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        });

        if (response.ok) {
          setStatus('connected');
          setShowBanner(false);
        } else {
          setStatus('disconnected');
          setShowBanner(true);
        }
      } catch (error) {
        setStatus('disconnected');
        setShowBanner(true);
      }
    };

    checkConnection();
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg shadow-2xl border border-white/20">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Servidor no disponible</h3>
            <p className="text-sm text-white/90 mb-2">
              El sistema de reservas requiere configuración. Para activarlo:
            </p>
            <code className="block bg-black/20 p-2 rounded text-xs mb-2">
              ./deploy-commands.sh
            </code>
            <p className="text-xs text-white/80">
              Lee <span className="font-mono">README_DEPLOYMENT.md</span> para más info.
            </p>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

// Small indicator for development
export function DevServerIndicator() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/server/health`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        });

        if (response.ok) {
          setStatus('connected');
        } else {
          setStatus('disconnected');
        }
      } catch (error) {
        setStatus('disconnected');
      }
    };

    checkConnection();

    // Check every 30 seconds
    const interval = setInterval(checkConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-gray-200 flex items-center gap-2">
        {status === 'checking' && (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
            <span className="text-xs text-gray-600">Verificando...</span>
          </>
        )}
        {status === 'connected' && (
          <>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-xs text-gray-700">Servidor activo</span>
          </>
        )}
        {status === 'disconnected' && (
          <>
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-xs text-gray-700">Servidor inactivo</span>
          </>
        )}
      </div>
    </div>
  );
}
