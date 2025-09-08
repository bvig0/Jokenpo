// Pegando os elementos DOM

const gameContainer = document.querySelector(".container"),
    user = document.querySelector(".user_result img"),
    cpu = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result h2"),
    op = document.querySelectorAll(".option_image");

op.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        op.forEach((image2, index2) => {
            // Se a imagem clicada atual for diferente da clicada, a antiga perde o "active"
            index !== index2 && image2.classList.remove("active");
        });

        let imgSrc = e.target.querySelector("img").src; // Cria uma variavel que pega a imagem clicada
        user.src = imgSrc; // Faz a imagem clicada ser a mesma imagem que representa o usuario acima

        let cpuNumber = Math.floor(Math.random() * 3);
        let cpuImg = ["img/rock.png", "img/paper.png", "img/scissors.png"];
        cpu.src = cpuImg[cpuNumber]
    });
});