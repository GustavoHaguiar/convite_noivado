document.addEventListener('DOMContentLoaded', () => {
    const capaEsquerda = document.querySelector('.capa-esquerda');
    const capaDireita = document.querySelector('.capa-direita');
    const container = document.querySelector('.convite-container');

    const toggleConvite = () => {
        container.classList.toggle('aberto');
    };

    capaEsquerda.addEventListener('click', toggleConvite);
    capaDireita.addEventListener('click', toggleConvite);
});