document.getElementById('formulariocontato').addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrarcontato();
});

let contatos = [];

function cadastrarcontato() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const datanascimento = document.getElementById('datanascimento').value;
    const endereco = document.getElementById('endereco').value;

    if (contatos.some(contatos => contatos.cpf === cpf)) {
        alert('CPF já cadastrado!');
        return;
    }

    contatos.push({ nome, cpf, datanascimento, endereco });
    alert('Contato salvo com sucesso!');
    document.getElementById('formulariocontato').reset();
}

function exibircontato() {
    if (contatos.length === 0) {
        alert('Nenhum contato salvo.');
        return;
    }

    let resultHTML = '<h2>Contatos Salvos:</h2><ul>';
    contatos.forEach(contatos => {
        resultHTML += `<li><strong style="color: blue;">${contatos.nome}</strong><br>
                       CPF: ${contatos.cpf}<br>
                       Data de Nascimento: ${contatos.datanascimento}<br>
                       Endereço: ${contatos.endereco}</li>`;
    });
    resultHTML += '</ul>';
    document.getElementById('results').innerHTML = resultHTML;
}

function buscarcontato() {
    const cpf = prompt('Digite o CPF do contato que deseja buscar:');
    const contato = contatos.find(contato => contato.cpf === cpf);

    if (contato) {
        alert(`Contato encontrado: ${contato.nome} - ${contato.cpf} - ${contato.datanascimento} - ${contato.endereco}`);
    } else {
        alert('Contato não encontrado!');
    }
}


function excluircontato() {
    const cpf = prompt('Digite o CPF do contato que deseja excluir:');
    const index = contatos.findIndex(contatos => contatos.cpf === cpf);

    if (index !== -1) {
        contatos.splice(index, 1);
        alert('Contato excluído com sucesso!');
    } else {
        alert('Contato não encontrado!');
    }
}
