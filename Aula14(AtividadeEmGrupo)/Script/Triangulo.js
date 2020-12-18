function tipoTriangulo() {
    let lado = new Array(3)
    let resultado9

        lado[0] = parseFloat(document.getElementById("entrada9.0").value);
        lado[1] = parseFloat(document.getElementById("entrada9.1").value);
        lado[2] = parseFloat(document.getElementById("entrada9.2").value);

        if ((lado[0] < lado[1] + lado[2]) && (lado[1] < lado[0] + lado[2]) && (lado[2] < lado[0] + lado[1])) {
            if ((lado[0] == lado[1]) && (lado[1] == lado[2])) {
                resultado9 = "É um triângulo equilátero."
            }
            else if ((lado[0] == lado[1]) || (lado[0] == lado[2]) || (lado[1] == lado[2])) {
                resultado9 = "É um triângulo isóceles"
            }
            else{
                resultado9 = "É um triângulo escaleno."
            }
        }
        else{
            resultado9 = "Não é um triângulo"
        }
    document.getElementById("resultado9").textContent = resultado9
}