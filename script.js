//Menu
const hamburguer = document.getElementById("hamburguer");
const menuLinks = document.getElementById("menu-links");

hamburguer.addEventListener("click", () => {
    menuLinks.classList.toggle("aberto");
    hamburguer.classList.toggle("aberto");
});

menuLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.classList.remove("aberto");
        hamburguer.classList.remove("aberto");
    });
});


//Abas
const botoesAba = document.querySelectorAll(".aba-botao");

botoesAba.forEach((botao) => {
    botao.addEventListener("click", () => {

        const grupoAbas = botao.parentElement;
        const conteudoAlvo = document.getElementById(botao.dataset.alvo);

        grupoAbas.querySelectorAll(".aba-botao").forEach((b) => {
            b.classList.remove("ativo");
        });

        conteudoAlvo.parentElement
            .querySelectorAll(".aba-conteudo")
            .forEach((c) => {
                c.classList.remove("ativo");
            });

        botao.classList.add("ativo");
        conteudoAlvo.classList.add("ativo");
    });
});
