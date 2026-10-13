import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ProofCard from "@/components/ProofCard";
import { ArrowIcon, LayoutIcon, ProofIcon, TranslateIcon } from "@/components/Icons";

const EMAIL = "hola@cotexto.eu";
const PHONE_DISPLAY = "+34 614 69 40 57";
const PHONE_HREF = "tel:+34614694057";

const SERVICES = [
  {
    icon: TranslateIcon,
    title: "Traducción editorial y profesional",
    text: "Traducción de textos literarios, ensayos, artículos y documentos para empresas.",
    tags: ["Literatura", "Ensayo", "Artículos", "Documentos de empresa"],
  },
  {
    icon: LayoutIcon,
    title: "Maquetación de textos y documentos",
    text: "Da forma a tus contenidos: maquetación para libros, informes, menús y material corporativo con un diseño limpio, profesional y listo para imprenta o medios digitales.",
    tags: ["Libros", "Informes", "Menús", "Material corporativo"],
  },
  {
    icon: ProofIcon,
    title: "Corrección ortotipográfica y de estilo",
    text: "Revisión de textos para garantizar claridad, coherencia y corrección lingüística.",
    tags: ["Ortotipografía", "Estilo", "Claridad", "Coherencia"],
  },
];

const LANGUAGES = [
  { name: "Inglés", native: "English", lang: "en" },
  { name: "Francés", native: "Français", lang: "fr" },
  { name: "Alemán", native: "Deutsch", lang: "de" },
];

const STEPS = [
  { title: "Consulta", text: "Me cuentas qué necesitas: tipo de texto, idiomas, extensión y plazo." },
  { title: "Presupuesto", text: "Recibes una propuesta clara con el precio y la fecha de entrega." },
  { title: "Trabajo", text: "Traduzco, corrijo o maqueto, y te consulto las dudas que surjan." },
  { title: "Entrega", text: "Te envío el archivo final en el formato acordado." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "cotexto.",
  url: "https://cotexto.eu",
  description:
    "Traducción, corrección y maquetación para el sector editorial y empresarial. Español a inglés, francés y alemán.",
  email: EMAIL,
  telephone: "+34614694057",
  knowsLanguage: ["es", "en", "fr", "de"],
  serviceType: ["Traducción editorial", "Maquetación", "Corrección ortotipográfica y de estilo"],
  sameAs: ["https://bsky.app/profile/cotexto.eu", "https://mastodon.social/@cotexto"],
};

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>

      <header className="header">
        <div className="wrap header__inner">
          <a className="wordmark" href="#inicio" aria-label="cotexto., inicio">
            cotexto<span>.</span>
          </a>
          <nav className="nav" aria-label="Principal">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a className="btn btn--small" href="#contacto">Pedir presupuesto</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <h1>Textos que se leen bien en cualquier idioma.</h1>
              <p className="hero__lead">
                Servicios lingüísticos profesionales: traducción, corrección y maquetación para el
                sector editorial y empresarial.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#contacto">
                  Pedir presupuesto <ArrowIcon />
                </a>
                <a className="btn btn--ghost" href="#servicios">Ver servicios</a>
              </div>
            </div>
            <ProofCard />
          </div>
        </section>

        <section className="section" id="servicios" aria-labelledby="servicios-title">
          <div className="wrap">
            <div className="section__head">
              <h2 id="servicios-title">Servicios</h2>
              <p>Para editoriales, autores y empresas.</p>
            </div>
            <div className="services">
              {SERVICES.map(({ icon: Icon, title, text, tags }) => (
                <article className="service" key={title}>
                  <div className="service__title">
                    <Icon className="service__icon" />
                    <h3>{title}</h3>
                  </div>
                  <div className="service__body">
                    <p>{text}</p>
                    <ul className="tags" aria-label="Incluye">
                      {tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--night" aria-labelledby="idiomas-title">
          <div className="wrap languages">
            <h2 id="idiomas-title">Del español a tres idiomas.</h2>
            <ul className="languages__list">
              {LANGUAGES.map((l) => (
                <li key={l.lang}>
                  <span className="languages__name">{l.name}</span>
                  <span className="languages__native" lang={l.lang}>{l.native}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="proceso" aria-labelledby="proceso-title">
          <div className="wrap">
            <div className="section__head">
              <h2 id="proceso-title">Cómo trabajo</h2>
              <p>Un proceso sencillo, de la primera consulta a la entrega.</p>
            </div>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="steps__n" aria-hidden="true">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--sheet" id="sobre-mi" aria-labelledby="sobre-title">
          <div className="wrap about">
            <div className="about__photo">
              <Image
                src="https://cotexto.eu/assets/images/image05.jpg?v=865c967c"
                alt="Juan, traductor y corrector editorial"
                fill
                sizes="(max-width: 860px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="about__copy">
              <h2 id="sobre-title">Sobre mí</h2>
              <p className="about__lead">
                Hola, me llamo Juan y soy traductor y corrector editorial.
              </p>
              <dl className="facts">
                <div>
                  <dt>Formación</dt>
                  <dd>Estudios de filología</dd>
                </div>
                <div>
                  <dt>Posgrado</dt>
                  <dd>Máster universitario en traducción editorial</dd>
                </div>
                <div>
                  <dt>Experiencia</dt>
                  <dd>Corrección ortotipográfica y maquetación</dd>
                </div>
                <div>
                  <dt>Especialidad</dt>
                  <dd>Servicios lingüísticos para editoriales, autores y empresas</dd>
                </div>
              </dl>
              <a className="btn btn--primary" href="#contacto">Contacto</a>
            </div>
          </div>
        </section>

        <section className="section" id="contacto" aria-labelledby="contacto-title">
          <div className="wrap contact">
            <div className="contact__info">
              <h2 id="contacto-title">Contacto</h2>
              <p className="contact__lead">
                Cuéntame qué texto tienes entre manos y te respondo con un presupuesto.
              </p>
              <ul className="channels">
                <li>
                  <span>Correo</span>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <span>Teléfono</span>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </li>
                <li>
                  <span>WhatsApp</span>
                  <a href="https://wa.me/34614694057" rel="noopener noreferrer" target="_blank">
                    Escribir por WhatsApp
                  </a>
                </li>
                <li>
                  <span>Bluesky</span>
                  <a href="https://bsky.app/profile/cotexto.eu" rel="noopener noreferrer" target="_blank">
                    @cotexto.eu
                  </a>
                </li>
                <li>
                  <span>Mastodon</span>
                  <a href="https://mastodon.social/@cotexto" rel="me noopener noreferrer" target="_blank">
                    @cotexto@mastodon.social
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span className="wordmark wordmark--small">
            cotexto<span>.</span>
          </span>
          <p>© {new Date().getFullYear()} cotexto. Traducción, corrección y maquetación.</p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
