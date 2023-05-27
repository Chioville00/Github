const textArea = document.querySelector(".texto");
const mensaje  = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");

copiar.addEventListener('click', copiarTexto);


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage= "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo= [["e", "enter"], ["i", "imes"],["a","ai"],["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

        for(let i= 0; i< matrizCodigo.length; i++){
            if(stringEncriptado.includes(matrizCodigo[i][0])){
                stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringEncriptado;
}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value="";
}

function desencriptar(stringDesncriptado){
    let matrizCodigo= [["e", "enter"], ["i", "imes"],["a","ai"],["o","ober"], ["u","ufat"]];
    stringDesncriptado = stringDesncriptado.toLowerCase();

        for(let i= 0; i< matrizCodigo.length; i++){
            if(stringDesncriptado.includes(matrizCodigo[i][1])){
                stringDesncriptado= stringDesncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesncriptado;
}

function copiarTexto(){
    const inputResultado = document.querySelector('.mensaje');
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}


