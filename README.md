Amigo Secreto - Proyecto de Lógica de Programación

Este proyecto es una aplicación web simple que permite a los usuarios organizar un "Amigo Secreto". 
Los usuarios pueden ingresar los nombres de sus amigos, y la aplicación seleccionará aleatoriamente un nombre de la lista para ser el "Amigo Secreto". 
El objetivo principal de este proyecto es fortalecer las habilidades de lógica de programación utilizando JavaScript, HTML y CSS.

Características principales

Ingreso de nombres: Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto.
Límite de 5 amigos: La aplicación permite un máximo de 5 nombres. Si se intenta agregar un sexto nombre, se muestra una alerta.
Lista de nombres: Los nombres ingresados se muestran en una lista en la interfaz.
Sorteo aleatorio: Al hacer clic en el botón "Sortear amigo", la aplicación selecciona un nombre al azar de la lista y lo muestra como el "Amigo Secreto".
Validación de entrada: Si el campo de texto está vacío, se muestra una alerta pidiendo al usuario que ingrese un nombre válido.

Estructura del código
1. HTML (index.html)
El archivo HTML define la estructura de la interfaz de usuario. Contiene:

Un campo de texto para ingresar nombres.
Un botón para agregar nombres a la lista.
Una lista (<ul>) para mostrar los nombres ingresados.
Un botón para realizar el sorteo.
Un área para mostrar el resultado del sorteo.

3. JavaScript (app.js)
El archivo JavaScript contiene la lógica de la aplicación. Las funciones principales son:

agregarAmigo(): Agrega un nombre a la lista de amigos. Valida que el nombre no esté vacío y que no se exceda el límite de 5 nombres.
mostrarLista(): Actualiza la lista de nombres en la interfaz.
sortearAmigo(): Selecciona un nombre al azar de la lista y lo muestra como el "Amigo Secreto".

3. CSS (style.css)
El archivo CSS define los estilos de la aplicación, como colores, fuentes y disposición de los elementos. Utiliza fuentes de Google Fonts para mejorar la apariencia.

Cómo funciona el código
Agregar nombres:

El usuario ingresa un nombre en el campo de texto y presiona "Enter" o hace clic en el botón "Añadir".
La función agregarAmigo() valida el nombre y lo agrega a la lista amigos si cumple con las condiciones.
La lista de nombres se actualiza en la interfaz usando la función mostrarLista().

Sorteo:

Cuando el usuario hace clic en el botón "Sortear amigo", la función sortearAmigo() selecciona un nombre al azar de la lista amigos.
El nombre seleccionado se muestra en la interfaz como el "Amigo Secreto".

Validaciones:

Si el campo de texto está vacío, se muestra una alerta pidiendo un nombre válido.
Si se intenta agregar un sexto nombre, se muestra una alerta indicando que se ha alcanzado el límite de 5 amigos.

Tecnologías utilizadas

HTML: Para la estructura de la interfaz.
CSS: Para los estilos y diseño visual.
JavaScript: Para la lógica de la aplicación.
Google Fonts: Para mejorar la tipografía.

Ejemplo de uso
Ingresa los nombres: "Ana", "Carlos", "Luisa", "Pedro", "María".
Intenta agregar un sexto nombre (por ejemplo, "Juan"). Verás una alerta indicando que has alcanzado el límite.
Haz clic en "Sortear amigo". La aplicación seleccionará un nombre al azar, por ejemplo: "El amigo secreto es: Carlos".


Autor
Este proyecto fue desarrollado por Daniel Cachago como parte de un desafío para fortalecer habilidades en lógica de programación.
