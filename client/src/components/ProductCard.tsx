/**
 * Design: Moderno Acolhedor — card editorial com camadas suaves, foco no objetivo de uso,
 * contraste alto e CTA transparente para links externos de afiliado.
 */
import { ArrowUpRight, BookOpen, Footprints, Gauge, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Product = {
  id: number;
  category: "leitura" | "mobilidade" | "circuito";
  eyebrow: string;
  title: string;
  description: string;
  indications: string[];
  link: string;
  tone: "sage" | "petrol" | "coral" | "sand";
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
};

const toneMap = {
  sage: { shell: "bg-[#edf4f0] border-[#d8e8df]", icon: "bg-[#6B8E7F] text-white", number: "text-[#6B8E7F]", dot: "bg-[#6B8E7F]" },
  petrol: { shell: "bg-[#eef3f5] border-[#d9e4e9]", icon: "bg-[#2C3E50] text-white", number: "text-[#2C3E50]", dot: "bg-[#2C3E50]" },
  coral: { shell: "bg-[#fff3ee] border-[#f2ddd4]", icon: "bg-[#E8956F] text-white", number: "text-[#d77d57]", dot: "bg-[#E8956F]" },
  sand: { shell: "bg-[#f7f2eb] border-[#eadfce]", icon: "bg-[#b39a79] text-white", number: "text-[#9b805d]", dot: "bg-[#b39a79]" },
};

export const catalog: Product[] = [
  {
    id: 1,
    category: "leitura",
    eyebrow: "Conhecimento para a jornada",
    title: "NEUROPLASTICIDADE na prática",
    description: "Um guia prático para compreender como a neuroplasticidade pode ser aplicada na recuperação neurológica e no treinamento do equilíbrio.",
    indications: ["Pessoas em reabilitação neurológica", "Familiares e cuidadores", "Profissionais da saúde"],
    link: "https://tr.ee/jX52Gd73nh?utm_source=chatgpt.com",
    tone: "sage",
    icon: BookOpen,
    imageSrc: "/images/produto-neuroplasticidade.png",
    imageAlt: "Capa do livro Neuroplasticidade na prática, sobre fisioterapia neurológica e aplicação prática da neuroplasticidade",
    tag: "Leitura essencial",
  },
  {
    id: 2,
    category: "mobilidade",
    eyebrow: "Mais apoio para a marcha",
    title: "Bengala Dobrável em Alumínio",
    description: "Leve, dobrável e com regulagem de altura para oferecer mais praticidade e segurança durante a marcha no dia a dia.",
    indications: ["Déficit de equilíbrio", "Reabilitação pós-AVC e TCE", "Uso diário"],
    link: "https://meli.la/1xg1rej?utm_source=chatgpt.com",
    tone: "petrol",
    icon: ShieldCheck,
    imageSrc: "/images/produto-bengala-dobravel.webp",
    imageAlt: "Bengala dobrável de alumínio preta, apresentada aberta e dobrada para apoio durante a marcha", 
    tag: "Apoio diário",
  },
  {
    id: 3,
    category: "mobilidade",
    eyebrow: "Estabilidade em quatro pontos",
    title: "Bengala 4 Pontas Regulável",
    description: "Base com quatro apoios para proporcionar mais estabilidade do que uma bengala convencional durante o treino de marcha.",
    indications: ["Maior instabilidade", "Treino de marcha", "Progressão com mais segurança"],
    link: "https://meli.la/1BUjmZC?utm_source=chatgpt.com",
    tone: "sand",
    icon: Footprints,
    imageSrc: "/images/produto-bengala-quatro-pontas.png",
    imageAlt: "Bengala regulável preta com base de quatro apoios para maior estabilidade durante o treino de marcha", 
    tag: "Mais estabilidade",
  },
  {
    id: 4,
    category: "circuito",
    eyebrow: "Trajetos que desafiam o corpo",
    title: "Kit de Cones Demarcatórios",
    description: "Dez cones flexíveis para montar percursos de marcha, mudanças de direção e exercícios de equilíbrio em diferentes espaços.",
    indications: ["Treino de marcha", "Coordenação motora", "Exercícios domiciliares"],
    link: "https://meli.la/1x6cp11?utm_source=chatgpt.com",
    tone: "coral",
    icon: Layers3,
    imageSrc: "/images/produto-cones.webp",
    imageAlt: "Conjunto de dez cones demarcatórios flexíveis laranja para percursos de marcha e coordenação", 
    tag: "10 unidades",
  },
  {
    id: 5,
    category: "circuito",
    eyebrow: "Um circuito, muitas possibilidades",
    title: "Kit Agilidade Completo",
    description: "Cones, chapéus chineses e escada para criar circuitos progressivos de equilíbrio, coordenação e velocidade.",
    indications: ["Treinos de equilíbrio", "Reabilitação neurológica", "Progressão de dificuldade"],
    link: "https://meli.la/2uhaqdR?utm_source=chatgpt.com",
    tone: "sage",
    icon: Gauge,
    imageSrc: "/images/produto-kit-agilidade.webp",
    imageAlt: "Kit de agilidade com cones, chapéus chineses coloridos e escada para circuitos de equilíbrio", 
    tag: "Circuito funcional",
  },
  {
    id: 6,
    category: "circuito",
    eyebrow: "Força para o movimento",
    title: "Step Aeróbico EVA",
    description: "Plataforma resistente para exercícios de subida e descida, fortalecimento dos membros inferiores e equilíbrio dinâmico.",
    indications: ["Treino funcional", "Fortalecimento", "Equilíbrio dinâmico"],
    link: "https://meli.la/1rvzCD6?utm_source=chatgpt.com",
    tone: "petrol",
    icon: Sparkles,
    imageSrc: "/images/produto-step-eva.webp",
    imageAlt: "Step aeróbico EVA preto com superfície antiderrapante para fortalecimento e equilíbrio dinâmico", 
    tag: "Progressão de treino",
  },
  {
    id: 7,
    category: "mobilidade",
    eyebrow: "Apoio para transferências",
    title: "Cinto/Faixa de Transferência e Home Care Hidrolight",
    description: "Faixa de apoio para auxiliar transferências e rotinas de home care com mais organização e segurança, sempre conforme orientação profissional.",
    indications: ["Transferências com apoio do cuidador", "Rotinas de home care", "Reabilitação neurofuncional e mobilidade"],
    link: "https://meli.la/22uJ98X?utm_source=chatgpt.com",
    tone: "coral",
    icon: ShieldCheck,
    imageSrc: "/images/produto-cinto-transferencia.webp",
    imageAlt: "Pessoa sentada em cadeira de rodas usando cinto de transferência com apoio de profissional de saúde", 
    tag: "Home care",
  },
];

export const categoryLabels = {
  todos: "Todos os produtos",
  leitura: "Leitura e orientação",
  mobilidade: "Apoio à mobilidade",
  circuito: "Circuito funcional",
} as const;

export type CategoryFilter = keyof typeof categoryLabels;

export function filterCatalog(filter: CategoryFilter) {
  if (filter === "todos") return catalog;
  return catalog.filter((product) => product.category === filter);
}

export const productCatalogTitle = "Um catálogo para cada etapa do movimento";
export const productCatalogIntro = "Do conhecimento ao apoio para a marcha — e do primeiro circuito à progressão do treino, encontre ferramentas que podem fazer sentido na sua jornada.";

export default function ProductCard({ product }: { product: Product }) {
  const tone = toneMap[product.tone];
  const Icon = product.icon;

  return (
    <article className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(44,62,80,0.12)] ${tone.shell}`}>
      <div className="mb-5 flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-white/65 p-3">
        <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
      </div>

      <div className="mb-8 flex items-start justify-between gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${tone.icon}`}>
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <span className={`font-display text-5xl font-semibold leading-none opacity-70 ${tone.number}`} aria-hidden="true">
          {String(product.id).padStart(2, "0")}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6f7f7a]">{product.eyebrow}</span>
        {product.tag && <span className="rounded-full bg-white/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#2C3E50]">{product.tag}</span>}
      </div>

      <h3 className="max-w-[18rem] text-[1.7rem] leading-[1.08] text-[#2C3E50]">{product.title}</h3>
      <p className="mt-4 text-sm leading-6 text-[#52605e]">{product.description}</p>

      <div className="mt-6 border-t border-[#2c3e50]/10 pt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f7f7a]">Indicado para</p>
        <ul className="space-y-2.5">
          {product.indications.map((indication) => (
            <li key={indication} className="flex items-start gap-2 text-sm leading-5 text-[#2C3E50]">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`} aria-hidden="true" />
              <span>{indication}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href={product.link} target="_blank" rel="noreferrer sponsored" className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-semibold text-[#2C3E50] transition-colors hover:text-[#6B8E7F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E7F] focus-visible:ring-offset-4" aria-label={`Ver ${product.title} no link oficial`}>
        <span>Ver produto oficial</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight size={18} aria-hidden="true" /></span>
      </a>
    </article>
  );
}
