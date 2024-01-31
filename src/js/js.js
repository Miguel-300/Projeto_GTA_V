const botao = document.querySelector(".button_plataformas");

const elementoPlataformas = document.querySelector(".button_plataformas .plataformas");

botao.addEventListener("click", () => {

    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    if(botaoEstaAberto) {
    elementoPlataformas.classList.remove("ativo");
}else{
    elementoPlataformas.classList.add("ativo");
}
});