function realDolar() {
    let num = parseFloat(document.getElementById("entrada4").value)
    let resultado

    resultado = num * 0.20

    document.getElementById("resultado4").textContent = "R$" + resultado 
}