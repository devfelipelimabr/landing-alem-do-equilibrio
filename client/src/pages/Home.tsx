/**
 * Design: Moderno Acolhedor — página editorial e acessível que organiza a seleção
 * oficial por intenção: compreender, apoiar a marcha e criar circuitos progressivos.
 */
import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Check, Compass, Copy, HeartHandshake, Instagram, Mail, MessageCircle, MoveUpRight, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { OFFICIAL_EMAIL, OFFICIAL_EMAIL_HREF, OFFICIAL_WHATSAPP, OFFICIAL_WHATSAPP_HREF } from "@/const";
import ProductCard, {
  categoryLabels,
  filterCatalog,
  type CategoryFilter,
  catalog as productCatalog,
  productCatalogIntro,
  productCatalogTitle,
} from "@/components/ProductCard";

const filterDescriptions: Record<CategoryFilter, string> = {
  todos: "Veja todos os itens oficiais disponíveis.",
  leitura: "Conteúdos para compreender melhor a recuperação e o treino.",
  mobilidade: "Apoios para tornar a marcha mais segura e prática.",
  circuito: "Equipamentos para criar desafios graduais de movimento.",
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("todos");
  const [pixCopied, setPixCopied] = useState(false);
  const whatsappHref = OFFICIAL_WHATSAPP_HREF;
  const pixKey = "a1104d86-fb29-4005-9ba4-9b5aa1f968b2";
  const filteredProducts = useMemo(() => filterCatalog(activeFilter), [activeFilter]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setPixCopied(true);
      window.setTimeout(() => setPixCopied(false), 2200);
    } catch {
      setPixCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#2C3E50]">
      <Header />
      <main>
        <HeroSection />

        <section id="beneficios" className="relative overflow-hidden bg-[#fbfaf7] py-24 md:py-32">
          <div className="pointer-events-none absolute -right-20 top-20 h-52 w-[34rem] rotate-[12deg] rounded-[50%] border border-[#6B8E7F]/15" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 top-24 h-52 w-[34rem] rotate-[12deg] rounded-[50%] border border-[#6B8E7F]/10" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B8E7F]">Uma jornada em camadas</p>
                <h2 className="max-w-xl text-4xl leading-[1.08] text-[#2C3E50] md:text-5xl">
                  Movimento com mais intenção, não apenas repetição.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#66736f]">
                O catálogo foi organizado para acompanhar diferentes momentos: adquirir conhecimento, buscar apoio durante a marcha e criar desafios progressivos de coordenação, equilíbrio e força.
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Compass,
                  label: "01 / compreender",
                  title: "Conhecimento antes da pressa",
                  text: "Um guia para entender a neuroplasticidade e olhar para a recuperação com mais clareza.",
                  tone: "bg-[#edf4f0] text-[#6B8E7F]",
                },
                {
                  icon: ShieldCheck,
                  label: "02 / apoiar",
                  title: "Mais segurança na marcha",
                  text: "Recursos de apoio que podem acompanhar o uso diário e o treino de marcha orientado.",
                  tone: "bg-[#eef3f5] text-[#2C3E50]",
                },
                {
                  icon: Sparkles,
                  label: "03 / progredir",
                  title: "Desafios que evoluem",
                  text: "Equipamentos para organizar circuitos, mudanças de direção e novas possibilidades de movimento.",
                  tone: "bg-[#fff3ee] text-[#d77d57]",
                },
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.label} className="rounded-[1.5rem] border border-[#e6e2da] bg-white p-7 shadow-[0_12px_32px_rgba(44,62,80,0.04)]">
                    <div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl ${benefit.tone}`}>
                      <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#86908c]">{benefit.label}</p>
                    <h3 className="text-2xl leading-tight text-[#2C3E50]">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-[#66736f]">{benefit.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-[#d4c5b0]/25 blur-3xl" />
        </section>

        <section id="sobre" className="relative overflow-hidden bg-[#eef3ee] py-24 md:py-32">
          <div className="pointer-events-none absolute -left-24 top-16 h-64 w-[28rem] -rotate-[14deg] rounded-[50%] border border-[#6B8E7F]/10" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#d4c5b0]">
                <img
                  src="/images/equilibrio-clinica.jpg"
                  alt="Pessoa praticando marcha e equilíbrio dinâmico com supervisão de fisioterapeuta em reabilitação neurofuncional"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Além do Equilíbrio</p>
                    <p className="mt-2 max-w-xs font-display text-2xl leading-tight">Cada movimento conta.</p>
                  </div>
                  <HeartHandshake size={30} strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>

              <div className="lg:pl-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B8E7F]">Sobre a seleção</p>
                <h2 className="max-w-xl text-4xl leading-[1.08] text-[#2C3E50] md:text-5xl">
                  Recursos para construir autonomia um passo de cada vez.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#66736f]">
                  O Além do Equilíbrio reúne conteúdos e equipamentos para apoiar uma rotina de reabilitação neurofuncional e treino funcional com mais intenção. A proposta é facilitar escolhas — sempre respeitando o momento, os limites e a orientação individual de cada pessoa.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {["Curadoria oficial do projeto", "Indicações de uso objetivas", "Links externos identificados", "Sem promessas milagrosas"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-[#2C3E50]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#6B8E7F] shadow-sm">
                        <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#2C3E50] transition-colors hover:text-[#6B8E7F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E7F] focus-visible:ring-offset-4"
                >
                  Conhecer o catálogo
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="produtos" className="relative overflow-hidden bg-[#fbfaf7] py-24 md:py-32">
          <div className="pointer-events-none absolute -right-32 top-32 h-72 w-[38rem] rotate-[18deg] rounded-[50%] border border-[#E8956F]/10" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B8E7F]">Catálogo oficial</p>
                <h2 className="text-4xl leading-[1.08] text-[#2C3E50] md:text-5xl">{productCatalogTitle}</h2>
              </div>
              <div className="flex flex-col gap-6 lg:items-end">
                <p className="max-w-2xl text-lg leading-8 text-[#66736f] lg:text-right">{productCatalogIntro}</p>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#84908a]">
                  <span className="h-2 w-2 rounded-full bg-[#6B8E7F]" />
                  7 itens oficiais · seleção atualizada
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 overflow-hidden rounded-[1.5rem] border border-[#e6e2da] bg-[#f7f2eb] md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div className="relative h-56 overflow-hidden md:h-full md:min-h-56">
                <img src="/images/circuito-neurofuncional.jpg" alt="Pessoa realizando circuito terapêutico com cones, obstáculos baixos e step em reabilitação neurofuncional" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/10 to-[#2C3E50]/35" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#2C3E50]">Circuito neurofuncional</div>
              </div>
              <div className="p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B8E7F]">Equipamentos com contexto</p>
                <p className="mt-3 max-w-xl text-lg leading-8 text-[#2C3E50]">A seleção foi pensada para sair da lista e entrar na prática neurofuncional: apoiar a marcha, sinalizar trajetos, desafiar a coordenação e progredir com segurança.</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-6 border-y border-[#e6e2da] py-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#84908a]">Filtrar catálogo</p>
                <p className="mt-2 text-sm text-[#66736f]">{filterDescriptions[activeFilter]}</p>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar produtos do catálogo">
                {(Object.keys(categoryLabels) as CategoryFilter[]).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E7F] focus-visible:ring-offset-2 ${activeFilter === filter ? "bg-[#2C3E50] text-white" : "bg-white text-[#66736f] hover:bg-[#edf4f0] hover:text-[#2C3E50]"}`}
                  >
                    {categoryLabels[filter]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#e6e2da] bg-white p-5 text-sm leading-6 text-[#66736f]">
              <ShieldCheck className="mt-0.5 shrink-0 text-[#6B8E7F]" size={18} aria-hidden="true" />
              <p>
                <strong className="font-semibold text-[#2C3E50]">Transparência:</strong> alguns links desta página são de afiliado e podem gerar comissão sem custo adicional para você. Preços, disponibilidade e condições são definidos no site de destino.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5 rounded-[1.5rem] border border-[#079bd4]/20 bg-[#eaf8fc] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#079bd4] shadow-sm">
                  <MessageCircle size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#057aa8]">Não encontrou o que procura?</p>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-[#2C3E50]">Para consultar outros produtos, acessórios ou recomendações para sua rotina, entre em contato pelo WhatsApp.</p>
                </div>
              </div>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#079bd4] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#057aa8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079bd4] focus-visible:ring-offset-2">
                <MessageCircle size={17} aria-hidden="true" />
                Falar sobre outros produtos
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#2C3E50] py-24 text-white md:py-28">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-[30rem] -rotate-[8deg] rounded-[50%] border border-[#b9d2c7]/15" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-10 bottom-4 h-56 w-[30rem] -rotate-[8deg] rounded-[50%] border border-[#b9d2c7]/10" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b9d2c7]">Um próximo passo possível</p>
                <h2 className="max-w-3xl text-4xl leading-[1.08] text-white md:text-6xl">Escolha o apoio certo para o seu momento.</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Comece pelo conhecimento, encontre mais segurança na marcha ou monte um circuito que acompanhe sua evolução.</p>
              </div>
              <button
                onClick={() => scrollToSection("produtos")}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E8956F] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-[#f0a382] hover:shadow-[0_10px_30px_rgba(232,149,111,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#2C3E50]"
              >
                Explorar o catálogo
                <MoveUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-44 left-1/3 h-96 w-96 rounded-full border border-[#b9d2c7]/10" />
        </section>

        <section id="apoie" className="relative overflow-hidden bg-[#f7f2eb] py-16 md:py-20">
          <div className="pointer-events-none absolute -right-24 top-8 h-56 w-[30rem] rotate-[10deg] rounded-[50%] border border-[#E8956F]/15" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="grid gap-8 rounded-[1.75rem] border border-[#e6e2da] bg-white p-7 shadow-[0_16px_40px_rgba(44,62,80,0.05)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d77d57]">Apoie o projeto</p>
                <h2 className="max-w-2xl text-3xl leading-tight text-[#2C3E50] md:text-4xl">Ajude o Além do Equilíbrio a continuar compartilhando informação.</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#66736f]">Se este trabalho contribui para sua jornada de reabilitação neurofuncional, você pode apoiar o projeto usando a chave Pix abaixo.</p>
              </div>
              <div className="min-w-0 rounded-2xl bg-[#eef3ee] p-4 md:min-w-[24rem] md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B8E7F]">Chave Pix de apoio</p>
                <p className="mt-3 break-all rounded-xl border border-[#dbe6df] bg-white px-3 py-3 font-mono text-sm text-[#2C3E50]" aria-label="Chave Pix de apoio ao projeto">{pixKey}</p>
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2C3E50] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f2e3b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E7F] focus-visible:ring-offset-2"
                  aria-label="Copiar chave Pix de apoio ao projeto"
                >
                  {pixCopied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                  {pixCopied ? "Chave copiada" : "Copiar chave Pix"}
                </button>
                <p className="mt-2 text-center text-xs text-[#84908a]" aria-live="polite">{pixCopied ? "Você já pode colar a chave no seu banco." : "Toque para copiar a chave."}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1f2e3b] py-12 text-white">
        <div className="container">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#06162f] text-white">
                  <img src="/images/logo-alem-do-equilibrio.png" alt="" className="h-full w-full object-cover" />
                </div>
                <span className="font-display text-xl font-semibold">Além do Equilíbrio</span>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/60">Reabilitação neurofuncional e treino funcional com mais clareza, segurança e intenção.</p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-white/65 md:items-end">
              <div className="flex flex-col gap-3 sm:items-end">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#8de0f8] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8de0f8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f2e3b]" aria-label="Falar com o Além do Equilíbrio pelo WhatsApp">
                  <MessageCircle size={17} aria-hidden="true" />
                  WhatsApp: {OFFICIAL_WHATSAPP}
                </a>
                <a href={OFFICIAL_EMAIL_HREF} className="inline-flex items-center gap-2 text-[#f4c3ae] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c3ae] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f2e3b]" aria-label={`Enviar e-mail para ${OFFICIAL_EMAIL}`}>
                  <Mail size={17} aria-hidden="true" />
                  {OFFICIAL_EMAIL}
                </a>
                <a href="https://www.instagram.com/alem.do.equilibrio/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9d2c7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f2e3b]">
                  <Instagram size={17} aria-hidden="true" />
                  @alem.do.equilibrio
                </a>
                <a href="#apoie" className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9d2c7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f2e3b]">
                  <HeartHandshake size={17} aria-hidden="true" />
                  Apoiar o projeto via Pix
                </a>
              </div>
              <p className="max-w-md text-right text-xs leading-5 text-white/45">E-mail oficial: {OFFICIAL_EMAIL}. O conteúdo desta página é informativo. Em uma reabilitação, procure avaliação e orientação de um profissional de saúde.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Além do Equilíbrio. Catálogo oficial do projeto.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 self-start transition-colors hover:text-white sm:self-auto">
              Voltar ao topo <ArrowDown size={14} className="rotate-180" aria-hidden="true" />
            </button>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Entrar em contato pelo WhatsApp"
        className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#073b20] shadow-[0_12px_28px_rgba(37,211,102,0.32)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#20bd5b] hover:shadow-[0_16px_34px_rgba(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf7] active:translate-y-0 sm:bottom-7 sm:right-7">
        <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
        <span className="hidden sm:inline">Fale no WhatsApp</span>
        <span className="sr-only"> com Além do Equilíbrio</span>
      </a>
    </div>
  );
}

export { productCatalog };
