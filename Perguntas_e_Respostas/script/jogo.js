// Função que inicia o jogo. Ela coloca os valores dos cards
function StartGame(){
    // Controlador do card, usando um loop para deixar o codigo mais limpo e de facil leitura
    for (let i = 0; i <= 11; i++) {
        let card = document.getElementById(`alternativas${i}`);
        card.innerHTML =
        `
        <p>${deck[i].pergunta}</p>
        <img src=${deck[i].img} alt="Foto de uma personagem de anime">
        <input type="radio" id="quiz${i}-alt1" name="quiz${i}" value="${deck[i].alternativa1}"><label for="quiz${i}-alt1">${deck[i].alternativa1}</label><br>
        <input type="radio" id="quiz${i}-alt2" name="quiz${i}" value="${deck[i].alternativa2}"><label for="quiz${i}-alt2">${deck[i].alternativa2}</label><br>
        <input type="radio" id="quiz${i}-alt3" name="quiz${i}" value="${deck[i].alternativa3}"><label for="quiz${i}-alt3">${deck[i].alternativa3}</label>
        `
    }
}

// Função que envia as respostas e verifica se elas estão corretas, junto com a somatória dos pontos
function EnviarRespostas(){
    if (localStorage.getItem("recorde") == null) {
        localStorage.setItem("recorde", 0)
    }
    let pontos = parseInt(localStorage.getItem("recorde"))
    let nome = ""
    let pontosResposta = 0
    let resposta = new Array(12)
    if (pontos == undefined || pontos == 0 || pontos == NaN)
    {
        localStorage.setItem("recorde", 0)
    }
    
    // loop para pegar a pergunta(quiz)
    for(let i = 0; i <= 11; i++){
        // loop para pegar a alternativa da pergunta
        for(let j = 1; j <= 3; j++){
            // Pegando apenas a alternativa marcada e atribuindo o valor dela ao array resposta
            if (document.getElementById(`quiz${i}-alt${j}`).checked == true)
            {
                resposta[i] = document.getElementById(`quiz${i}-alt${j}`).value

                if (resposta[i] == deck[i].correta){
                    pontosResposta += deck[i].ponto
                }
                else{
                    pontosResposta += 0
                }

            }
        }
    }
    // Imagemm de ageadecimento
    let img = document.getElementById("pontosFinal")
    img.innerHTML = 
    `
        <button id="enviarRespostas" onclick="EnviarRespostas()" >Enviar respostas</button>
        <span id="recorde">Recorde:</span>
        <span id="pontos">Pontuação: </span>
        <img src="../img/obgPorJogar.gif" alt="Gif de agradecimento">
    `
    // Verifica se a pontuação é um novo recorde
    if (pontosResposta > pontos)
    {
        nome = prompt("Novo recorde, registre o nickname:")
        localStorage.setItem("nomeRecorde", nome)
        localStorage.setItem("recorde", pontosResposta)
        document.getElementById("recorde").textContent = `Novo Recorde de ${localStorage.getItem("nomeRecorde")}: ${localStorage.getItem("recorde")} pontos`

    }
    else
    {
        document.getElementById("recorde").textContent = `Recorde atual de ${localStorage.getItem("nomeRecorde")}: ${localStorage.getItem("recorde")} pontos`
    }
    document.getElementById("pontos").textContent = `Sua pontuação foi: ${pontosResposta} pontos`

    StartGame()
}