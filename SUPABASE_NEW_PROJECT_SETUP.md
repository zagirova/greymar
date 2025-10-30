# Setting Up Email Functionality with Your New Supabase Project

The email sending functionality has been **completely disconnected** from the previous Supabase project. Follow these instructions to set it up with your new project.

## Step 1: Update Supabase Project Credentials

1. Open `/utils/supabase/info.tsx`
2. Replace the `projectId` and `publicAnonKey` with your new Supabase project credentials:

```typescript
// Get these from your Supabase project settings:
// https://app.supabase.com/project/YOUR_PROJECT/settings/api

export const projectId = 'YOUR_NEW_PROJECT_ID';
export const publicAnonKey = 'YOUR_NEW_ANON_KEY';
```

## Step 2: Configure SMTP Settings in Supabase

1. Go to your Supabase project dashboard
2. Navigate to: **Settings → Secrets**
3. Add the following environment variables:

```
SMTP_HOST=smtp.gmail.com (or your SMTP provider)
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_TO_EMAIL=destination-email@greymar.com
```

**Note for Gmail users:**
- You need to create an "App Password" (not your regular password)
- Go to: Google Account → Security → 2-Step Verification → App passwords
- Generate a new app password and use that for `SMTP_PASS`

## Step 3: Verify Server Code

The server code is already configured in `/supabase/functions/server/index.tsx`. It includes the email sending route at:

```
POST /make-server-1dd337e1/send-reservation-email
```

No changes needed here unless you want to customize the email template.

## Step 4: Deploy the Server

Run the deployment script:

```bash
./deploy-commands.sh
```

Or manually deploy with:

```bash
npx supabase functions deploy server --project-ref YOUR_PROJECT_ID
```

## Step 5: Re-enable Email in Frontend

Once deployed, update `/components/PopularPackages.tsx`:

Replace the demo mode code (around line 260) with the actual fetch call:

```typescript
// Send reservation email via Supabase server
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-1dd337e1/send-reservation-email`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
    },
    body: JSON.stringify(emailData),
  }
);

if (!response.ok) {
  const errorData = await response.json();
  throw new Error(errorData.error || 'Error al enviar email');
}

const result = await response.json();
console.log('Email sent successfully:', result);

toast.success('¡Solicitud enviada con éxito!', {
  description: 'Nos pondremos en contacto contigo pronto.',
});

setIsModalOpen(false);
reset();
setIsSubmitting(false);
```

Don't forget to re-import at the top of the file:
```typescript
import { projectId, publicAnonKey } from '../utils/supabase/info';
```

## Step 6: Test the Integration

1. Fill out a package reservation form
2. Check the browser console for logs
3. Verify the email arrives at your destination inbox
4. Check Supabase logs: **Functions → server → Logs**

## Troubleshooting

### Email not sending?

1. **Check Supabase Function Logs:**
   - Go to: Functions → server → Logs
   - Look for error messages

2. **Verify SMTP credentials:**
   - Test with a simple SMTP tool first
   - Make sure app password is correct (for Gmail)

3. **Check CORS:**
   - The server includes CORS headers
   - Verify your domain is allowed

4. **Network issues:**
   - Open browser DevTools → Network tab
   - Check if the request reaches the server
   - Look at response status and body

### Common Errors:

- **401 Unauthorized:** Wrong `publicAnonKey`
- **404 Not Found:** Server not deployed or wrong URL
- **500 Server Error:** Check function logs for SMTP issues
- **535 Authentication failed:** Wrong SMTP credentials

## Current Status

✅ Email functionality is **disconnected** and running in **Demo Mode**
📝 Form submissions are logged to console only
📧 No actual emails are sent until you complete the setup above

## Questions?

Check the server code in: `/supabase/functions/server/index.tsx`
Review the email route handler starting around line 50.
