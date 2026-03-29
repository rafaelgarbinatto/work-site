// src/components/HeroMosaic.tsx
import Image from "next/image";

const images = [
  "/portfolio/1.png",
  "/portfolio/2.png",
  "/portfolio/3.png",
  "/portfolio/4.png",
  "/portfolio/5.png",
  "/portfolio/6.png",
];

export default function HeroMosaic({
  title,
  subtitle,
  details,
  ctaText,
  ctaHref,
}: {
  title: string;
  subtitle: string;
  details?: string;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <section className="relative w-full h-[85vh] min-h-[520px] max-h-[900px] overflow-hidden">
      {/* Mosaico 3x2 como backdrop */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-[2px] w-full h-full">
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Projeto ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
              priority={i < 3}
            />
          </div>
        ))}
      </div>

      {/* Overlay gradiente lateral suave — escurece só o terço esquerdo para o texto */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.08) 60%, transparent 100%)' }} />

      {/* Conteúdo — alinhado à esquerda, terço esquerdo */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Headline — curta, impactante */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-5" style={{ color: '#ffffff', textShadow: '0 2px 16px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}>
              {title}
            </h1>

            {/* Tagline — serviços com separador */}
            <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-wide mb-4" style={{ color: '#ffffff', textShadow: '0 2px 12px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.4)' }}>
              {subtitle}
            </p>

            {/* Detalhe — frase de reforço */}
            {details && (
              <p className="text-base md:text-lg font-medium mb-8" style={{ color: '#ffffff', textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}>
                {details}
              </p>
            )}

            {/* CTA */}
            <a
              href={ctaHref}
              className="btn-primary inline-block px-8 py-4 text-lg font-bold"
              style={{ color: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 0 40px rgba(18,216,250,0.25)', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
