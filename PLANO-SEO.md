# Plano SEO — Atelier Fiães

## O que é SEO?
SEO (Search Engine Optimization) = otimização para motores de busca. O objetivo é que quando alguém pesquise "sapateiro Faro", "conserto sapatos Faro", "copias chaves Faro", etc., o site apareça nos primeiros resultados do Google.

---

## 1. Coisas que eu posso fazer já no código (SEO On-Page)

### 1.1 Meta tags em todas as páginas
- [x] `<title>` — já temos, mas vamos melhorar com keywords
- [x] `<meta name="description">` — já temos, vamos otimizar
- [ ] `<meta name="keywords">` — adicionar
- [ ] Open Graph tags (Facebook/WhatsApp) — `og:title`, `og:description`, `og:image`
- [ ] Tag canonical `<link rel="canonical" href="...">`

### 1.2 Schema.org / Dados Estruturados (Google Rich Results)
Isto é **o mais importante** — diz ao Google exatamente o que é o negócio.
- [ ] Adicionar `LocalBusiness` schema com:
  - Nome, morada, telefone, horário
  - Coordenadas GPS
  - Tipo de negócio (ShoeRepair)
  - Área de serviço (Faro)
- [ ] Adicionar `BreadcrumbList` schema

### 1.3 Performance e Técnico
- [ ] Comprimir imagens (as atuais têm 2MB+ cada — deviam ter <200KB)
- [ ] Converter imagens para WebP com fallback
- [ ] Adicionar `<link rel="icon">` (favicon)
- [ ] Criar `sitemap.xml`
- [ ] Criar `robots.txt`
- [ ] Adicionar atributos `alt` descritivos em todas as imagens (já temos maioria)
- [ ] Minificar CSS/JS para produção

### 1.4 Conteúdo e Keywords
Keywords principais a incluir naturalmente nos textos:
- "sapateiro Faro"
- "conserto sapatos Faro"
- "reparação calçado Faro"
- "cópias chaves Faro"
- "mercado municipal Faro"
- "atelier fiães"
- "sapataria Faro"
- "arranjo sapatos Algarve"

---

## 2. Coisas fora do código (SEO Off-Page)

### 2.1 Google Business Profile (OBRIGATÓRIO — o mais importante de tudo!)
1. Ir a https://business.google.com
2. Criar/reclamar o perfil "Atelier Fiães"
3. Preencher TUDO:
   - Nome do negócio
   - Categoria: "Sapateiro" / "Shoe Repair Shop"
   - Morada exata (Mercado Municipal de Faro, Piso 1, Loja 3-C 115)
   - Telefone: 934 117 937
   - Horário completo
   - Website: URL do site
   - Fotos da loja, do trabalho, da fachada
4. Pedir reviews/avaliações a clientes satisfeitos (isto é OURO para o ranking)

### 2.2 Diretórios e Listagens
Registar o negócio em:
- [ ] Google Business Profile
- [ ] Facebook Page (já existe — manter ativa)
- [ ] Páginas Amarelas (pai.pt)
- [ ] Yelp Portugal
- [ ] TripAdvisor (se aplicável)
- [ ] Cylex Portugal

### 2.3 Reviews / Avaliações
- Pedir a cada cliente que deixe uma review no Google
- Responder a TODAS as reviews (positivas e negativas)
- Meta: pelo menos 10-15 reviews com 4.5+ estrelas

---

## 3. Prioridades (por ordem)

| # | Ação | Impacto | Dificuldade |
|---|------|---------|-------------|
| 1 | **Google Business Profile** | ⭐⭐⭐⭐⭐ | Fácil |
| 2 | **Schema.org LocalBusiness** | ⭐⭐⭐⭐⭐ | Eu faço |
| 3 | **Comprimir imagens** | ⭐⭐⭐⭐ | Eu faço |
| 4 | **sitemap.xml + robots.txt** | ⭐⭐⭐⭐ | Eu faço |
| 5 | **Open Graph tags** | ⭐⭐⭐ | Eu faço |
| 6 | **Reviews no Google** | ⭐⭐⭐⭐⭐ | Pedir aos clientes |
| 7 | **Favicon** | ⭐⭐ | Eu faço |
| 8 | **Diretórios online** | ⭐⭐⭐ | Registar manualmente |

---

## 4. O que eu implemento agora no código

Quando quiseres avançar, diz-me e eu:
1. Adiciono Schema.org JSON-LD em todas as páginas
2. Adiciono Open Graph + Twitter Card meta tags
3. Crio `sitemap.xml` e `robots.txt`
4. Otimizo os `<title>` e `<meta description>` com keywords
5. Adiciono canonical URLs
6. Crio favicon a partir do logo

**O Google Business Profile tens de ser TU a criar** (precisa de verificação com o negócio real — carta ou telefonema do Google).

---

## Nota sobre expectativas
- SEO local (Faro) é mais fácil que SEO nacional — menos concorrência
- Resultados demoram 2-6 semanas a aparecer no Google
- O Google Business Profile é responsável por ~50% da visibilidade local
- Reviews são o segundo fator mais importante
- O site em si (código) é o terceiro fator
