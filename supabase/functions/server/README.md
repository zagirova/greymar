# Edge Function: server

Este es el servidor backend para GreyMar Travel.

## Endpoints

### GET /
Información del servidor

### GET /health
Health check

### POST /send-reservation-email
Envía emails de reserva

## Deployment

```bash
supabase functions deploy server
```

## Variables de Entorno Requeridas

Configura estos secrets en Supabase Dashboard:

- `SMTP_HOST` - Servidor SMTP (ej: smtp.gmail.com)
- `SMTP_PORT` - Puerto SMTP (ej: 465)
- `SMTP_USER` - Usuario SMTP (tu email)
- `SMTP_PASS` - Contraseña SMTP (App Password)
- `SMTP_TO_EMAIL` - Email destino para reservas

## Test Local

```bash
supabase functions serve server
```

Luego en otra terminal:

```bash
curl http://localhost:54321/functions/v1/server/health
```

## Logs

```bash
supabase functions logs server --follow
```
