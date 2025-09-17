//Variables
let amigos = []


//Función para agregar nombres
function agregarAmigo() {

    //Validar campo vacío
    if (document.getElementById("amigo").value === "") {
        alert("Por favor, inserte un nombre.");
    }
    else{

        //Agregar nombre al array
        amigos.push(document.getElementById("amigo").value);

        //Limpiar el campo de entrada
        document.getElementById("amigo").value = "";
    }

    //Llamar a la función para mostrar la lista de nombres debajo del campo de entrada.
    mostrarAmigos(amigos);
}



//Función para mostrar nombres
function mostrarAmigos(amigos) {

    //Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    //Limpiar la lista existente
    lista.innerHTML = "";
    
    //Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        
        let li = document.createElement("li");
        li.innerText = amigos[i];

        //Agregar elementos a la lista
        lista.appendChild(li);
       
    }

}



//Función para sortear nombres
function sortearAmigo(amigos) {
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, agregue nombres antes de sortear.");
    }
    else{
        //Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        //Obtener el nombre sorteado
        let amigoSorteado = amigos[indiceAleatorio];

        //Mostrar el resultado en la lista
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    }
}

