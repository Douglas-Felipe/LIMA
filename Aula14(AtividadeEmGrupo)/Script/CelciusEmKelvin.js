function celciusKelvin() {
    let celcius = parseFloat(document.getElementById("entrada1").value)
    let resultado1 = celcius + 273.15

    document.getElementById("resultado1").textContent = resultado1.toFixed(2) + " Kelvin"
}