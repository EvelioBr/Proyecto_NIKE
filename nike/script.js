let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");



function mudarVisual(cor, imagem){
    tenis.classList.add("cambio-efecto");
    body.style.backgroundColor = cor;
    setTimeout (() => {
        tenis.src = imagem;
        tenis.classList.remove("cambio-efecto");
} , 500);
}
    