// Selección de elementos del DOM
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var toyContainer = document.querySelector(".toy-container");
var pContainer = document.querySelector(".p-container");
var resultado = document.querySelector(".texto-result");

// Asociar eventos a los botones
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

// Función para encriptar el texto
function encriptar(){
    var cajatexto = recuperarTexto();
    if (cajatexto === "") {
        alert("Olvidaste el texto");
        return;
    }
    ocultarElementos();
    resultado.textContent = encriptarTexto(cajatexto);
    limpiarTextContainer(); // Limpiar la caja de texto después de encriptar
}

// Función para desencriptar el texto
function desencriptar(){
    var cajatexto = recuperarTexto();
    if (cajatexto === "") {
        alert("Olvidaste el texto");
        return;
    }
    ocultarElementos();
    resultado.textContent = desencriptarTexto(cajatexto);
    limpiarTextContainer(); // Limpiar la caja de texto después de desencriptar
}

// Función para recuperar el texto ingresado
function recuperarTexto(){
    var cajatexto = document.querySelector(".text");
    return cajatexto.value;
}

// Función para ocultar elementos innecesarios después de encriptar/desencriptar
function ocultarElementos(){
    toyContainer.classList.add("ocultar");
    pContainer.classList.add("ocultar");
}

// Función para encriptar el texto
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

// Función para desencriptar el texto
function desencriptarTexto(mensaje){
    var texto = mensaje;

    // Reemplazar las subcadenas en el orden inverso al encriptado
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

// Función para limpiar la caja de texto después de encriptar/desencriptar
function limpiarTextContainer(){
    var cajatexto = document.querySelector(".text");
    cajatexto.value = "";
}

// Evento para copiar el resultado al portapapeles
const btnCopiar = document.querySelector(".btn-copiar"); 
btnCopiar.addEventListener("click", function(){
    var contenido = document.querySelector(".texto-result").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles"); 
});
