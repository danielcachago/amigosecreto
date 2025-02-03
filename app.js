// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Amigo Secreto Alura LATAM

// Array vacío para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtiene el elemento input donde se ingresa el nombre del amigo
    let input = document.getElementById("amigo");
    // Obtiene el valor ingresado y elimina los espacios en blanco al inicio y al final
    let nombre = input.value.trim();
    
    // Verifica si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return; // Sale de la función si el nombre no es válido
    }
    
    // Verifica si ya se han agregado 5 amigos como máximo
    if (amigos.length >= 5) {
        alert("Ya has alcanzado el máximo de 5 amigos.");
        return; // Sale de la función si el límite ha sido alcanzado
    }
    
    // Agrega el nombre al array de amigos
    amigos.push(nombre);
    // Limpia el campo de entrada
    input.value = "";
    // Llama a la función para actualizar la lista en la interfaz
    mostrarLista();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    // Obtiene el elemento de la lista en el HTML
    let lista = document.getElementById("listaAmigos");
    // Borra el contenido anterior para evitar duplicados
    lista.innerHTML = "";
    
    // Recorre el array de amigos y crea un elemento <li> para cada nombre
    amigos.forEach(nombre => {
        let li = document.createElement("li"); // Crea un elemento <li>
        li.textContent = nombre; // Asigna el nombre al elemento <li>
        lista.appendChild(li); // Agrega el elemento <li> a la lista
    });
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    // Verifica si la lista de amigos está vacía
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return; // Sale de la función si no hay amigos en la lista
    }
    
    // Genera un número aleatorio entre 0 y la cantidad de amigos en la lista
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtiene el amigo seleccionado según el índice aleatorio
    let amigoSeleccionado = amigos[indiceAleatorio];
    
    // Muestra el resultado en el elemento con id "resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}
