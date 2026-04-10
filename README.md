# A Alma do Sapato

Website estático para a sapataria **A Alma do Sapato**, localizada no Mercado Municipal de Faro.

## Dados do estabelecimento

- **Morada:** Mercado Municipal de Faro, Piso 1, Loja 3-C 115, Largo Dr. Francisco Sá Carneiro, 8000-151 Faro
- **Telefone:** 309 739 157
- **Facebook:** [A Alma do Sapato](https://www.facebook.com/p/A-Alma-do-Sapato-100080041917645/)
- **Atividade:** Conserto de todo o tipo de sapatos

## Páginas

| Ficheiro | Conteúdo |
|---|---|
| `index.html` | Página inicial com hero, serviços e CTA |
| `servicos.html` | Reparação, manutenção e restauro |
| `contactos.html` | Morada, telefone, mapa e formulário |
| `termos-condicoes.html` | Termos e condições (lei portuguesa) |
| `politica-privacidade.html` | Política de privacidade (RGPD) |
| `livro-reclamacoes.html` | Livro de reclamações e RAL |

## Estrutura

```text
.
├── assets/
│   ├── css/
│   │   └── styles.css      ← design system com animações
│   └── js/
│       └── main.js          ← scroll reveal, menu mobile, header
├── contactos.html
├── index.html
├── livro-reclamacoes.html
├── politica-privacidade.html
├── servicos.html
├── termos-condicoes.html
└── README.md
```

## Funcionalidades

- Design clean e responsivo com tipografia Inter
- Animações suaves de scroll reveal (IntersectionObserver)
- Header sticky com blur e efeito ao scroll
- Menu mobile animado com hamburger toggle
- Formulário de contacto (demo visual)
- Ícone Facebook com SVG inline
- Acessibilidade: `prefers-reduced-motion`, `aria-label`, semântica HTML5

## Como abrir

Basta abrir `index.html` no browser. Não precisa de servidor nem build.

## Próximos passos

- Adicionar NIF da entidade nos textos legais
- Ligar formulário a serviço de envio (Formspree, Netlify Forms, etc.)
- Atualizar coordenadas do Google Maps embed
- Adicionar fotos reais da loja e dos trabalhos
