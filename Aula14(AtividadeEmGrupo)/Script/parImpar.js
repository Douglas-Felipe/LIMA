function verificar(){
    let num = parseFloat(document.getElementById("entradaParImpar").value)
    let resultado 

    if ((num % 2) == 0) {
        resultado = "Numero é par"
    }
    else{
        resultado = "Numero é impar"
    }

    document.getElementById("resultado3").textContent = resultado
}