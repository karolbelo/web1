function login() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    if (login === 'admin' && senha === 'admin') {
        exibirContainer('menuContainer');
    } else {
        alert('Usuário ou senha incorretos');
    }
}


function exibirContainer(containerId) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => container.classList.remove('active'));
    document.getElementById(containerId).classList.add('active');
}

class Veiculo {
    constructor(marca, modelo, anoFabricacao, cor, tipo, kilometragem, numeroPortas, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.cor = cor;
        this.tipo = tipo;
        this.kilometragem = kilometragem;
        this.numeroPortas = numeroPortas;
        this.preco = preco;
    }
}

function cadastrarVeiculo() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anoFabricacao = document.getElementById('anoFabricacao').value;
    const cor = document.getElementById('cor').value;
    const tipo = document.getElementById('tipo').value;
    const kilometragem = document.getElementById('kilometragem').value;
    const numeroPortas = document.getElementById('numeroPortas').value;
    const preco = document.getElementById('preco').value;

    const veiculo = new Veiculo(marca, modelo, anoFabricacao, cor, tipo, kilometragem, numeroPortas, preco);
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    veiculos.push(veiculo);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));

    alert('Veículo foi cadastrado com sucesso!');
}

//listagem ds veiculos
function listarVeiculos() {
    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    const tbody = document.getElementById('veiculoTableBody');
    tbody.innerHTML = '';

    veiculos.forEach((veiculo, index) => {
        const row = `<tr>
                        <td>${veiculo.marca}</td>
                        <td>${veiculo.modelo}</td>
                        <td>${veiculo.anoFabricacao}</td>
                        <td>${veiculo.cor}</td>
                        <td>${veiculo.tipo}</td>
                        <td>${veiculo.kilometragem}</td>
                        <td>${veiculo.numeroPortas}</td>
                        <td>${veiculo.preco}</td>
                    </tr>`;
        tbody.innerHTML += row;
    });

    // Atualiza tabela p excluir
    const tbodyExcluir = document.getElementById('excluirTableBody');
    tbodyExcluir.innerHTML = '';

    veiculos.forEach((veiculo, index) => {
        const row = `<tr>
                        <td>${veiculo.marca}</td>
                        <td>${veiculo.modelo}</td>
                        <td>${veiculo.anoFabricacao}</td>
                        <td>${veiculo.cor}</td>
                        <td>${veiculo.tipo}</td>
                        <td>${veiculo.kilometragem}</td>
                        <td>${veiculo.numeroPortas}</td>
                        <td>${veiculo.preco}</td>
                        <td><button onclick="excluirVeiculo(${index})">Excluir</button></td>
                    </tr>`;
        tbodyExcluir.innerHTML += row;
    });
}

//faz a busca dos veiculos pela marca
function buscarVeiculos() {
    const buscar = document.getElementById('buscar').value.toLowerCase();
    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    const filtrarVeiculos = veiculos.filter(veiculo => veiculo.marca.toLowerCase().includes(buscar));
    const tbody = document.getElementById('veiculoTableBody');
    tbody.innerHTML = '';

    filtrarVeiculos.forEach(veiculo => {
        const row = `<tr>
                        <td>${veiculo.marca}</td>
                        <td>${veiculo.modelo}</td>
                        <td>${veiculo.anoFabricacao}</td>
                        <td>${veiculo.cor}</td>
                        <td>${veiculo.tipo}</td>
                        <td>${veiculo.kilometragem}</td>
                        <td>${veiculo.numeroPortas}</td>
                        <td>${veiculo.preco}</td>
                    </tr>`;
        tbody.innerHTML += row;
    });
}

//excluir os veiculos cadastrados
function excluirVeiculo(index) {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    veiculos.splice(index, 1);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    listarVeiculos();
    alert('Veículo foi excluído com sucesso!');
}
