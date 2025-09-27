// Fase 1: Variables de estado

// Definicion de variables de estado


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




// Fase 3: Simulación y diagnóstico

// Función flecha para simular batalla
const simularBatalla = () => {
	for (let i = 0; i < 3; i++) {
		recibirDanio(25);
	}
	if (puntosSalud > 0) {
		ganarExperiencia(50);
	}
}

// Función declarativa para diagnóstico del héroe
function diagnosticoHeroe() {
	// Diagnóstico de salud
	if (puntosSalud > 70) {
		console.log("Tu salud es excelente");
	} else if (puntosSalud > 30) {
		console.log("Estás herido, considera usar una poción");
	} else {
		console.log("¡Peligro! Salud crítica");
	}

	// Diagnóstico de experiencia
	let rangoXP;
	if (puntosExperiencia < 50) {
		rangoXP = 1;
	} else if (puntosExperiencia < 150) {
		rangoXP = 2;
	} else {
		rangoXP = 3;
	}
	switch (rangoXP) {
		case 1:
			console.log("Eres un novato");
			break;
		case 2:
			console.log("Te estás convirtiendo en un guerrero respetable");
			break;
		case 3:
			console.log("Eres una leyenda viviente");
			break;
	}
}

// Pruebas de la fase 3
simularBatalla();
diagnosticoHeroe();

