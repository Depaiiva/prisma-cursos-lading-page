# Landing Page - Prisma Cursos

Este projeto consiste no desenvolvimento da página institucional da **Prisma Cursos**, focada em uma interface intuitiva, responsiva e alinhada com as necessidades dos alunos.

---

## Participantes

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Depaiiva">
        <img style="border-radius: 50%;" src="https://github.com/Depaiiva.png" width="150px" alt="Carlos Henrique de Paiva Munis"/><br />
        <sub><b>Carlos Henrique de Paiva Munis</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/thatsrenan">
        <img style="border-radius: 50%;" src="https://github.com/thatsrenan.png" width="150px" alt="Renan Curione de Castro"/><br />
        <sub><b>Renan Curione de Castro</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/DanielAlmeidaFrota">
        <img style="border-radius: 50%;" src="https://github.com/DanielAlmeidaFrota.png" width="150px" alt="Daniel Almeida Frota"/><br />
        <sub><b>Daniel Almeida Frota</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/marizedu">
        <img style="border-radius: 50%;" src="https://github.com/marizedu.png" width="150px" alt="Eduardo Mariz de Souza"/><br />
        <sub><b>Eduardo Mariz de Souza</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/RenatoMTorres">
        <img style="border-radius: 50%;" src="https://github.com/RenatoMTorres.png" width="150px" alt="Renato Henrique Martins Torres"/><br />
        <sub><b>Renato Henrique Martins Torres</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ThalesS7">
        <img style="border-radius: 50%;" src="https://github.com/ThalesS7.png" width="150px" alt="Thales Sanjuan Farias de Oliveira"/><br />
        <sub><b>Thales Sanjuan Farias de Oliveira</b></sub>
      </a>
    </td>
  </tr>
</table>

---

## Estrutura do Projeto

```
prisma-cursos-landing-page/
├── assets/                        → imagens, ícones e logo
├── css/
│   ├── global/
│   │   ├── reset.css              → zera estilos padrão do navegador
│   │   ├── variables.css          → todas as variáveis CSS do projeto
│   │   ├── typography.css         → estilos de headings e parágrafos
│   │   └── global.css             → estilos base (body, container, section)
│   └── components/
│       ├── navbar.css             → barra de navegação
│       ├── footer.css             → rodapé
│       ├── buttons.css            → classes de botões reutilizáveis
│       └── progressbar.css        → barra de progresso
├── js/
│   ├── navbar.js                  → ativa botão ativo e barra de progresso
│   └── main.js                    → scroll suave e animação reveal ao rolar a página
├── pages/
│   ├── who-we-are.html            → Quem Somos
│   ├── courses.html               → Cursos
│   ├── testimonials.html          → Depoimentos
│   ├── contact.html               → Contato
│   ├── quiz.html                  → Quiz
│   └── confirmation-form-contact.html → Confirmação de contato
└── index.html                     → Página inicial
```

---

## Guia de Desenvolvimento

### Iniciando o desenvolvimento de uma seção

Todas as páginas já estão criadas com navbar e footer configurados. Para desenvolver o conteúdo de uma página:

1. Abra o arquivo `.html` correspondente à sua Issue em `pages/`
2. Adicione o conteúdo dentro da tag `<main>`
3. Crie ou edite o arquivo CSS da página em `css/pages/`
4. Certifique-se de que o CSS da página está linkado no `<head>`

### Fontes disponíveis

| Variável | Fonte | Uso |
|---|---|---|
| `var(--font-display)` | Space Grotesk | Títulos e headings |
| `var(--font-body)` | Space Grotesk | Corpo do texto |

A fonte Space Grotesk já está importada no `index.html` e em todas as páginas via Google Fonts.

---

## Variáveis e Classes Disponíveis

> Sempre use variáveis CSS ao invés de valores hardcoded. Isso garante consistência visual e facilita futuras alterações.

### Cores

```css
/* Primárias */
--color-primary:       #7C3AED   /* roxo principal — botões, destaques */
--color-primary-light: #A78BFA   /* roxo claro — hovers, badges */
--color-primary-dark:  #5B21B6   /* roxo escuro — hover de botões ativos */

/* Apoio */
--color-accent:        #F59E0B   /* amarelo âmbar — chamadas de atenção */
--color-success:       #10B981   /* verde — mensagens de sucesso */
--color-error:         #EF4444   /* vermelho — mensagens de erro */

/* Neutros */
--color-bg:            #E9D5FF   /* fundo padrão de todas as páginas */
--color-bg-soft:       #F5F3FF   /* fundo alternativo mais suave */
--color-text:          #1F1235   /* texto principal */
--color-text-muted:    #6B7280   /* texto secundário, legendas */
--color-border:        #E5E7EB   /* bordas neutras */
```

### Espaçamentos

```css
--spacing-xs:   0.25rem   /*  4px */
--spacing-sm:   0.5rem    /*  8px */
--spacing-md:   1rem      /* 16px */
--spacing-lg:   1.5rem    /* 24px */
--spacing-xl:   2rem      /* 32px */
--spacing-2xl:  3rem      /* 48px */
--spacing-3xl:  4rem      /* 64px */
--spacing-4xl:  6rem      /* 96px */
```

### Bordas e Raios

```css
--radius-sm:    6px
--radius-md:    12px
--radius-lg:    20px       /* usado na navbar e footer */
--radius-full:  9999px     /* completamente arredondado — botões, pills */
```

### Sombras

```css
--shadow-sm:   sombra sutil — cards, navbar
--shadow-md:   sombra média roxa — botões primários
--shadow-lg:   sombra forte roxa — elementos em destaque
```

### Transições

```css
--transition-fast:  150ms ease   /* hovers rápidos */
--transition-base:  300ms ease   /* transições padrão */
--transition-slow:  500ms ease   /* animações mais suaves */
```

### Classes de Layout

```css
.container        /* largura máxima de 1200px, centralizada com padding lateral */
```

### Classes de Animação

```css
.reveal           /* elemento começa invisível e desliza para cima ao entrar na tela */
```

Adicione `.reveal` em qualquer elemento que queira animar ao rolar a página:

```html
<div class="card reveal">...</div>
<h2 class="section-title reveal">...</h2>
<p class="reveal">...</p>
```

### Classes de Tipografia

```css
.section-title      /* título de seção — fonte display, centralizado */
.section-subtitle   /* subtítulo de seção — centralizado, max 600px */
.text-highlight     /* texto em roxo --color-primary */
.text-muted         /* texto em cinza --color-text-muted */
```

### Classes de Botões

```css
/* Estrutura base — sempre combine .btn com uma variante */
.btn                /* base: padding, border-radius, font, transição */
.btn-primary        /* fundo roxo, texto branco, sombra */
.btn-outline        /* fundo transparente, borda e texto roxo */
.btn-lg             /* tamanho maior — padding e font-size aumentados */

/* Exemplos de uso */
<button class="btn btn-primary">Começar agora</button>
<button class="btn btn-outline">Saiba mais</button>
<button class="btn btn-primary btn-lg">Inscreva-se</button>
```

---

## Convenções de Código

- Use sempre `var(--nome-da-variavel)` ao invés de valores fixos como `#7C3AED` ou `16px`
- **IDs** apenas para elementos únicos: `#navbar`, `#footer`, `#hero`
- **Classes** para tudo que pode se repetir ou ser reutilizado
- Adicione comentário de seção no topo de cada bloco CSS: `/* ---------- Nome ---------- */`
- Breakpoints padrão do projeto:
  - Tablet: `max-width: 1024px`
  - Mobile: `max-width: 768px`
  - Mobile pequeno: `max-width: 480px`

---

## Fluxo de Trabalho

Para garantir a organização e a qualidade do código, seguimos um processo de desenvolvimento ágil:

1. **Kanban:** Todos os desenvolvedores devem acessar a aba **Projects** no repositório.
2. **Issues:** Antes de iniciar qualquer tarefa, verifique as *Issues* atribuídas a você no quadro Kanban.
3. **Checklist:** É obrigatório atentar-se ao checklist presente em cada *Issue* (Definition of Ready - DoR e Definition of Done - DoD). Nenhuma tarefa deve ser considerada concluída sem que todos os itens do checklist da DoD estejam marcados.

---

## Deploy e Produção

### Critérios para Deploy

O deploy em produção (GitHub Pages) só deve ser realizado após:

- A conclusão de todas as tarefas da *Issue* correspondente (conforme DoD)
- A realização do *Code Review* por pelo menos um outro membro do grupo
- A aprovação do *Merge Request* para a branch principal (`main`)

### Como realizar o Deploy

Qualquer integrante da equipe está apto a realizar o deploy seguindo estes passos:

1. Acesse **Settings** > **Pages** no menu do repositório
2. Em **Source**, certifique-se de que a opção "Deploy from a branch" está selecionada e a branch `main` está configurada
3. Após o *merge* na `main`, o GitHub iniciará automaticamente o processo de publicação. Você pode acompanhar o progresso na aba **Actions**
4. O link de acesso ao site será disponibilizado nas configurações de *Pages* assim que o processo for concluído
