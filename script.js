// 9 perguntas sobre o BTS
const perguntas = [
    {
      pergunta: "Qual o nome verdadeiro do RM?",
      respostas: ["Kim Taehyung", "Kim Namjoon", "Min Yoongi"],
      correta: 1
    },
    {
      pergunta: "Quem é o membro mais velho do BTS?",
      respostas: ["Jin", "Suga", "RM"],
      correta: 0
    },
    {
      pergunta: "Qual foi a música de estreia do BTS?",
      respostas: ["No More Dream", "Boy In Luv", "N.O"],
      correta: 0
    },
    {
      pergunta: "Em que ano o BTS foi formado oficialmente?",
      respostas: ["2012", "2013", "2014"],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do fandom do BTS?",
      respostas: ["Bangtan Army", "ARMY", "Bulletproof"],
      correta: 1
    },
    {
      pergunta: "Quem é conhecido por sua risada contagiante e personalidade ensolarada?",
      respostas: ["J-Hope", "Jungkook", "RM"],
      correta: 0
    },
    {
      pergunta: "Qual desses membros é conhecido por ser produtor e rapper?",
      respostas: ["Jin", "V", "Suga"],
      correta: 2
    },
    {
      pergunta: "Qual foi o primeiro Grammy que o BTS foi indicado?",
      respostas: ["Melhor Álbum de K-pop", "Melhor Performance de Duo/Grupo Pop", "Artista Revelação"],
      correta: 1
    },
    {
      pergunta: "Qual membro é chamado de “Golden Maknae”?",
      respostas: ["Jungkook", "Jimin", "V"],
      correta: 0
    }
  ];
  
  // Monta o quiz dinamicamente
  function criarQuiz() {
    const form = document.getElementById('quizForm');
    perguntas.forEach((q, index) => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${index + 1}. ${q.pergunta}</p>` +
        q.respostas.map((resp, i) =>
          `<label><input type="radio" name="q${index}" value="${i}" /> ${resp}</label><br>`
        ).join('');
      form.appendChild(div);
    });
  }
  
  // Verifica respostas e exibe mensagem final personalizada
  function verificarRespostas() {
    let acertos = 0;
    perguntas.forEach((q, i) => {
      const resposta = document.querySelector(`input[name="q${i}"]:checked`);
      if (resposta && parseInt(resposta.value) === q.correta) {
        acertos++;
      }
    });
  
    const mensagemFinal = `
      🎉 Você completou o desafio BTS! 🎉<br>
      Acertou <strong>${acertos} de ${perguntas.length}</strong> perguntas.<br><br>
      
      💜 <strong>MENSAGEM ESPECIAL:</strong><br>
      <strong>FELIZ ANIVERSÁRIO, MARI!</strong> 🎂💜<br><br>
      Que aproveite muito seu dia, gosto muito do jeito que você é e tomara que nunca mude o seu jeito.<br>
      Você é uma pessoa tão incrível que você não imagina.<br>
      Eu sei que às vezes você se acha chata, mas pra mim não é.<br>
      E quando converso com você, me alegra – por mais que seja uma simples conversa.<br>
      Saiba que pode contar comigo sempre, porque oque você precisar estarei aqui.<br>
      E o presente que lhe dei espero ter gostado mesmo sendo desses coreanos🙄🙄.<br>
      Quero te dizer também que esses ultimos tempos que agente tem se falado.<br>
      singnificou muito pra mim,estava me sentindo pouco sozinho e você foi uma amiga.<br>
      aproveitei cada segundo que falei com você, e aproveito muito quando manda ttk pra mim.<br>
      Cada vez que vejo um cachorro sempre vou lembrar dos seus videos😂😂😂.<br>
      Talvez um dia saiba o quanto gosto de você,eu sempre estarei escolherei você❤️.<br>
      Obrigado por tudo❤️❤️❤️.<br><br>
      Lembre-se do que eu falei: <strong>você é uma obra de arte!</strong> 🥰 🥰😍 😍 😍<br><br>
      💜 Você merece tudo de mais lindo nesse mundo, Mari!! 💜
    `;
  
    document.getElementById('resultado').innerHTML = mensagemFinal;
  }
  
  // Animação de corações caindo 💖
  function coracoesCaindo() {
    const container = document.querySelector('.hearts-container');
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 300);
  }
  
  // Inicializa tudo ao carregar
  criarQuiz();
  coracoesCaindo();
  
