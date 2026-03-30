"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-workpoa.avif"
            width={48}
            height={48}
            alt="Logo Work Poa"
            className="w-10 h-8"
            priority
          />
          <span className="text-2xl font-extrabold tracking-wide text-[#1a1a1a]">Work Poa</span>
        </div>
        <div className="hidden md:flex space-x-8 text-base font-medium text-[#222]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#12D8FA] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[#222] hover:text-[#12D8FA] transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
