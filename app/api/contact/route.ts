import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  // Campo trampa: los bots lo rellenan, las personas no lo ven.
  if (clean(data.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(data.name, 120).replace(/[\r\n]+/g, " ");
  const email = clean(data.email, 200);
  const service = clean(data.service, 80).replace(/[\r\n]+/g, " ");
  const message = clean(data.message, 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Revisa el nombre, el correo y el mensaje (mínimo 10 caracteres)." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO ?? "hola@cotexto.eu";

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "El formulario aún no está configurado. Escríbeme a hola@cotexto.eu." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Nuevo mensaje de ${name} (${service || "sin servicio"})`,
      text: `Nombre: ${name}\nCorreo: ${email}\nServicio: ${service}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "No se ha podido enviar el mensaje. Escríbeme a hola@cotexto.eu." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
