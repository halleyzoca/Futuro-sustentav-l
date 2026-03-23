// Selecionamos o botão e a página principal
const botao = document.getElementById('btnInterativo');
const primeiraPagina = document.getElementById('slide1');

// Função que muda a cor de fundo quando clica
botao.addEventListener('click', function() {
    // Se a cor atual for branca, muda para rosa. Se for rosa, volta para branco.
    if (primeiraPagina.style.backgroundColor === 'rgb(255, 193, 204)') {
        primeiraPagina.style.backgroundColor = '#fff';
        botao.innerText = "Mudar para Rosa";
    } else {
        primeiraPagina.style.backgroundColor = '#ffc1cc'; // Rosa claro
        botao.innerText = "Voltar ao normal";
    }
});

// Comentário para você aprender: 
// O 'addEventListener' fica "ouvindo" o clique do usuário.
// O 'if/else' é a lógica que decide qual cor colocar.