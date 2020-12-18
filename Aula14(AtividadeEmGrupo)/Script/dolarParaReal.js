function dolarReal() {
    let num = parseFloat(document.getElementById("entrada5").value)
    let resultado

    resultado = num * 5.06

    document.getElementById("resultado5").textContent = "$" + resultado.toFixed(2)
}