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

// Fase 2: Acciones básicas del héroe
// Función de expresión para recibir daño
const recibirDanio = function(cantidadDanio) {
	puntosSalud -= cantidadDanio;
	if (puntosSalud < 0) {
		puntosSalud = 0;
	}
	if (puntosSalud === 0) {
		console.log("¡Has sido derrotado!");
	}
	console.log(`Recibiste ${cantidadDanio} de daño. Salud restante: ${puntosSalud} HP.`);
}

// Función flecha para ganar experiencia
const ganarExperiencia = (cantidadExp) => {
	puntosExperiencia += cantidadExp;
	console.log(`¡Ganaste ${cantidadExp} de experiencia! XP total: ${puntosExperiencia}.`);
}

// Pruebas de las funciones
recibirDanio(20);
ganarExperiencia(30);
recibirDanio(50);
ganarExperiencia(10);

// Mostrar estadísticas al final
mostrarEstadisticas();