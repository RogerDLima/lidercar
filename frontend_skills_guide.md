# Guia Prático: Skills de Frontend no Antigravity

Abaixo listo os principais **Skills de Frontend** e **SEO** encontrados no ambiente Antigravity que podem ser invocados pelo Gemini para auxiliar no desenvolvimento da LiderCar, junto com *o que eles exigem e como funcionam*.

---

## 🎨 Skills de Design & UI/UX

### `frontend-design`
*   **Foco:** Criação de interfaces memoráveis, com personalidade, evitando o visual genérico de componentes padrão.
*   **O que ele exige:**
    *   Não usar fontes de sistema ou padrões (Inter, Roboto).
    *   Definição de uma "tensão estética" primária (Ex: *brutalismo*, *luxo minimalista*).
    *   Coesão de cores via Variáveis CSS (um tom dominante, um acento).
    *   Uso de espaço negativo e controle de densidade.
*   **Quando usar:** Quando a UI precisa "chamar atenção" e transparecer um aspecto Premium, como a página inicial, cartões de diferenciais e botões flutuantes.

### `frontend-dev-guidelines`
*   **Foco:** Padrões de arquitetura React e NextJS pensados para alta escalabilidade e performance.
*   **O que ele exige:**
    *   Uso estrito de TypeScript (sem uso de `any`).
    *   Padrão "Suspense-first": Abandono de variáveis estaduais simples como `isLoading` em favor de React Suspense Boundaries.
    *   Feature-based Architecture: Códigos organizados por contexto (funcionalidades) e não por tipos (controllers/views).
    *   Obrigatório realizar *Lazy Loading* (carregamento lento) de componentes pesados.
*   **Quando usar:** Quando for criar a estrutura de pastas do projeto, refatorar rotas no Next App Router e gerenciar o disparo de APIs.

### `frontend-developer`
*   **Foco:** Atuação puramente técnica na engenharia de software do lado do cliente (NextJS 15, React 19).
*   **Quando usar:** Delegar a escrita ou conversão de layouts CSS/HTML simples para JSX com gerência de hooks e componentes complexos.

### Outras skills acopláveis
*   **`frontend-security-coder`**: Audita componentes UI contra ataques baseados em XSS e avalia se o React está exposto à injeções inseguras.
*   **`frontend-slides`**: Conversão de elementos UI focados em apresentações cinéticas via HTML.

---

## 🔍 Skills de SEO (Search Engine Optimization)

### `seo-audit`
*   **Foco:** Analista agnóstico de dados focado em Indexabilidade, Rastreamento e Autoridade, não implementa código automaticamente.
*   **O que ele rastreia (Exige ser aprovado antes do fix):**
    *   **Rastreabilidade:** Situação de Sitemaps e Robots.txt.
    *   **Performance (Core Web Vitals):** Tempo de Renderização (LCP), Shifts Inesperados (CLS).
    *   **Qualidade:** Validade das Tags `Title`, `Meta Desc`, semântica `H1`-`H6`, estruturação On-Page.
*   **Quando usar:** Como um raio-X geral para entender se a landing page cumpre os requisitos corporativos do pilar de indexação do Google.

### `local-legal-seo-audit`
*   **Foco:** SEO Hiperlocal (Perfeito para a LiderCar). Otimiza a estrutura para mapas locais do Google.
*   **O que ele exige:**
    *   E-E-A-T (Expertise, Experience, Authoritativeness, and Trustworthiness).
    *   Uso severo de metadados como (Schema JSON-LD) e diretórios ricos de geolocalização.
*   **Quando usar:** Sempre que a empresa presta serviço local, otimizando cotações via Whatsapp ou mapas de presença (Ex: Oficinas, Clínicas, etc).

### Outros suportes a SEO detectados
*   **`seo-fundamentals` / `seo-structure-architect`**: Otimiza links e checa hierarquias estruturais do sitemap.
*   **`schema-markup`**: Dispara a sintaxe JSON-LD para ricos excertos em Rich Snippets do orgânico do Google.

---

> **Dica Executiva:** Para utilizar efetivamente, recomendo sempre pedir ao agente (Gemini) para iniciar o desenvolvimento com a frase: *"Com base nas diretrizes do `frontend-design` e o rigor do `frontend-dev-guidelines`, peço que crie..."*. Isso invoca as "leis de alto-padrão" antes das bibliotecas genéricas no subconsciente da IA.
