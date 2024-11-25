// Escuchar el evento de envío del formulario
document.getElementById('form-competencia').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que se recargue la página al enviar el formulario
    
    // Obtener los valores ingresados en el formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let pais = document.getElementById('pais').value;
    let posicion = document.getElementById('posicion').value;

    // Verificar la posición y mostrar el ganador correspondiente
    if (posicion == 1) {
        mostrarPodio('primer-puesto', 'Primer Puesto', nombre, apellido, edad, pais);
    } else if (posicion == 2) {
        mostrarPodio('segundo-puesto', 'Segundo Puesto', nombre, apellido, edad, pais);
    } else if (posicion == 3) {
        mostrarPodio('tercer-puesto', 'Tercer Puesto', nombre, apellido, edad, pais);
    } else {
        alert('No califica');
    }
});

// Función para mostrar el podio correspondiente
function mostrarPodio(puesto, posicion, nombre, apellido, edad, pais) {
    // Mostrar los resultados y las tarjetas correspondientes
    document.getElementById('resultados').style.display = 'flex';
    document.getElementById(puesto).style.display = 'block';

    // Insertar la información del ganador en la tarjeta correspondiente
    document.getElementById(puesto).querySelector('.card-body').innerHTML = `
        <strong class="card-title">${posicion}</strong>
        <p class="card-text">Nombre: ${nombre} ${apellido}</p>
        <p class="card-text">Edad: ${edad}</p>
        <p class="card-text">País: ${pais}</p>
    `;
}
