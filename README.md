# 🌴 GreyMar Travel - Sitio Web

Sitio web de agencia de viajes con diseño moderno y sistema de reservas.

## ✅ Estado Actual

**El sitio web está 100% funcional.**

### Características implementadas:

- ✅ Header con logo centrado y menú dividido
- ✅ Hero section con texto adaptativo inteligente
- ✅ Sección de confianza con badges
- ✅ Sección "Siempre" con promesas de servicio
- ✅ Galería de experiencias
- ✅ Video de YouTube embebido
- ✅ 8 paquetes destacados con sistema de favoritos
- ✅ Modal de reserva con formulario completo
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Animaciones y efectos modernos

### Sistema de Email:

El sistema de reservas funciona actualmente en **"Modo Demo"**:
- El formulario funciona perfectamente
- La información se captura y se muestra en la consola
- Los emails NO se envían (aún)

**Para activar el envío real de emails:** Lee `HOW_TO_ENABLE_EMAIL.md`

## 🚀 Uso

Simplemente abre la aplicación en tu navegador. Todo funciona out-of-the-box.

## 📧 Activar Sistema de Email (Opcional)

Si deseas que las reservas se envíen por email:

```bash
./deploy-commands.sh
```

Esto desplegará el servidor backend en Supabase. **Es completamente opcional** - el sitio funciona perfectamente sin esto.

## 📁 Estructura del Proyecto

```
├── App.tsx                    # Componente principal
├── components/                # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PopularPackages.tsx
│   └── ...
├── supabase/functions/server/ # Backend (Edge Function)
└── styles/                    # Estilos globales
```

## 📚 Documentación

- **`HOW_TO_ENABLE_EMAIL.md`** - Cómo activar el sistema de email
- **`README_DEPLOYMENT.md`** - Guía completa de deployment
- **`STATUS.md`** - Estado detallado del proyecto
- **`🚀_ACTION_REQUIRED.md`** - Pasos opcionales siguientes

## 🎨 Tecnologías

- React
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Supabase (backend opcional)
- Nodemailer (email opcional)

## 🔧 Desarrollo

El sitio está listo para usar. No requiere configuración adicional a menos que quieras activar el envío de emails.

## 💡 Notas

- El "Modo Demo" es completamente normal y esperado
- No es un error que los emails no se envíen sin deployment
- Puedes usar el sitio indefinidamente en modo demo
- El deployment del servidor es opcional y toma ~2 minutos

## 🆘 Soporte

Si ves mensajes en la consola sobre el servidor, es normal. Lee `HOW_TO_ENABLE_EMAIL.md` si quieres activar esa funcionalidad.

---

**Desarrollado para GreyMar Solutions**
