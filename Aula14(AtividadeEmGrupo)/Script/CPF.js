function validarCPF() {
    let digito = document.getElementById("entrada7").value
    let digitoEstado = digito.substring(8,9)
    let resultado7
    switch (digitoEstado){
        case "0":
            resultado7 = "Rio Grande do Sul"
            break;
        case "1":
            resultado7 = "Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins"
            break;
        case "2":
            resultado7 = "Amazonas, Pará, Roraima, Amapá, Acre e Rondônia"
            break;
        case "3":
            resultado7 = "Ceará, Maranhão e Piauí"
            break;
        case "4":
            resultado7 = "Paraíba, Pernambuco, Alagoas e Rio Grande do Norte"
            break;
        case "5":
            resultado7 = "Bahia e Sergipe"
            break;
        case "6":
            resultado7 = "Minas Gerais"
            break;
        case "7":
            resultado7 = "Rio de Janeiro e Espírito Santo"
            break;
        case "8":
            resultado7 = "São Paulo"
            break;
        case "9":
            resultado7 = "Paraná e Santa Catarina"
            break;
        default:
            resultado7 = "CPF inválido"
    }
    document.getElementById("resultado7").textContent = `CPF emitido em: ${resultado7}`
}
