"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const SAMPLES = [
  { code: "ES", label: "Español", lang: "es", before: "Una buena traducción ", mark: "no se nota", after: "." },
  { code: "EN", label: "Inglés", lang: "en", before: "A good translation ", mark: "goes unnoticed", after: "." },
  { code: "FR", label: "Francés", lang: "fr", before: "Une bonne traduction ", mark: "passe inaperçue", after: "." },
  { code: "DE", label: "Alemán", lang: "de", before: "Eine gute Übersetzung ", mark: "fällt nicht auf", after: "." },
] as const;

export default function ProofCard() {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const sample = SAMPLES[index];

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const step = e.key === "ArrowRight" ? 1 : SAMPLES.length - 1;
    const next = (index + step) % SAMPLES.length;
    setIndex(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="proof-wrap">
      <div className="proof">
        <div className="proof__tabs" role="tablist" aria-label="Idioma de la muestra" onKeyDown={onKeyDown}>
          {SAMPLES.map((s, i) => (
            <button
              key={s.code}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`proof-tab-${s.code}`}
              role="tab"
              type="button"
              aria-selected={i === index}
              aria-controls="proof-panel"
              tabIndex={i === index ? 0 : -1}
              className="proof__tab"
              onClick={() => setIndex(i)}
            >
              <span aria-hidden="true">{s.code}</span>
              <span className="sr-only">{s.label}</span>
            </button>
          ))}
        </div>

        <div
          className="proof__page"
          role="tabpanel"
          id="proof-panel"
          aria-labelledby={`proof-tab-${sample.code}`}
          aria-live="polite"
        >
          <span className="proof__pilcrow" aria-hidden="true">¶</span>
          <p key={sample.code} className="proof__text" lang={sample.lang}>
            {sample.before}
            <span className="proof__mark">{sample.mark}</span>
            {sample.after}
          </p>
        </div>

        <p className="proof__caption">
          {index === 0 ? "Texto original en español" : `Traducido del español al ${sample.label.toLowerCase()}`}
        </p>
      </div>
    </div>
  );
}
