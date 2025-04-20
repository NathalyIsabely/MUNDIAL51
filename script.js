nomeTime = document.querySelector('.time');
botao = document.querySelector('.botao');
pagina = document.querySelector('.main');


botao.addEventListener('click', function(){
    const valor = nomeTime.value.toUpperCase();
    console.log(valor);

    if (valor == 'PALMEIRAS'){
        pirassunungaCup();
    }
    else {
        alert('Pare de mentir e digite certo!');
        valor = '';
    }
})

function pirassunungaCup(){
  pagina.innerHTML =
    `<section class="main">
    <h1 class="default verde">CAMPEÃO PIRASSUNUNGA 1951</h1>
    <img class="51" src="/pirassunga.jpg" alt="campeaomundial">
    </section>`
}
