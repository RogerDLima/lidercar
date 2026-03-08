# 📊 Auditoria SEO & Frontend — LiderCar

Relatório de análise com task list priorizada para melhorias contínuas.

---

## ✅ O que já está bom

| Item | Status |
|------|--------|
| `<html lang="pt-BR">` | ✅ Correto |
| Meta title com keywords | ✅ "LiderCar \| Oficina Mecânica Premium" |
| Meta description completa | ✅ 150+ caracteres com keywords |
| Open Graph (Facebook/WhatsApp) | ✅ Imagem, título, descrição |
| Twitter Card | ✅ `summary_large_image` |
| `robots.ts` configurado | ✅ Allow `/`, disallow `/admin/` |
| `sitemap.ts` configurado | ✅ `/` e `/contato` listados |
| JSON-LD Schema `AutoRepair` | ✅ Com horário, rating, endereço |
| Canonical URL | ✅ Definido |
| Fontes Google otimizadas (Geist) | ✅ Via `next/font` |
| Preloader animado | ✅ Carrega antes do conteúdo |

---

## 🟡 Melhorias Recomendadas — SEO

### Alta Prioridade

- [ ] **Atualizar dados de contato reais no Schema JSON-LD**
  - Telefone: `+55DD999999999` → número real
  - Endereço: `Local Business Address` → endereço real
  - Cidade/Estado → dados reais

- [ ] **Atualizar meta tags do `/contato`**
  - A página não tem metadata própria (herda do layout)
  - Adicionar `export const metadata` com título e descrição específicos

- [ ] **Adicionar `alt` descritivos em todas as imagens**
  - Hero background: verificar se tem alt adequado
  - Imagens de serviços: verificar textos alt

- [ ] **Remover labels "Opção 2/3" de desenvolvimento da homepage**
  - Existem `<div>` com "Opção 2 de Marcas" e "Opção 2/3 de Depoimentos" visíveis
  - Remover ou esconder para produção

### Média Prioridade

- [ ] **Criar página 404 personalizada**
  - Atualemnte usa a padrão do Next.js

- [ ] **Adicionar breadcrumbs na página `/contato`**
  - Melhora navegação e exibição no Google

- [ ] **Otimizar imagens para WebP/AVIF**
  - Verificar se todas as imagens usam formatos modernos

- [ ] **Adicionar `<link rel="preconnect">` para domínios externos**
  - `google.com/maps` (mapa no footer)
  - `s3-us-west-2.amazonaws.com` (imagens bugatti)

### Baixa Prioridade

- [ ] **Implementar OG image dedicada (1200×630)**
  - Atualmente usa hero_bg.webp que pode não ter proporção ideal

- [ ] **Adicionar mais páginas ao sitemap**
  - Se houver páginas de serviços individuais no futuro

---

## 🟡 Melhorias Recomendadas — Frontend & Performance

### Alta Prioridade

- [ ] **Adicionar menu hamburger mobile**
  - Navegação está `display:none` em mobile
  - Usuários mobile não têm acesso aos links do header

- [ ] **Definir `sizes` nas imagens Next/Image**
  - Otimiza carregamento responsivo

- [ ] **Verificar contraste de cores**
  - `--text-secondary: #a3a3a3` sobre `--bg-primary: #0a0a0a` → OK (7.5:1)
  - `--text-muted: #737373` sobre `--bg-primary` → Pode precisar ajuste (4.8:1)

### Média Prioridade

- [ ] **Adicionar skeleton/loading states para componentes lazy**
  - `dynamic()` sem `loading` configurado pode mostrar tela vazia

- [ ] **Preload de imagens críticas do bugatti**
  - As imagens vêm de CDN externa e podem demorar

- [ ] **Usar `<picture>` / srcset para hero em diferentes resoluções**

- [ ] **Adicionar animação de fade-in ao trocar de página**

### Baixa Prioridade

- [ ] **Implementar Service Worker para cache offline**

- [ ] **Adicionar `will-change` em elementos com animação GSAP**

- [ ] **Reduzir CSS não utilizado** (audit via DevTools Coverage)

---

## 🔵 Acessibilidade (WCAG)

- [ ] **Adicionar `aria-label` no mapa do Google no footer**
- [ ] **Garantir foco visível em todos os links e botões**
- [ ] **Adicionar `role="navigation"` no header e footer navs**
- [ ] **Skip link para conteúdo principal** (`Skip to main content`)

---

## 📈 Core Web Vitals (Estimativa)

| Métrica | Estimativa | Alvo |
|---------|-----------|------|
| LCP | ~2.5s (hero image) | < 2.5s ✅ |
| FID/INP | Baixo (pouca interatividade) | < 200ms ✅ |
| CLS | Risco com lazy loading | < 0.1 |
| TTFB | Depende do hosting | < 800ms |

> **Recomendação**: Rodar Lighthouse em produção após deploy para medições reais.

---

*Gerado em 2026-03-08 — Auditoria baseada em análise estática do código fonte.*
