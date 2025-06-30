"use client";
import React from "react";

const whatsappNumber = "5551992108449"; // Formato internacional correto: +55 51 99210-8449
const defaultMsg = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Work PoA.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMsg}`;

export default function WhatsappFloatButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed z-[9999] bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] hover:bg-[#1ebe57] rounded-full shadow-2xl p-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform drop-shadow-lg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path d="M16 7.5c-4.7 0-8.5 3.7-8.5 8.3 0 1.5.4 2.9 1.1 4.1L7 25l5.3-1.4c1.2.6 2.5.9 3.7.9 4.7 0 8.5-3.7 8.5-8.3S20.7 7.5 16 7.5zm0 14.7c-1.2 0-2.3-.3-3.3-.8l-.2-.1-3.1.8.8-3-.2-.3c-.7-1.1-1.1-2.3-1.1-3.6 0-3.7 3.2-6.7 7.1-6.7s7.1 3 7.1 6.7-3.2 6.7-7.1 6.7zm4-5.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-1-.6-.5-1-1.2-1.1-1.3-.1-.1 0-.2.1-.3.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.5.2-.2.2-.7.7-.7 1.7 0 1 .7 2 1.1 2.4.1.1 1.5 2.3 3.7 3.1.5.2.9.4 1.2.5.5.2.9.1 1.2.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2z" fill="#fff" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
} 