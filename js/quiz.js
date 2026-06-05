// Full quiz implementation: render all questions as cards with pill options and compute result
const quizData = [
	{
		question: "O que você acha mais interessante quando olha para um aplicativo ou site novo?",
		answers: [
			{ text: "A estrutura e usabilidade: onde os botões estão e como é fácil navegar pelas telas", course: "figma" },
			{ text: "A inteligência por trás dele: como os dados são processados e como ele funciona tão rápido", course: "python" },
			{ text: "A estética visual: as cores, as imagens perfeitas e os efeitos gráficos", course: "photoshop" }
		]
	},
	{
		question: "Como você prefere resolver um problema?",
		answers: [
			{ text: "Criando uma lógica passo a passo para automatizar a solução", course: "python" },
			{ text: "Desenhando um rascunho ou mapa visual de como as coisas devem se conectar", course: "figma" },
			{ text: "Manipulando elementos visuais até que a composição fique perfeitamente harmônica", course: "photoshop" }
		]
	},
	{
		question: "Se você tivesse que escolher um \"superpoder\" no mundo digital, qual seria?",
		answers: [
			{ text: "Falar a linguagem dos computadores e criar programas do zero", course: "python" },
			{ text: "Criar interfaces incríveis que guiam o usuário intuitivamente", course: "figma" },
			{ text: "Transformar qualquer imagem comum em uma obra de arte ou montagem realista", course: "photoshop" }
		]
	},
	{
		question: "O que mais te frustra no dia a dia digital?",
		answers: [
			{ text: "Ver fotos com má qualidade, iluminação ruim ou cores sem vida", course: "photoshop" },
			{ text: "Usar um aplicativo confuso onde você não acha o que precisa", course: "figma" },
			{ text: "Fazer tarefas repetitivas que poderiam ser feitas por um robô", course: "python" }
		]
	},
	{
		question:  "Qual destas frases mais parece com você?",
		answers: [
			{ text: "Eu adoro planejar como as coisas vão se parecer antes mesmo de elas existirem", course: "figma" },
			{ text: "Eu gosto de números, lógica e de ver o resultado exato de um comando", course: "python" },
			{ text: "Eu sou detalhista, adoro retocar imperfeições e brincar com criatividade visual", course: "photoshop" }
		]
	}
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

const resultMeta = {
  python: {
    title: 'Python',
    tagline: 'Você gosta de lógica, automação e resultados claros.',
    image: '../assets/quiz/python.svg'
  },
  figma: {
    title: 'Figma',
    tagline: 'Você valoriza interfaces intuitivas e experiências visuais.',
    image: '../assets/quiz/figma.svg'
  },
  photoshop: {
    title: 'Photoshop',
    tagline: 'Você curte retoques visuais e criatividade digital.',
    image: '../assets/quiz/photoshop.svg'
  }
};


const selections = new Array(quizData.length).fill(null);

function renderAllQuestions() {
	quizContainer.innerHTML = '';
	quizData.forEach((q, idx) => {
		const card = document.createElement('div');
		card.className = 'question-card';

		const header = document.createElement('div');
		header.className = 'q-header';
		const number = document.createElement('div');
		number.className = 'q-number';
		number.textContent = (idx + 1);
		const qtext = document.createElement('div');
		qtext.className = 'q-text';
		qtext.textContent = q.question;
		header.appendChild(number);
		header.appendChild(qtext);

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
				// clear previous selection for this question
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

function calculateResult() {
	const scores = { python: 0, figma: 0, photoshop: 0 };
	selections.forEach(s => {
		if (s) scores[s]++;
	});
	const max = Math.max(scores.python, scores.figma, scores.photoshop);
	let recommended = 'python';
	if (scores.figma === max && scores.figma > 0) recommended = 'figma';
	else if (scores.photoshop === max && scores.photoshop > 0) recommended = 'photoshop';
	return { recommended, scores };
}

submitBtn.addEventListener('click', () => {
	const missing = selections.findIndex(s => s === null);
	if (missing !== -1) {
		window.scrollTo({ top: document.querySelectorAll('.question-card')[missing].offsetTop - 80, behavior: 'smooth' });
		alert('Por favor responda todas as perguntas antes de enviar.');
		return;
	}
	const result = calculateResult();
	const meta = resultMeta[result.recommended];
	quizContainer.innerHTML = `
		<div class="results-container">
			<div class="result-card">
				<img class="result-image result-image--${result.recommended}" src="${meta.image}" alt="${meta.title}" />
				<div class="result-copy">
					<h2>🎯 Curso recomendado: ${meta.title}</h2>
					<p class="result-tagline">${meta.tagline}</p>
					<p class="result-details">Python: ${result.scores.python} | Figma: ${result.scores.figma} | Photoshop: ${result.scores.photoshop}</p>
				</div>
			</div>
		</div>`;
	submitBtn.style.display = 'none';
	if (restartBtn) restartBtn.style.display = 'inline-block';
});

renderAllQuestions();

if (restartBtn) {
	restartBtn.addEventListener('click', () => {
		// reset selections
		for (let i = 0; i < selections.length; i++) selections[i] = null;
		renderAllQuestions();
		submitBtn.style.display = 'inline-block';
		restartBtn.style.display = 'none';
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}

