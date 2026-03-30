import Image from "next/image";
import HeroMosaic from "@/components/ui/HeroMosaic";
import Navbar from "@/components/ui/Navbar";
import ZohoForm from "@/components/ZohoForm";

export default function Home() {

  return (
    <main className="min-h-screen bg-background">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <HeroMosaic 
        title="Engenharia & Projetos"
        subtitle="Construções · Reformas · Projetos · PPCI"
        details="Do projeto à regularização — com acompanhamento técnico completo"
        ctaText="Solicite seu projeto"
        ctaHref="#contato"
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
                className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift bg-white card-gradient-border"
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

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 gradient-text">
            Sobre a Work
          </h2>
          <div className="prose prose-lg mx-auto text-[#222]">
            <p className="text-lg leading-relaxed mb-6">
              A <strong className="gradient-text">Work Poa</strong> é uma empresa especializada em engenharia, reformas e projetos de interiores, comprometida com a excelência e inovação em cada projeto.
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
                  {/* Ícone Email */}
                  <svg className="w-8 h-8 align-middle" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#1FA2FF" />
                    <path d="M8 11l8 5 8-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <rect x="8" y="10" width="16" height="12" rx="2" stroke="#fff" strokeWidth="1.5" fill="none" />
                  </svg>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <a href="mailto:contato@work.poa.br" className="text-[#12D8FA] hover:underline">contato@work.poa.br</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Ícone Instagram oficial outline com gradiente, sem círculo */}
                  <svg className="w-8 h-8 align-middle" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="ig-outline" x1="224" y1="0" x2="224" y2="448" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fd5" />
                        <stop offset="0.5" stopColor="#ff543e" />
                        <stop offset="1" stopColor="#c837ab" />
                      </linearGradient>
                    </defs>
                    <rect x="64" y="64" width="320" height="320" rx="80" stroke="url(#ig-outline)" strokeWidth="32" fill="none" />
                    <circle cx="224" cy="224" r="80" stroke="url(#ig-outline)" strokeWidth="32" fill="none" />
                    <circle cx="336" cy="112" r="16" fill="url(#ig-outline)" />
                  </svg>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a href="https://instagram.com/workpoa" target="_blank" rel="noopener noreferrer" className="text-[#12D8FA] hover:underline">@workpoa</a>
                  </div>
                </div>
              </div>
            </div>
            <ZohoForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 lg:px-12 bg-[#23272F] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Coluna 1 — Marca */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo-workpoa.avif"
                  width={32}
                  height={32}
                  alt="Logo Work PoA"
                  className="w-8 h-6"
                />
                <span className="text-lg font-extrabold tracking-wide" style={{ color: '#ffffff' }}>Work PoA</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Engenharia, construções, reformas e projetos. Do conceito à entrega com acompanhamento técnico completo.
              </p>
            </div>

            {/* Coluna 2 — Navegação */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Navegação</h4>
              <ul className="space-y-2">
                {[{href: '#servicos', label: 'Serviços'}, {href: '#portfolio', label: 'Portfólio'}, {href: '#sobre', label: 'Sobre'}, {href: '#contato', label: 'Contato'}].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm hover:text-[#12D8FA] transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — Contato */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#12D8FA' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="https://wa.me/5551992108449" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#12D8FA] transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>51 99210.8449</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#12D8FA' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contato@work.poa.br" className="text-sm hover:text-[#12D8FA] transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>contato@work.poa.br</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#12D8FA' }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <a href="https://instagram.com/workpoa" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#12D8FA] transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>@workpoa</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divisor + Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              &copy; {new Date().getFullYear()} Work PoA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
