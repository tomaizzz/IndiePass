document.addEventListener("DOMContentLoaded", function () {
    // Adiciona efeito de "saltar" nas imagens ao passar o mouse
    document.querySelectorAll(".game-card").forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease";
        });
        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Lógica para alternar os jogos recém-adicionados
    const jogos = [
        { titulo: "UNDERTALE", imagem: "imagens/undertale.png" },
        { titulo: "HOLLOW KNIGHT", imagem: "imagens/hollow_knight.png" },
        { titulo: "CELESTE", imagem: "imagens/celeste.png" }
    ];

    let indiceAtual = 0;
    const tituloRecemAdicionado = document.querySelector(".display-4");
    const backgroundRecemAdicionado = document.querySelector("main");
    
    function atualizarJogo() {
        tituloRecemAdicionado.textContent = jogos[indiceAtual].titulo;
        backgroundRecemAdicionado.style.backgroundImage = `url(${jogos[indiceAtual].imagem})`;
        backgroundRecemAdicionado.style.backgroundSize = "cover";
        backgroundRecemAdicionado.style.backgroundPosition = "center";
    }
    
    atualizarJogo();
    
    document.getElementById("btnProximo").addEventListener("click", function () {
        indiceAtual = (indiceAtual + 1) % jogos.length;
        atualizarJogo();
    });
    
    document.getElementById("btnAnterior").addEventListener("click", function () {
        indiceAtual = (indiceAtual - 1 + jogos.length) % jogos.length;
        atualizarJogo();
    });
});