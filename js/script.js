// Pegando os elementos necessarios
const options = document.querySelectorAll(".option_image"),
playerImg = document.querySelector(".player_result img"),
computerImg = document.querySelector(".computer_result img"), 
resultText = document.querySelector(".result h2"),

choices = ["pedra", "papel", "tesoura"]; // Lista de opções disponíveis

// Percorre cada opção e adiciona o clique
options.forEach((option, index) => {
  option.addEventListener("click", () => {
    // Marca a opção clicada como ativa
    options.forEach(o => o.classList.remove("active")); // Remove todos como ativo
    option.classList.add("active"); // Deixa qual você clicou como Ativo

    // Escolha do Jogador. Pega o index das opções e atribui a que foi clicada na imagem que representa o player
    const playerChoice = choices[index]; 
    playerImg.src = `img/${playerChoice}.png`; 

    // Sorteio da escolha do computador
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    computerImg.src = `img/${computerChoice}.png`;

    // Verificação de quem ganhou

    // Player Ganha 
    if(playerChoice==="pedra" && computerChoice==="tesoura" ||
        playerChoice==="papel" && computerChoice==="pedra" ||
        playerChoice==="tesoura" && computerChoice==="papel"){
        resultText.textContent = "Você ganhou!!";
    } 
    else if(playerChoice===computerChoice) {
        resultText.textContent = "Empate!!";
    }
    else {
        resultText.textContent = "Você perdeu!!";
    }
  });
});
