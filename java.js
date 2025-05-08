function planejarJantar() {
    const dataEscolhida = document.getElementById('data-jantar').value;
    const lugarEscolhido = document.getElementById('lugar-jantar').value;

    if (!dataEscolhida || !lugarEscolhido) {
        alert("Por favor, preencha tanto o lugar quanto a data.");
        return;
    }

    const novoEncontro = {
        lugar: lugarEscolhido,
        data: dataEscolhida
    };

    const encontrosSalvos = JSON.parse(localStorage.getItem('jantares')) || [];
    encontrosSalvos.push(novoEncontro);
    localStorage.setItem('jantares', JSON.stringify(encontrosSalvos));

    adicionarEncontroNaLista(novoEncontro);

    document.getElementById('data-jantar').value = '';
    document.getElementById('lugar-jantar').value = '';
}

function adicionarEncontroNaLista(encontro) {
    const lista = document.getElementById('lista-jantares');
    const item = document.createElement('li');
    item.innerHTML = `<strong>${encontro.lugar}</strong> – <em>${encontro.data}</em>`;
    lista.appendChild(item);
}

window.onload = function () {
    const encontrosSalvos = JSON.parse(localStorage.getItem('jantares')) || [];
    encontrosSalvos.forEach(encontro => adicionarEncontroNaLista(encontro));
};
