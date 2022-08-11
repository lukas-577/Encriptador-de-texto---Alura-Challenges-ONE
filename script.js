

function validarMinusculas(texto) {
    var patron = /([^a-z\ñ\s])/;
    if (patron.test(texto) === false) {
        return true;
    } else {
        return false;
    }
}



function encriptar() {

    const texto = document.getElementById("textoAEncriptar").value;
    if (validarMinusculas(texto) === true && texto !== '') {
        //console.log('es minuscula :D');
        const nuevoTexto = texto.split('').map(x =>
            x === 'e' ? x = 'enter' :
                x === 'i' ? x = 'imes' :
                    x === 'a' ? x = 'ai' :
                        x === 'o' ? x = 'ober' :
                            x === 'u' ? x = 'ufat' : x)
            .join('');
        //console.log(nuevoTexto);
        mostrar(nuevoTexto);
        document.getElementById('advertencia').style.display = 'none';
        ocultarMunecoyMensaje();
    } else {
        //console.log('es Mayuscula :C');
        document.getElementById('advertencia').style.backgroundColor = 'red';
        setTimeout(function () {
            window.location.reload();
        }, 1500);


    }

}

function mostrar(nuevoTexto) {
    const texto = document.getElementById('textoEncriptado');
    texto.textContent = nuevoTexto;
}

function desencriptar() {
    const texto = document.getElementById("textoAEncriptar").value;

    if (validarMinusculas(texto) === true && texto !== '') {
        let textoDesencriptado =
            texto.replace(/enter/gm, 'e')
                .replace(/imes/gm, 'i')
                .replace(/ai/gm, 'a')
                .replace(/ober/gm, 'o')
                .replace(/ufat/gm, 'u');

        mostrar(textoDesencriptado);
        ocultarMunecoyMensaje();
    }

}


function ocultarMunecoyMensaje() {
    document.getElementById('imagenMuneco').style.display = 'none';
    document.getElementById('textoConMuneco').style.display = 'none';
    document.getElementById('botonCopiar').style.display = 'block';
}


function copiar() {
    let copiarTexto = document.querySelector('#textoEncriptado');
    copiarTexto.select();
    document.execCommand('copy')
}

