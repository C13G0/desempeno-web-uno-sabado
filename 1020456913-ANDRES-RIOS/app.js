// Fase 1: Variables de estado
let nombreHeroe = prompt("¿Dale un nombre a tu héroe?");
let puntosSalud = 100;
let puntosExperiencia = 0;

// Función declarativa para mostrar estadísticas
function mostrarEstadisticas() {
	console.log(`Héroe: ${nombreHeroe}, Salud: ${puntosSalud} HP, Experiencia: ${puntosExperiencia} XP.`);
}

// Llamada para verificar que funciona
mostrarEstadisticas();