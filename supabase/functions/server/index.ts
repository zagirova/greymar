import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";

const app = new Hono();

app.use("/*", cors({ origin: "*" }));

app.get("/health", (c) => {
  return c.json({ status: "ok", time: new Date().toISOString() });
});

app.post("/send-reservation-email", async (c) => {
  try {
    console.log('=== Email request received ===');
    const data = await c.req.json();
    console.log('Data:', JSON.stringify(data));
    
    const SMTP_HOST = Deno.env.get('SMTP_HOST');
    const SMTP_PORT = Deno.env.get('SMTP_PORT');
    const SMTP_USER = Deno.env.get('SMTP_USER');
    const SMTP_PASS = Deno.env.get('SMTP_PASS');
    const SMTP_TO = Deno.env.get('SMTP_TO_EMAIL');
    
    console.log('SMTP Config:', { host: SMTP_HOST, port: SMTP_PORT, user: SMTP_USER, to: SMTP_TO, hasPass: !!SMTP_PASS });
    
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
      return c.json({ error: 'SMTP config missing' }, 500);
    }
    
    const port = parseInt(SMTP_PORT || '465');
    const isSecure = port === 465;
    
    const nodemailer = await import('npm:nodemailer@6.9.7');
    const transporter = nodemailer.default.createTransport({
      host: SMTP_HOST,
      port: port,
      secure: isSecure,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: { rejectUnauthorized: false },
      logger: true,
      debug: true
    });
    
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified!');
    
    console.log('Sending email...');
    await transporter.sendMail({
      from: SMTP_USER,
      to: SMTP_TO,
      replyTo: data.customerEmail,
      subject: `Reserva: ${data.packageTitle}`,
      html: `<h1>Reserva</h1><p>Nombre: ${data.customerName}<br>Email: ${data.customerEmail}<br>Tel: ${data.customerPhone}</p>`
    });
    
    console.log('Email sent successfully');
    return c.json({ success: true });
  } catch (error) {
    console.error('ERROR:', error);
    return c.json({ 
      error: 'Failed to send email', 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

Deno.serve(app.fetch);
