// ============================================================
//  quiz.js — Prisma Cursos
//  Suporta todos os 5 cursos: python, figma, photoshop, js, ia
// ============================================================

const quizData = [
  {
    question: "O que mais chama sua atenção quando você abre um aplicativo ou site novo?",
    answers: [
      { text: "A lógica por trás: como os dados são processados e as coisas funcionam tão rápido", course: "python" },
      { text: "A estrutura e usabilidade: onde os botões estão e como é fácil navegar", course: "figma" },
      { text: "As imagens, as cores e os efeitos visuais impecáveis", course: "photoshop" },
      { text: "Os elementos interativos: animações, cliques e respostas em tempo real", course: "js" },
      { text: "Se parece que o sistema aprende com o usuário e fica mais inteligente com o tempo", course: "ia" }
    ]
  },
  {
    question: "Como você prefere resolver um problema difícil?",
    answers: [
      { text: "Escrevendo uma solução passo a passo que pode ser repetida automaticamente", course: "python" },
      { text: "Desenhando um mapa visual de como as peças se encaixam", course: "figma" },
      { text: "Ajustando elementos até a composição ficar perfeitamente harmônica", course: "photoshop" },
      { text: "Testando comandos no navegador até o comportamento ser exatamente o esperado", course: "js" },
      { text: "Alimentando o sistema com exemplos para ele aprender a resolver sozinho", course: "ia" }
    ]
  },
  {
    question: "Se você pudesse ter um superpoder no mundo digital, qual seria?",
    answers: [
      { text: "Falar a linguagem dos computadores e automatizar qualquer tarefa", course: "python" },
      { text: "Criar interfaces que qualquer pessoa consegue usar sem nem perceber", course: "figma" },
      { text: "Transformar qualquer foto comum em uma obra de arte profissional", course: "photoshop" },
      { text: "Dar vida a qualquer página, fazendo ela reagir e interagir com o usuário", course: "js" },
      { text: "Criar sistemas que entendem texto, imagem e voz como um humano faria", course: "ia" }
    ]
  },
  {
    question: "O que mais te frustra no dia a dia digital?",
    answers: [
      { text: "Fazer tarefas repetitivas que claramente poderiam ser feitas por um script", course: "python" },
      { text: "Usar aplicativos confusos onde nada fica onde deveria ficar", course: "figma" },
      { text: "Ver fotos com cores ruins, iluminação horrível ou edição amadora", course: "photoshop" },
      { text: "Páginas lentas, travadas ou que não funcionam direito no celular", course: "js" },
      { text: "Ferramentas burras que não aprendem seus hábitos nem oferecem sugestões úteis", course: "ia" }
    ]
  },
  {
    question: "Qual dessas atividades você faria por puro prazer?",
    answers: [
      { text: "Escrever um script para organizar arquivos ou baixar dados automaticamente", course: "python" },
      { text: "Prototipar o layout de um aplicativo no papel ou em alguma ferramenta visual", course: "figma" },
      { text: "Retocar fotos, ajustar cores e criar composições digitais", course: "photoshop" },
      { text: "Fazer uma página reagir a cliques, rolagem e inputs com animações suaves", course: "js" },
      { text: "Explorar como um modelo de linguagem ou IA gera respostas tão coerentes", course: "ia" }
    ]
  },
  {
    question: "Como você descreveria seu estilo de trabalho?",
    answers: [
      { text: "Analítico e preciso: prefiro que a máquina faça o trabalho pesado por mim", course: "python" },
      { text: "Estratégico e visual: penso primeiro na experiência de quem vai usar", course: "figma" },
      { text: "Detalhista e criativo: não descanso enquanto o resultado não estiver bonito", course: "photoshop" },
      { text: "Prático e experimental: prefiro codar e ver o resultado na hora no browser", course: "js" },
      { text: "Curioso e investigativo: fico fascinado quando o sistema parece pensar sozinho", course: "ia" }
    ]
  },
  {
    question: "Em qual desses cenários você se sentiria mais útil?",
    answers: [
      { text: "Automatizando relatórios de dados de uma empresa inteira com um único arquivo", course: "python" },
      { text: "Redesenhando o fluxo de um app para que os usuários parem de reclamar", course: "figma" },
      { text: "Criando o material visual de uma campanha que vai aparecer em outdoors", course: "photoshop" },
      { text: "Construindo do zero o site de lançamento de um produto com efeitos modernos", course: "js" },
      { text: "Treinando um chatbot que responde dúvidas dos clientes 24 horas por dia", course: "ia" }
    ]
  },
  {
    question: "Qual frase mais combina com você?",
    answers: [
      { text: "Eu adoro números, lógica e ver o resultado exato de um comando rodando", course: "python" },
      { text: "Eu adoro planejar como as coisas vão se parecer antes mesmo de existirem", course: "figma" },
      { text: "Sou detalhista, adoro retocar imperfeições e brincar com criatividade visual", course: "photoshop" },
      { text: "Fico satisfeito quando uma página que eu fiz funciona perfeitamente em qualquer tela", course: "js" },
      { text: "Me fascina que um sistema possa aprender com dados e melhorar sozinho", course: "ia" }
    ]
  },
  {
    question: "Qual dessas áreas você acha mais relevante para o futuro?",
    answers: [
      { text: "Ciência de dados e automação de processos com código", course: "python" },
      { text: "Design centrado no usuário e acessibilidade em produtos digitais", course: "figma" },
      { text: "Identidade visual, branding e comunicação gráfica digital", course: "photoshop" },
      { text: "Desenvolvimento web e construção de experiências interativas no navegador", course: "js" },
      { text: "Inteligência artificial, modelos de linguagem e sistemas autônomos", course: "ia" }
    ]
  },
  {
    question: "Se você pudesse aprender uma habilidade nova agora, qual seria?",
    answers: [
      { text: "Criar análises de dados e gráficos profissionais com poucas linhas de código", course: "python" },
      { text: "Projetar protótipos interativos que parecem um app de verdade", course: "figma" },
      { text: "Fazer composições e manipulações de imagem dignas de agência", course: "photoshop" },
      { text: "Construir páginas dinâmicas com JavaScript puro, sem depender de frameworks", course: "js" },
      { text: "Integrar modelos de IA em aplicações reais que resolvem problemas cotidianos", course: "ia" }
    ]
  }
];

// ── Metadados de resultado ───────────────────────────────────
const resultMeta = {
  python: {
    title: 'Curso de Python',
    emoji: '🐍',
    image: '../assets/quiz/python.svg',
    tagline: 'Você pensa em lógica, automação e resultados precisos. Python é sua linguagem.',
    desc: 'Aprenda programação, análise de dados e automação com uma das linguagens mais poderosas do mundo.',
    color: '#306998'
  },
  figma: {
    title: 'Curso de Figma',
    emoji: '🎨',
    image: '../assets/quiz/figma.svg',
    tagline: 'Você valoriza a experiência do usuário e sabe que design é estratégia.',
    desc: 'Crie protótipos, interfaces e fluxos de navegação profissionais do zero.',
    color: '#A259FF'
  },
  photoshop: {
    title: 'Curso de Photoshop',
    emoji: '🖼️',
    image: '../assets/quiz/photoshop.svg',
    tagline: 'Olho clínico para detalhes visuais e criatividade são seus pontos fortes.',
    desc: 'Domine edição de imagens, composições e criações gráficas de nível profissional.',
    color: '#31A8FF'
  },
  js: {
    title: 'Curso de JavaScript',
    emoji: '⚡',
    image: '../assets/courses/javascript.png',
    tagline: 'Você quer dar vida às páginas e construir experiências interativas de verdade.',
    desc: 'Aprenda a criar páginas web dinâmicas, manipular o DOM e dar comportamento a qualquer interface.',
    color: '#F7DF1E'
  },
  ia: {
    title: 'Inteligência Artificial',
    emoji: '🤖',
    image: '../assets/courses/claude.png',
    tagline: 'Você está sempre um passo à frente, fascinado por sistemas que aprendem.',
    desc: 'Explore os fundamentos de IA e machine learning com ferramentas modernas e aplicações práticas.',
    color: '#10B981'
  }
};

// ── Nomes legíveis para o placar ────────────────────────────
const courseLabels = {
  python:     'Python',
  figma:      'Figma',
  photoshop:  'Photoshop',
  js:         'JavaScript',
  ia:         'IA'
};

// ── Estado ──────────────────────────────────────────────────
const selections = new Array(quizData.length).fill(null);

// ── Elementos do DOM ────────────────────────────────────────
const quizContainer = document.getElementById('quiz-container');
const submitBtn     = document.getElementById('submit-btn');
const restartBtn    = document.getElementById('restart-btn');

// ── Renderiza todas as perguntas ────────────────────────────
function renderAllQuestions() {
  quizContainer.innerHTML = '';

  quizData.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card';

    // Cabeçalho
    const header = document.createElement('div');
    header.className = 'q-header';

    const number = document.createElement('div');
    number.className = 'q-number';
    number.textContent = idx + 1;

    const qtext = document.createElement('div');
    qtext.className = 'q-text';
    qtext.textContent = q.question;

    header.appendChild(number);
    header.appendChild(qtext);

    // Opções
    const options = document.createElement('ul');
    options.className = 'options-list';

    q.answers.forEach((ans, aidx) => {
      const li = document.createElement('li');
      li.className = 'option-item';

      const letter = document.createElement('div');
      letter.className = 'option-letter';
      letter.textContent = String.fromCharCode(97 + aidx);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.textContent = ans.text;

      btn.addEventListener('click', () => {
        const prev = options.querySelector('.option-btn.selected');
        if (prev) prev.classList.remove('selected');
        btn.classList.add('selected');
        selections[idx] = ans.course;
      });

      li.appendChild(letter);
      li.appendChild(btn);
      options.appendChild(li);
    });

    card.appendChild(header);
    card.appendChild(options);
    quizContainer.appendChild(card);
  });
}

// ── Calcula o resultado ──────────────────────────────────────
function calculateResult() {
  const scores = { python: 0, figma: 0, photoshop: 0, js: 0, ia: 0 };
  selections.forEach(s => { if (s) scores[s]++; });

  const recommended = Object.keys(scores).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  return { recommended, scores };
}

// ── Renderiza o resultado ────────────────────────────────────
function renderResult(result) {
  const meta   = resultMeta[result.recommended];
  const scores = result.scores;

  // Placar — ordena do maior para o menor
  const scoreboard = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([key, val]) => {
      const pct  = Math.round((val / quizData.length) * 100);
      const meta = resultMeta[key];
      const isWinner = key === result.recommended;
      return `
        <div class="score-row${isWinner ? ' score-row--winner' : ''}">
          <span class="score-label">${meta.emoji} ${courseLabels[key]}</span>
          <div class="score-bar-wrap">
            <div class="score-bar-fill" style="width:${pct}%; background:${meta.color}"></div>
          </div>
          <span class="score-pct">${val}/${quizData.length}</span>
        </div>`;
    }).join('');

  quizContainer.innerHTML = `
    <div class="results-container">
      <div class="result-card result-card--${result.recommended}">

        <div class="result-image-wrap">
          <img
            class="result-image result-image--${result.recommended}"
            src="${meta.image}"
            alt="${meta.title}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
          />
          <span class="result-badge-fallback" style="display:none">${meta.emoji}</span>
        </div>

        <div class="result-copy">
          <p class="result-label">Curso recomendado para você</p>
          <h2 class="result-title">${meta.title}</h2>
          <p class="result-tagline">${meta.tagline}</p>
          <p class="result-desc">${meta.desc}</p>
        </div>

        <div class="result-scoreboard">
          <p class="scoreboard-title">Sua pontuação por curso</p>
          ${scoreboard}
        </div>

        <a href="courses.html" class="result-back-btn">Ver todos os cursos →</a>

      </div>
    </div>`;
}

// ── Evento: Enviar ───────────────────────────────────────────
submitBtn.addEventListener('click', () => {
  const missing = selections.findIndex(s => s === null);
  if (missing !== -1) {
    const cards = document.querySelectorAll('.question-card');
    cards[missing].scrollIntoView({ behavior: 'smooth', block: 'center' });
    cards[missing].classList.add('question-card--error');
    setTimeout(() => cards[missing].classList.remove('question-card--error'), 1800);
    return;
  }

  const result = calculateResult();
  renderResult(result);
  submitBtn.style.display = 'none';
  if (restartBtn) restartBtn.style.display = 'inline-block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Evento: Reiniciar ────────────────────────────────────────
if (restartBtn) {
  restartBtn.addEventListener('click', () => {
    selections.fill(null);
    renderAllQuestions();
    submitBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Init ─────────────────────────────────────────────────────
renderAllQuestions();