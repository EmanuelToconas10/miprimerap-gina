// Comentario de una sola línea en JavaScript
// alert("Hola, este es mi JavaScript");

// Declaración de variables
let nombre0 = "Marta";
var nombre1 = "Marta";
const nombre2 = "Marta";

// Imprimir variables en la consola
console.log(nombre0);
console.log(nombre1);
console.log(nombre2);

// Selección del elemento con la clase "logo.fuente-acerca-de"
let titulo = document.querySelector(".logo.fuente-acerca-de");
let contenidoTitulo = "Marta";

// Cambiar el contenido del elemento seleccionado
titulo.innerHTML = contenidoTitulo;

// Obtener el texto actual del título
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

// Condición para verificar el contenido del título
if (textoTitulo === "Marta") {
    titulo.innerHTML = "Otro";
} else {
    console.log("No se cumple la condición");
}

// Contactos //

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});