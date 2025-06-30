"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroMosaic from "@/components/ui/HeroMosaic";
import React, { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  const openModal = (img: string) => {
    setModalImg(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-workpoa.avif"
            width={48}
            height={48}
            alt="Logo Work PoA"
            className="w-10 h-8"
            priority
          />
          <span className="text-2xl font-extrabold tracking-wide text-[#1a1a1a]">Work PoA</span>
        </div>
        <div className="hidden md:flex space-x-8 text-base font-medium text-[#222]">
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="md:hidden">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <HeroMosaic 
        title="Projeto de Interiores"
        subtitle="Por apenas R$699,00"
        details="até 20m² por ambiente"
        ctaText="Peça seu projeto agora!"
        ctaHref="#contato"
        bannerImage="/portfolio/banner.png"
      />

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 gradient-text">
              Nossos Serviços
            </h2>
            <p className="text-lg text-[#222] max-w-2xl mx-auto">
              Soluções completas em engenharia, reformas e projetos de interiores
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Projetos em 3D (renders)",
                desc: "Visualize seu ambiente antes da obra com renders realistas.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Projetos de Interiores",
                desc: "Layouts funcionais, estética e ergonomia para seu espaço.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Design de Interiores",
                desc: "Escolha de móveis, acabamentos, iluminação e decoração.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                ),
              },
              {
                title: "Laudos Técnicos e Vistorias",
                desc: "Conformidade e segurança para empresas e residências.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Consultoria",
                desc: "Assessoria personalizada para reformas ou compra de imóveis.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Projetos Complementares",
                desc: "Civil, elétrica, hidráulica e outros projetos técnicos.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
              },
              {
                title: "Obras e Reformas",
                desc: "Execução do projeto à entrega com equipe especializada.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                ),
              },
              {
                title: "Acompanhamento de Obra",
                desc: "Supervisão técnica e gestão das etapas da obra.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
              },
            ].map((serv, i) => (
              <div key={i} className="card-gradient-border p-6 hover-lift">
                <div className="h-12 w-12 gradient-primary rounded-lg mb-4 flex items-center justify-center">{serv.icon}</div>
                <h3 className="font-bold text-lg mb-2">{serv.title}</h3>
                <p className="text-gray-600 text-sm">{serv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 gradient-text">
              Portfólio
            </h2>
            <p className="text-lg text-[#222]">Conheça alguns dos nossos projetos realizados</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift bg-white card-gradient-border cursor-pointer"
                onClick={() => openModal(`/portfolio/${n}.png`)}
              >
                <Image
                  src={`/portfolio/${n}.png`}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={`Projeto real de interiores ${n}`}
                  quality={90}
                />
                <div className="absolute bottom-0 left-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-[#FDF6EC]/35 rounded-xl px-4 py-2 shadow-md backdrop-blur-sm w-full max-w-xs flex flex-col items-start">
                    <h3 className="font-bold text-base text-[#23272F] mb-0.5">Projeto {n}</h3>
                    <p className="text-xs text-[#555] leading-tight">Design de Interiores</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DE IMAGEM DO PORTFÓLIO */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full mx-4 aspect-[3/2]" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
              onClick={closeModal}
              aria-label="Fechar"
            >
              &times;
            </button>
            <Image
              src={modalImg ?? ''}
              alt="Projeto ampliado"
              fill
              className="rounded-2xl shadow-2xl border-4 border-white object-contain"
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 90vw, 60vw"
              priority
            />
          </div>
        </div>
      )}

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 gradient-text">
            Sobre a Work
          </h2>
          <div className="prose prose-lg mx-auto text-[#222]">
            <p className="text-lg leading-relaxed mb-6">
              A <strong className="gradient-text">Work PoA</strong> é uma empresa especializada em engenharia, reformas e projetos de interiores, comprometida com a excelência e inovação em cada projeto.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Atuamos com <strong>seriedade, qualidade e responsabilidade</strong>, atendendo tanto empresas quanto pessoas físicas, do conceito inicial à entrega final. Nossa equipe especializada oferece acompanhamento técnico completo, garantindo que cada detalhe seja executado com perfeição.
            </p>
            <p className="text-lg leading-relaxed">
              Com anos de experiência no mercado, construímos nossa reputação baseada na confiança dos nossos clientes e na qualidade superior dos nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 gradient-text">
              Fale com a gente
            </h2>
            <p className="text-lg text-[#222]">Entre em contato e vamos transformar seu projeto em realidade</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-gradient-border p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  {/* Ícone WhatsApp oficial completo */}
                  <svg className="w-8 h-8 align-middle" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <circle cx="16" cy="16" r="16" fill="#25D366" />
                      <path d="M16 7.5c-4.7 0-8.5 3.7-8.5 8.3 0 1.5.4 2.9 1.1 4.1L7 25l5.3-1.4c1.2.6 2.5.9 3.7.9 4.7 0 8.5-3.7 8.5-8.3S20.7 7.5 16 7.5zm0 14.7c-1.2 0-2.3-.3-3.3-.8l-.2-.1-3.1.8.8-3-.2-.3c-.7-1.1-1.1-2.3-1.1-3.6 0-3.7 3.2-6.7 7.1-6.7s7.1 3 7.1 6.7-3.2 6.7-7.1 6.7zm4-5.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-1-.6-.5-1-1.2-1.1-1.3-.1-.1 0-.2.1-.3.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.5.2-.2.2-.7.7-.7 1.7 0 1 .7 2 1.1 2.4.1.1 1.5 2.3 3.7 3.1.5.2.9.4 1.2.5.5.2.9.1 1.2.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2z" fill="#fff"/>
                    </g>
                  </svg>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-600">51 99210.8449</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Ícone Instagram oficial outline com gradiente, sem círculo */}
                  <svg className="w-8 h-8 align-middle" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="ig-outline" x1="224" y1="0" x2="224" y2="448" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fd5" />
                        <stop offset="0.5" stop-color="#ff543e" />
                        <stop offset="1" stop-color="#c837ab" />
                      </linearGradient>
                    </defs>
                    <rect x="64" y="64" width="320" height="320" rx="80" stroke="url(#ig-outline)" stroke-width="32" fill="none" />
                    <circle cx="224" cy="224" r="80" stroke="url(#ig-outline)" stroke-width="32" fill="none" />
                    <circle cx="336" cy="112" r="16" fill="url(#ig-outline)" />
                  </svg>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a href="https://instagram.com/workpoa" target="_blank" rel="noopener noreferrer" className="text-[#12D8FA] hover:underline">@workpoa</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-gradient-border p-8">
              <form className="space-y-6">
                <div>
                  <Input type="text" placeholder="Nome completo" className="input-modern w-full" required />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="input-modern w-full" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Telefone" className="input-modern w-full" required />
                </div>
                <div>
                  <textarea placeholder="Como podemos ajudar?" rows={4} className="input-modern w-full resize-none" required />
                </div>
                <Button type="submit" className="btn-primary w-full">Enviar mensagem</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 lg:px-12 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image
              src="/logo-workpoa.avif"
              width={32}
              height={32}
              alt="Logo Work PoA"
              className="w-8 h-6"
            />
            <span className="text-lg font-extrabold tracking-wide text-[#1a1a1a]">Work PoA</span>
          </div>
          <p className="text-[#222] mb-4">Engenharia, Reformas e Projetos de Interiores</p>
          <p className="text-sm text-[#888]">
            &copy; {new Date().getFullYear()} Work PoA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
