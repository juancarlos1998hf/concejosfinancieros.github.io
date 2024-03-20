const capturar = ()=>{
    
    var ingresoMensual = document.getElementById("ingresoMensual").value;
    var gastosFijos = document.getElementById("gastosFijos").value;
    var porcentaje = document.getElementById("porcentaje").value;
    if(ingresoMensual == "" || gastosFijos == "" || porcentaje == ""){
        document.getElementById("total").innerHTML= "Complete todos los valores.";
    }else{
        var resultado = (ingresoMensual - gastosFijos) * porcentaje;
        console.log("g 👌",resultado)
        document.getElementById("total").innerHTML= "Su Capacidad de endeudamiento es: $"+resultado;
    }
    
    

}

const div = document.createElement("p"); 

function addElement() {
    // crea un nuevo div
    // y añade contenido
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hola!¿Qué tal?");
    newDiv.appendChild(newContent); //añade texto al div creado.
  
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
