let vetor = [];

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let numMedicos = document.getElementById('numMedicos').value;
    let data = document.getElementById('data').value;



    if (nome == null || nome == '' || rua == null || rua == '' || numero == null || numero == '' || bairro == null || bairro == '' || cidade == null || cidade == '' || estado == null || estado == '' || numMedicos == null || numMedicos == '' || data == null || data == '') {
        alert("Preencha todos os campos")
        nome = '';
        rua = '';
        numero = '';
        bairro = '';
        cidade = '';
        estado = '';
        numMedicos = '';
        data = '';
        return
    }

    vetor.push({ nome: nome, rua: rua, numero: numero, bairro: bairro, cidade: cidade, estado: estado, numMedicos: numMedicos, data: data });

    document.getElementById('nome').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('numMedicos').value = '';
    document.getElementById('data').value = '';

    console.log(vetor);
}




function listar() {
    let divLista = document.getElementById('lista');
    let btnListar = document.getElementsByTagName('button')[0];

    if (divLista.style.display === 'none') {
        divLista.style.display = 'block';
        btnListar.textContent = 'Ocultar Unidades de Saúde';
        carregarLista();
    } else {
        divLista.style.display = 'none';
        btnListar.textContent = 'Listar Unidades de Saúde';
    }
}

function carregarLista() {
    console.log("oi")
    let lista = document.getElementById('lista').getElementsByTagName('ol')[0];
    console.log(lista)
    lista.innerHTML = '';
    for (let i = 0; i < vetor.length; i++) {
        console.log("o2")
        let item = document.createElement('li');
        let texto = `${vetor[i].nome} - Rua: ${vetor[i].rua} (${vetor[i].numero}) - ${vetor[i].bairro} - ${vetor[i].cidade} (${vetor[i].estado}) | Médicos: ${vetor[i].numMedicos} (${vetor[i].data}) `;
        item.appendChild(document.createTextNode(texto));
        lista.appendChild(item);
    }
}


