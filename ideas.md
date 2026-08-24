# Além do Equilíbrio - Estratégia de Design

## Referência Visual
- **Marca**: Além do Equilíbrio - Reabilitação e Treino Funcional
- **Público**: Pessoas em reabilitação neurológica, especialmente com ataxia
- **Tom**: Profissional, esperançoso, baseado em evidências, acolhedor

## Abordagens de Design

### 1. Wellness Minimalista
Paleta limpa com tons de verde sálvia e bege, layout espaçoso, tipografia elegante. Foco em clareza e acessibilidade.
**Probabilidade**: 0.08

### 2. Dinâmico e Energético
Cores vibrantes (verde, azul, laranja), movimento visual, formas geométricas. Transmite energia e progresso.
**Probabilidade**: 0.06

### 3. Moderno Acolhedor (ESCOLHIDO)
Paleta natural com verde-sálvia, bege-areia, branco e acentos em azul-petróleo. Design limpo mas com profundidade, tipografia sofisticada, ilustrações e imagens de pessoas em movimento.
**Probabilidade**: 0.07

---

## Design Escolhido: Moderno Acolhedor

### Design Movement
**Contemporâneo Wellness** - Combina a clareza do design moderno com a calidez do wellness design. Inspiração em clínicas de reabilitação premium e plataformas de saúde digital.

### Core Principles
1. **Clareza com Profundidade**: Layouts limpos mas com camadas visuais (sombras suaves, gradientes, texturas)
2. **Humanidade em Primeiro Lugar**: Imagens de pessoas reais em movimento, exercitando-se, progredindo
3. **Confiança Baseada em Evidências**: Tipografia clara, hierarquia visual forte, dados/benefícios bem apresentados
4. **Acessibilidade Integrada**: Alto contraste, espaçamento generoso, navegação intuitiva

### Color Philosophy
- **Verde-Sálvia (#6B8E7F)**: Calma, esperança, natureza, recuperação
- **Bege-Areia (#D4C5B0)**: Acolhimento, terra, estabilidade
- **Azul-Petróleo (#2C3E50)**: Confiança, profissionalismo, segurança
- **Branco (#FFFFFF)**: Clareza, espaço, respiração
- **Acentos em Laranja-Suave (#E8956F)**: Energia, progresso, movimento

**Intenção Emocional**: Transmitir que reabilitação é possível, segura e progressiva. Cores naturais criam confiança, enquanto acentos sutis sugerem movimento e melhora.

### Layout Paradigm
- **Hero Section**: Imagem grande de pessoa em movimento/exercício, com overlay de gradiente suave
- **Seções Alternadas**: Texto à esquerda/imagem à direita, depois invertido
- **Cards de Produtos**: Grid responsivo com imagens, descrição clara, CTA destacado
- **Divisores Orgânicos**: Ondas suaves ou formas abstratas entre seções
- **Rodapé Integrado**: Informações de contato, links úteis, CTA final

### Signature Elements
1. **Onda Orgânica**: Divisor entre seções, reforça fluidez e movimento
2. **Ícones de Movimento**: Pequenas ilustrações de pessoas em diferentes posições/exercícios
3. **Cartões com Sombra Suave**: Profundidade sem peso visual

### Interaction Philosophy
- **Hover States**: Sutil elevação (shadow), mudança de cor suave
- **Transições**: 300ms ease-out para movimentos UI
- **Cliques em CTAs**: Feedback visual imediato (scale 0.97)
- **Scroll Reveal**: Elementos aparecem suavemente ao entrar no viewport

### Animation
- **Entrance**: Fade + slide up (200ms) para cards e seções
- **Hover**: Scale 1.02 + shadow elevada para produtos
- **CTAs**: Scale 0.97 on active, transição suave ao hover
- **Scroll**: Parallax suave em imagens de fundo
- **Respeitar**: prefers-reduced-motion

### Typography System
- **Display/Headlines**: Playfair Display (serif, elegante) - 48px, 36px, 28px
- **Body Text**: Inter (sans-serif, legível) - 16px, 14px
- **Accent/Labels**: Inter Medium - 12px, 13px
- **Hierarquia**: Bold para destaques, Regular para corpo, Light para secundário

### Brand Essence
**Posicionamento**: "Reabilitação baseada em evidências que transforma vidas através do movimento consciente."

**Personalidade**: 
- Esperançoso
- Profissional
- Acolhedor

### Brand Voice
- **Headlines**: Positivas, focadas em progresso ("Recupere seu Equilíbrio", "Cada Movimento Conta")
- **CTAs**: Diretas e empoderadoras ("Comece Sua Jornada", "Explore Produtos")
- **Microcopy**: Educativo e amigável ("Equipamentos selecionados para reabilitação eficaz")
- **Evitar**: Promessas milagrosas, tom genérico, jargão médico excessivo

**Exemplos de Copy**:
- "Treino funcional que realmente funciona"
- "Equipamentos que aceleram sua recuperação"

### Wordmark & Logo
**Conceito**: Símbolo abstrato de movimento/equilíbrio - uma figura estilizada em movimento, com uma linha que sugere equilíbrio/estabilidade. Cores: verde-sálvia com acentos em azul-petróleo.

### Signature Brand Color
**Verde-Sálvia (#6B8E7F)** - Imediatamente reconhecível como marca, transmite calma e recuperação.

---

## Estrutura da Landing Page

1. **Header/Nav**: Logo, menu (Sobre, Produtos, Contato), CTA secundária
2. **Hero**: Imagem grande + headline + subheadline + CTA primária
3. **Seção de Benefícios**: 3-4 cards com ícones (coordenação, agilidade, equilíbrio, força)
4. **Seção de Produtos**: Grid de 4 produtos com imagens, descrição, link de afiliado
5. **Seção de Depoimentos/Resultados**: Breve seção com benefícios
6. **CTA Final**: "Comece Sua Jornada" com link para produtos
7. **Footer**: Links úteis, informações, redes sociais

---

## Paleta de Cores Detalhada

| Cor | Código | Uso |
|-----|--------|-----|
| Verde-Sálvia | #6B8E7F | Primária, headers, botões |
| Bege-Areia | #D4C5B0 | Backgrounds suaves, accents |
| Azul-Petróleo | #2C3E50 | Texto principal, borders |
| Branco | #FFFFFF | Backgrounds principais |
| Laranja-Suave | #E8956F | Destaques, CTAs secundárias |
| Cinza-Claro | #F5F3F0 | Backgrounds alternativos |
| Cinza-Médio | #999999 | Texto secundário |

---

## Próximos Passos

1. Gerar imagens de hero e produtos
2. Implementar componentes React com Tailwind
3. Integrar links de afiliado
4. Testar responsividade
5. Otimizar performance
