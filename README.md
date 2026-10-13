# cotexto.

Landing page de cotexto.eu (Next.js 16, App Router, TypeScript). Sin dependencias de UI: CSS propio y tipografías autoalojadas (Literata e Instrument Sans vía Fontsource, sin peticiones a Google Fonts).

## Desarrollo

```bash
npm install
npm run dev
```

## Desplegar en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En Vercel: Add New → Project → importa el repositorio (Framework: Next.js, sin cambiar nada).
3. En Settings → Domains añade `cotexto.eu`.

## Formulario de contacto

El formulario envía el mensaje con [Resend](https://resend.com). Define estas variables en Vercel (Settings → Environment Variables); hay un ejemplo en `.env.example`:

- `RESEND_API_KEY`
- `CONTACT_FROM` (remitente de un dominio verificado en Resend)
- `CONTACT_TO` (por defecto `hola@cotexto.eu`)

Sin ellas, el formulario avisa al visitante de que escriba por correo y el resto de la web funciona igual.

## Qué revisar

- Los textos breves de la academia que no vienen de tu lista (las frases bajo "Preparación de exámenes oficiales", "Acompañamiento escolar" y "Presencial y online") son provisionales: edítalos en `ACADEMY_EXTRAS` de `app/page.tsx`.
- Los cursos y niveles de la academia están en `COURSES` (`app/page.tsx`).
- La sección "Cómo trabajo" (`STEPS` en `app/page.tsx`) es una propuesta: ajústala a tu forma real de trabajar o elimínala.
- La foto de "Sobre mí" se carga desde la web actual. Cuando la migres, guárdala en `public/` y cambia el `src` de `<Image>`.
- LinkedIn no aparece porque en la web actual el enlace estaba vacío; añádelo en la sección Contacto cuando tengas la URL.
- La imagen para redes sociales (`card.jpg`) también se referencia desde la web actual en `app/layout.tsx`.
