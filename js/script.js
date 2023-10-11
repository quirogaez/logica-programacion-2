const btnSubmmit = document.getElementById('btnSubmmit');

btnSubmmit.addEventListener('click', (e) => {
    e.preventDefault();
    const celsiusElement = document.getElementById('celsius');
    const celsiusValue = parseFloat(document.getElementById('celsius').value);

    if (!isNaN(celsiusValue) && celsiusValue >= -273.15) {
        let tempConvert = 0;
        const selectConv = document.getElementById("selectConv");
        const result = document.getElementById('resultado');
        result.innerHTML = "";

        /* Imprimir celsius */
        result.innerHTML += `<div class="resultado-item">Grados Clesius: ${celsiusValue}°C </div> <hr>`;
        if(selectConv.value == "far") {
            tempConvert = parseCelToFar(celsiusValue);
            /* Insertar dentro el HTML el resultado */
            result.innerHTML += `<div class="resultado-item">Grados Fareheit: ${tempConvert}°F </div> <hr>`;
        } else if (selectConv.value == "kel") {
            tempConvert = parseCelToKeL(celsiusValue);
            /* Insertar dentro el HTML el resultado */
            result.innerHTML += `<div class="resultado-item">Grados Kelvin: ${tempConvert}°K </div> <hr>`;
        }
        /* Borrar contenido del input */
        celsiusElement.value = "";
    }
    else {
        alert("El valor debe ser numerico y mayor o igual a -273.15°C");
        /* Borrar contenido del input */
        celsiusElement.value = "";
    }
})

function parseCelToFar (celsius) {
    return (celsius * (9/5)) + 32;
}

function parseCelToKeL (celsius) {
    return (celsius + 273.15) ;
}