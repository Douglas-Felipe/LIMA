function divisaoInteira() {
    let dividendo = parseFloat(document.getElementById("dividendo").value)
    let divisor = parseFloat(document.getElementById("divisor").value)
    let resultado10

    if((dividendo % divisor) == 0){
        resultado10 = `${dividendo} é divisivel inteiramente por: ${divisor}`
    }
    else{
        resultado10 = `${dividendo} não é divisivel inteiramente por: ${divisor}`
    }
    document.getElementById("resultado10").textContent = resultado10
}