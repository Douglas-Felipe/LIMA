function calculadora(event) {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let operacao = event.target.textContent
    let resultado

    switch (operacao) {
        case "+":
            resultado = num1 + num2
            break;
        
        case "-":
            resultado = num1 - num2
            break;
        
        case "*":
            resultado = num1 * num2
            break;

        case "/":
            resultado = num1 / num2
            break;
        
            default:
                resultado = "Entrada incorreta"
    }
    document.getElementById("resultado2").textContent = resultado
}