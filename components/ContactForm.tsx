"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "error";

const SERVICES = [
  "Traducción editorial y profesional",
  "Maquetación de textos y documentos",
  "Corrección ortotipográfica y de estilo",
  "Otro o todavía no lo tengo claro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(body.error ?? "No se ha podido enviar el mensaje. Escríbeme a hola@cotexto.eu.");
        return;
      }
      form.reset();
      setStatus("ok");
      setMessage("Mensaje enviado. Te responderé lo antes posible.");
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Inténtalo de nuevo o escríbeme a hola@cotexto.eu.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row">
        <label className="field">
          <span className="field__label">Nombre</span>
          <input name="name" type="text" autoComplete="name" required maxLength={120} />
        </label>
        <label className="field">
          <span className="field__label">Correo electrónico</span>
          <input name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
      </div>

      <label className="field">
        <span className="field__label">Servicio</span>
        <select name="service" defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span className="field__label">Mensaje</span>
        <textarea
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={5000}
          placeholder="Tipo de texto, idiomas, extensión aproximada y plazo."
        />
      </label>

      <div className="hp" aria-hidden="true">
        <label>
          No rellenar
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form__footer">
        <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
        <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  );
}
