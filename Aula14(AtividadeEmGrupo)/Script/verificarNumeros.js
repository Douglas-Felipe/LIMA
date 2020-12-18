function verificar3numeros() {
    let num = new Array(3)
    num[0] = parseFloat(document.getElementById("entrada8.0").value)
    num[1] = parseFloat(document.getElementById("entrada8.1").value)
    num[2] = parseFloat(document.getElementById("entrada8.2").value)
    let soma, media, resultado8maior, resultado8menor

     //estrutura de decisão
         //maior q
     if(num[0] > num[1] && num[0] > num[2]){
         resultado8maior = `O maior número é: ${num[0]}`
     }
     else if(num[1] > num[0] && num[1] > num[2]){
         resultado8maior = `O maior número é: ${num[1]}`
     }
     else{
         resultado8maior = `O maior número é: ${num[2]}`
     }
         //menor que
     if(num[0] < num[1] && num[0] < num[2]){
         resultado8menor = `O menor número é: ${num[0]}`
     }
     else if(num[1] < num[0] && num[1] < num[2]){
         resultado8menor = `O menor número é: ${num[1]}`
     }
     else{
         resultado8menor = `O menor número é: ${num[2]}`
     }
     //soma e média
     soma = num[0] + num[1] + num[2]
     media = parseFloat(soma / 3)

     document.getElementById("resultado8").textContent = `${resultado8maior}; ${resultado8menor}; Soma = ${soma}; media = ${media}`

}