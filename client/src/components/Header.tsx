/**
 * Design: Moderno Acolhedor — navegação leve, com símbolo visual forte,
 * links curtos e CTA direto para a seleção oficial.
 */
import { Mail, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OFFICIAL_EMAIL, OFFICIAL_EMAIL_HREF, OFFICIAL_WHATSAPP, OFFICIAL_WHATSAPP_HREF } from "@/const";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappHref = OFFICIAL_WHATSAPP_HREF;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e6e1] bg-[#fbfaf7]/95 backdrop-blur-md">
      <div className="container flex h-[4.5rem] items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E7F] focus-visible:ring-offset-4" aria-label="Voltar ao início">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#06162f] shadow-[0_8px_18px_rgba(6,22,47,0.24)]">
            <img src="/manus-storage/alem-do-equilibrio-logo-oficial_beb1b293.webp" alt="" className="h-16 w-16 max-w-none -translate-y-1 object-cover" />
          </span>
          <span className="hidden font-display text-lg font-semibold text-[#2C3E50] sm:inline">Além do Equilíbrio</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          <button onClick={() => scrollToSection("beneficios")} className="text-sm font-medium text-[#66736f] transition-colors hover:text-[#079bd4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E7F] focus-visible:ring-offset-4">Benefícios</button>
          <button onClick={() => scrollToSection("produtos")} className="text-sm font-medium text-[#66736f] transition-colors hover:text-[#079bd4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E7F] focus-visible:ring-offset-4">Produtos</button>
          <button onClick={() => scrollToSection("sobre")} className="text-sm font-medium text-[#66736f] transition-colors hover:text-[#079bd4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E7F] focus-visible:ring-offset-4">Sobre</button>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#079bd4]/25 bg-[#079bd4]/8 px-4 py-2.5 text-sm font-semibold text-[#057aa8] transition-colors hover:bg-[#079bd4]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079bd4] focus-visible:ring-offset-2" aria-label="Falar com o Além do Equilíbrio pelo WhatsApp">
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>
          <a href={OFFICIAL_EMAIL_HREF} className="hidden items-center gap-2 rounded-full border border-[#2C3E50]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#2C3E50] transition-colors hover:border-[#079bd4]/30 hover:bg-[#eef3f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079bd4] focus-visible:ring-offset-2 lg:inline-flex" aria-label={`Enviar e-mail para ${OFFICIAL_EMAIL}`}>
            <Mail size={16} aria-hidden="true" />
            E-mail
          </a>
          <Button onClick={() => scrollToSection("produtos")} className="rounded-full bg-[#06162f] px-5 text-white hover:bg-[#079bd4]">Explorar produtos</Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="rounded-lg p-2 text-[#2C3E50] transition-colors hover:bg-[#edf4f0] md:hidden" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#e8e6e1] bg-[#fbfaf7] md:hidden">
          <nav className="container flex flex-col gap-4 py-5" aria-label="Navegação móvel">
            {[["beneficios", "Benefícios"], ["produtos", "Produtos"], ["sobre", "Sobre"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-left text-sm font-medium text-[#66736f] transition-colors hover:text-[#079bd4]">{label}</button>
            ))}
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#079bd4]/25 bg-[#079bd4]/8 px-4 py-3 text-sm font-semibold text-[#057aa8] transition-colors hover:bg-[#079bd4]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079bd4] focus-visible:ring-offset-2" aria-label="Falar com o Além do Equilíbrio pelo WhatsApp">
              <MessageCircle size={17} aria-hidden="true" />
              Falar no WhatsApp · {OFFICIAL_WHATSAPP}
            </a>
            <a href={OFFICIAL_EMAIL_HREF} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#2C3E50]/15 bg-white px-4 py-3 text-sm font-semibold text-[#2C3E50] transition-colors hover:bg-[#eef3f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079bd4] focus-visible:ring-offset-2" aria-label={`Enviar e-mail para ${OFFICIAL_EMAIL}`}>
              <Mail size={17} aria-hidden="true" />
              Enviar e-mail
            </a>
            <Button onClick={() => scrollToSection("produtos")} className="w-full rounded-full bg-[#2C3E50] text-white hover:bg-[#079bd4]">Explorar produtos</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
