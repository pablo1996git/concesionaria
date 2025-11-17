let adelanto, precioV, precioDinero;

function calcularCuota() {
    adelanto = document.getElementById("adelanto").value;
    if (adelanto === "" || isNaN(adelanto)) {
        // console.log(adelanto);
        adelanto = 0;
    } else {
        // console.log(adelanto);
        adelanto = parseFloat(adelanto);
    }

    precioV = document.getElementById("precioV").value.trim();
    
    if (/[,$.]/.test(precioV)) {
        // alert(typeof precioV);
        precioDinero = parseFloat(precioV.replace(/[^0-9]/g, ''));
        precioDinero = precioDinero / 100;
    } else if (/\p{L}/u.test(precioV)){
        document.getElementById("adelantoMayor").innerHTML = "<h3>Debe ingresar NÚMEROS, no palabras, símbolos, etc.</h3><br>";
        precioV = 0;
        adelanto = 0;
    } else {
        precioDinero = parseFloat(precioV);

    }

    if (adelanto > precioDinero) {
        document.getElementById("adelantoMayor").innerHTML = "<h3>El adelanto es mayor que el precio del vehículo</h3><br>";
    } else if (precioV != 0 && adelanto != 0 || precioV != 0 && adelanto == 0){
        document.getElementById("12c").innerHTML = convertirPlata((((precioDinero - adelanto) / 12).toFixed(2)) * 1.1);
        document.getElementById("24c").innerHTML = convertirPlata((((precioDinero - adelanto) / 24).toFixed(2)) * 1.2);
        document.getElementById("36c").innerHTML = convertirPlata((((precioDinero - adelanto) / 36).toFixed(2)) * 1.4);
        document.getElementById("48c").innerHTML = convertirPlata((((precioDinero - adelanto) / 48).toFixed(2)) * 1.7);
    }
}

function colocarPrecio(boton) {
    let precioText, precioNumber;
    // Buscar el card donde se hizo clic
    let card = boton.closest('.card');
    // Buscar el precio dentro de ese card
    precioText = card.querySelector('.car-price').textContent;
    precioNumber = parseFloat(precioText.replace(/[^0-9]/g, ''));

    // alert(typeof precioNumber);
    precioNumber = convertirPlata(precioNumber)
    document.getElementById("precioV").value = precioNumber;
    document.getElementById("precioV").focus();
}

function convertirPlata(plata) {
    // Usando Intl.NumberFormat()
    const formateador = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2, // Muestra los centavos
    });
    const monedaArgentina = formateador.format(plata);
    return monedaArgentina;
}