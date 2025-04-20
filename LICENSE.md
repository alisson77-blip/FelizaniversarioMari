function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerText = "💖 Que seu dia seja tão maravilhoso quanto você! saiba que voce é muito importante pra mim! 🥳";
}
function criarCoracao() {
    const heartsContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 10 + 20 + 'px';
    heart.style.animationDuration = Math.random() * 5 + 3 + 's';

    heartsContainer.appendChild(heart);
}

setInterval(criarCoracao, 650);
