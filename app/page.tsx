import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ProofCard from "@/components/ProofCard";
import {
  ArrowIcon,
  BlueskyIcon,
  BookIcon,
  ExamIcon,
  LayoutIcon,
  MastodonIcon,
  MonitorIcon,
  ProofIcon,
  TranslateIcon,
} from "@/components/Icons";

const EMAIL = "hola@cotexto.eu";
const PHONE_DISPLAY = "+34 614 69 40 57";
const PHONE_HREF = "tel:+34614694057";
const ADDRESS_LINE_1 = "Av. Juan Carlos I, 32 - Galerías Gaudí";
const ADDRESS_LINE_2 = "30800 Lorca, Murcia";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Av. Juan Carlos I, 32, Galerías Gaudí, 30800 Lorca, Murcia",
)}`;

const SOCIALS = [
  { name: "Bluesky", handle: "@cotexto.eu", href: "https://bsky.app/profile/cotexto.eu", Icon: BlueskyIcon, rel: "noopener noreferrer" },
  { name: "Mastodon", handle: "@cotexto@mastodon.social", href: "https://mastodon.social/@cotexto", Icon: MastodonIcon, rel: "me noopener noreferrer" },
];

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
  { native: "English", lang: "en" },
  { native: "Français", lang: "fr" },
  { native: "Deutsch", lang: "de" },
];

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

const COURSES = [
  { name: "Español para extranjeros", lang: "es", levels: 0, note: "Para estudiantes extranjeros" },
  { name: "Inglés", lang: "es", levels: 6, note: "Todos los niveles, de A1 a C2" },
  { name: "Francés", lang: "es", levels: 6, note: "Todos los niveles, de A1 a C2" },
  { name: "Alemán", lang: "es", levels: 1, note: "Desde cero (A1)" },
  { name: "Japonés", lang: "es", levels: 1, note: "Desde cero (A1)" },
];

const ACADEMY_EXTRAS = [
  { icon: ExamIcon, title: "Preparación de exámenes oficiales", text: "Para las pruebas oficiales de idiomas." },
  { icon: BookIcon, title: "Acompañamiento escolar", text: "Apoyo y seguimiento para estudiantes." },
  { icon: MonitorIcon, title: "Presencial y online", text: "Elige entre clases en persona o a distancia." },
];

const STEPS = [
  { title: "Consulta", text: "Me cuentas qué necesitas: tipo de texto, idiomas, extensión y plazo." },
  { title: "Presupuesto", text: "Recibes una propuesta clara con el precio y la fecha de entrega." },
  { title: "Trabajo", text: "Traduzco, corrijo o maqueto, y te consulto las dudas que surjan." },
  { title: "Entrega", text: "Te envío el archivo final en el formato acordado." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "EducationalOrganization"],
  name: "cotexto.",
  url: "https://cotexto.eu",
  description:
    "Traducción en ambos sentidos (español, inglés, francés y alemán), corrección y maquetación para el sector editorial y empresarial. Academia de idiomas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Juan Carlos I, 32 - Galerías Gaudí",
    postalCode: "30800",
    addressLocality: "Lorca",
    addressRegion: "Murcia",
    addressCountry: "ES",
  },
  email: EMAIL,
  telephone: "+34614694057",
  knowsLanguage: ["es", "en", "fr", "de", "ja"],
  serviceType: ["Traducción editorial", "Maquetación", "Corrección ortotipográfica y de estilo", "Enseñanza de idiomas"],
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
            <a href="#academia">Academia</a>
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
                sector editorial y empresarial. Y una academia para aprender idiomas.
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
            <div>
              <h2 id="idiomas-title">Traducción en los dos sentidos.</h2>
              <p className="languages__lead">
                Del español al inglés, al francés y al alemán, y de esos tres idiomas al español.
              </p>
            </div>
            <ul className="languages__list">
              {LANGUAGES.map((l) => (
                <li key={l.lang}>
                  <span className="languages__pair">
                    <span lang="es">Español</span>
                    <TranslateIcon className="languages__swap" />
                    <span lang={l.lang}>{l.native}</span>
                  </span>
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

        <section className="section section--black" id="academia" aria-labelledby="academia-title">
          <div className="wrap">
            <div className="section__head">
              <h2 id="academia-title">Academia de idiomas</h2>
              <p>Enseñanza de español, inglés, francés, alemán y japonés.</p>
            </div>

            <ul className="courses">
              {COURSES.map((c) => (
                <li className="course" key={c.name}>
                  <h3 className="course__name">{c.name}</h3>
                  <div className="levels" aria-hidden="true">
                    {c.levels > 0 &&
                      LEVELS.map((lv, i) => (
                        <span key={lv} className={i < c.levels ? "on" : undefined}>
                          {lv}
                        </span>
                      ))}
                  </div>
                  <p className="course__note">{c.note}</p>
                </li>
              ))}
            </ul>

            <ul className="extras">
              {ACADEMY_EXTRAS.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <Icon className="extras__icon" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>

            <a className="btn btn--primary academy__cta" href="#contacto">
              Consultar clases <ArrowIcon />
            </a>
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
                  <span>Dirección</span>
                  <a href={MAPS_HREF} rel="noopener noreferrer" target="_blank">
                    <address>
                      {ADDRESS_LINE_1}
                      <br />
                      {ADDRESS_LINE_2}
                    </address>
                  </a>
                </li>
              </ul>
              <ul className="social">
                {SOCIALS.map(({ name, handle, href, Icon, rel }) => (
                  <li key={name}>
                    <a href={href} rel={rel} target="_blank">
                      <Icon />
                      <span>
                        <span className="sr-only">{name} </span>
                        {handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <div className="footer__brand">
            <span className="wordmark wordmark--small">
              cotexto<span>.</span>
            </span>
            <address>
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
            </address>
          </div>
          <div className="footer__contact">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <ul className="footer__social">
              {SOCIALS.map(({ name, href, Icon, rel }) => (
                <li key={name}>
                  <a href={href} rel={rel} target="_blank" aria-label={name}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="footer__legal">© {new Date().getFullYear()} cotexto.</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
