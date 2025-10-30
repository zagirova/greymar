import { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';

export function DemoModeNotice() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Check if user has seen the notice
    const hasSeenNotice = localStorage.getItem('greymar-demo-notice-seen');
    if (!hasSeenNotice) {
      setShowNotice(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('greymar-demo-notice-seen', 'true');
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-blue-900 mb-1">
              Modo Demo
            </h3>
            <p className="text-sm text-blue-700 mb-2">
              El sistema de reservas funciona perfectamente, pero los emails no se envían aún.
            </p>
            <p className="text-xs text-blue-600">
              Para activar el envío real: <code className="bg-blue-100 px-1 rounded">./deploy-commands.sh</code>
            </p>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 text-blue-400 hover:text-blue-600 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
