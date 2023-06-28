//funcion para añadir el valor del numero clickeado a resultado.
function numeros(valor){
    document.getElementById("resultado").value += valor //seleccion del id del input
}

//funcion para dar el resultado =
//Función para procesar el resultado con un regex
function operacion(){
    const opera = document.getElementById("resultado").value //seleccionamos el id resultado
    const regex = /[`,!,@,#,$,^,&,{},||,",;,_,=,b,d-f,j,k,ñ,p-r,u-z ]/ig; //agregar todos los signos que no quiero que se usen en el input
    Valueok = regex.test(opera) 
    //Si la evaluación del regex sobre el valor del input es True quiere decir que hay codigo malicioso entonces arrojara
    //error, pero si no hay codigo malicioso se ejecutara el else y el valor del input sera el eval sobre Valueok
    if(opera == 0){ //Este codigo se ejecutara y saldra un mensaje de error si el usuario no digita nada
        document.getElementById("resultado").value = "Syntax Error"
    }
    else if(Valueok == true){
        document.getElementById("resultado").value = "Syntax Error"
    }
    else if(Valueok == false){
        document.getElementById("resultado").value = eval(opera)
    }
}

//funcion para resetear la calculadora
function reset(){
    document.getElementById("resultado").value = ""
}

//funcion para borrar un solo espacio
function clearspace(){
    const clearspacedata = document.getElementById("resultado").value
    document.getElementById("resultado").value = clearspacedata.substr(0, clearspacedata.length -1);
}

//valor de pi
const pi = 3.14159265359