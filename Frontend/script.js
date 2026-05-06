const key = "d83ecda77bcd8e437402c1139c426e60";

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(res => res.json());

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

function abrirModal() { document.querySelector("#modal-tarefa").style.display = "flex"; }
function fecharModal() { document.querySelector("#modal-tarefa").style.display = "none"; }

async function salvarTarefa() {
    const novaTarefa = {
        nome: document.querySelector("#nome").value,
        dataInicio: document.querySelector("#dataInicio").value,
        dataFim: document.querySelector("#dataFim").value,
        descricao: document.querySelector("#descricao").value,
        imagem: document.querySelector("#imagem").value
    };

    await fetch("http://localhost:3000/tarefas/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaTarefa)
    });

    alert("Tarefa salva com sucesso!");
    location.reload();
}

async function carregarCards() {
    const dados = await fetch("http://localhost:3000/tarefas/listar").then(res => res.json());
    const container = document.querySelector("#tarefas-lista");

    dados.forEach(tarefa => {
        container.innerHTML += `
            <div class="card-tarefa">
                <img src="${tarefa.imagem}">
                <h4>${tarefa.nome}</h4>
                <p style="font-size: 12px">${tarefa.descricao}</p>
            </div>
        `;
    });
}
