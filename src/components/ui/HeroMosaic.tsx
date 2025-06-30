// src/components/MosaicBanner.tsx
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
  bannerImage,
}: {
  title: string;
  subtitle: string;
  details?: string;
  ctaText: string;
  ctaHref: string;
  bannerImage?: string;
}) {
  return (
    <section
      className={
        bannerImage
          ? "relative w-full min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden p-0 m-0"
          : "relative w-full h-[420px] md:h-[540px] flex items-center justify-center overflow-hidden"
      }
      style={bannerImage ? { minHeight: 'calc(100vh - 72px)' } : {}}
    >
      {/* Se bannerImage for fornecida, exibe como fundo único */}
      {bannerImage ? (
        <>
          <Image
            src={bannerImage}
            alt="Banner principal"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay degradê na base, não cobrindo o texto */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 w-full h-full">
          {images.map((src, i) => (
            <div key={i} className="relative w-full h-full min-h-[140px]">
              <Image
                src={src}
                alt={`Projeto ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 33vw, (max-width: 2400px) 20vw, 15vw"
                className="flex-1 object-cover h-full"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
            </div>
          ))}
        </div>
      )}
      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-3xl px-4"
        style={bannerImage ? { minHeight: '60vh', justifyContent: 'center' } : {}}>
        {bannerImage ? (
          <div className="inline-block bg-[#FDF6EC]/95 rounded-2xl px-8 py-8 md:px-16 md:py-10 shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#23272F] mb-3 drop-shadow-[0_2px_8px_rgba(160,132,232,0.10)]">{title}</h1>
            <p className="text-2xl md:text-3xl mb-2 text-[#3A3A3A] font-semibold drop-shadow-[0_1px_4px_rgba(160,132,232,0.10)]">{subtitle}</p>
            {details && (
              <p className="text-lg mb-6 text-[#555] drop-shadow-[0_1px_2px_rgba(160,132,232,0.08)]">{details}</p>
            )}
            <a
              href={ctaHref}
              className="btn-primary inline-block mt-2"
            >
              {ctaText}
            </a>
          </div>
        ) : (
          <>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-3">{title}</h1>
            <p className="text-2xl md:text-3xl mb-2 text-white font-semibold drop-shadow-xl">{subtitle}</p>
            {details && (
              <p className="text-lg mb-6 text-gray-200 drop-shadow">{details}</p>
            )}
            <a
              href={ctaHref}
              className="inline-block mt-2 px-7 py-3 rounded-full bg-gradient-to-r from-sky-400 to-pink-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition"
            >
              {ctaText}
            </a>
          </>
        )}
      </div>
    </section>
  );
}
