function calcIMC() {
    let peso = parseFloat(document.getElementById("entradaPeso").value)
    let altura = parseFloat(document.getElementById("entradaAltura").value)
    let imc, resultado6

    imc = peso / parseFloat(Math.pow(altura, 2));

    
        if (imc < 17){
            resultado6 = "muito abaixo do peso"
        }
        else if( imc >= 17 && imc <= 18.49){
            resultado6 = "abaixo do peso"
        }

        else if( imc >= 18.5 && imc <= 24.99){
            resultado6 = "com peso normal"
        }

        else if( imc >= 25 && imc <= 29.99){
            resultado6 = "acima do peso"
        }

        else if( imc >= 30 && imc <= 34.99){
            resultado6 = "com obesidade I"
        }

        else if( imc >= 35 && imc <= 39.99){
            resultado6 = "com obesidade II"
        }
           
        else if (imc >= 40){
            resultado = "com obesidade III"
        }
        
    document.getElementById("resultado6").textContent = `IMC=${imc.toFixed(2)}; Você está ${resultado6}`
}