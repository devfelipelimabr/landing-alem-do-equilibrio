/**
 * Design: Moderno Acolhedor — hero com fotografia humana, contraste garantido,
 * headline editorial e CTA que leva diretamente ao catálogo oficial.
 */
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden bg-[#2C3E50]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/manus-storage/reabilitacao-neurofuncional-hero_6c9a072f.png')" }} aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a35]/85 via-[#1f3340]/60 to-[#1f3340]/20" />
      </div>
      <div className="pointer-events-none absolute -right-28 top-24 h-80 w-[38rem] rotate-[18deg] rounded-[50%] border border-white/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-28 h-80 w-[38rem] rotate-[18deg] rounded-[50%] border border-[#c1dfd3]/10" aria-hidden="true" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c1dfd3]">
            <span className="h-px w-10 bg-[#c1dfd3]" />
            Reabilitação neurofuncional e treino funcional
          </div>
          <h1 className="max-w-3xl text-5xl leading-[0.98] text-white md:text-7xl">Ferramentas para ir além do equilíbrio.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">Conhecimento, apoio e equipamentos selecionados para acompanhar a recuperação neurológica, a marcha e o treino funcional — com mais clareza e intenção.</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => scrollToSection("produtos")} className="group rounded-full bg-[#E8956F] px-6 py-6 text-base font-semibold text-white hover:bg-[#f0a382]">
              Ver catálogo oficial
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} aria-hidden="true" />
            </Button>
            <Button onClick={() => scrollToSection("sobre")} variant="outline" className="rounded-full border-white/50 bg-white/5 px-6 py-6 text-base font-semibold text-white hover:bg-white/15 hover:text-white">Como escolher</Button>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-white/20 pt-7 sm:grid-cols-3">
            <div>
              <p className="font-display text-3xl text-[#c1dfd3]">07</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/65">itens oficiais</p>
            </div>
            <div>
              <p className="font-display text-3xl text-[#c1dfd3]">03</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/65">formas de apoiar</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-display text-3xl text-[#c1dfd3]">01</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/65">seleção do projeto</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => scrollToSection("beneficios")} className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#2C3E50]" aria-label="Rolar para a seção de benefícios">
        Descubra
        <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
