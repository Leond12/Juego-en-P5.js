function setup() {
  createCanvas(1530, 1500);
  imageMode(CENTER);

  personaje = new Personaje();
  dibujo = new Dibujo();
  definirEstructuraMapa();

  // Declarar todas las variables globales necesarias
  vbe = []; // Asegurar que `vbe` está inicializado
  vbb = [];
  vboss = [];
  boss = null; // Inicializar `boss` como null para evitar referencias no definidas

  estado = 0;
  ctd2 = 200;
  ctd3 = 200;
  ctd = 200;
}

// -----------------------------
// Función para definir la estructura del mapa
function definirEstructuraMapa() {
  // Contorno exterior (línea guinda)
  let lineasExteriores = [
    [59, 332, 48, 332], [48, 332, 48, 13], [48, 13, 605, 14],
    [599.4, 15, 1457.4, 15], [1457.4, 15, 1458.4, 592], [1458.4, 592, 764.4, 592],
    [604, 592, 38, 590], [38, 590, 39, 395], [39, 395, 47, 396]
  ];

  // Bloque A - Habitaciones y pasillos
  let lineasBloqueA = [
    [472, 326, 471, 332], [471, 332, 59, 331], [59, 331, 68, 325],
    [68, 325, 68, 31], [68, 31, 591, 31], [591, 31, 593, 326],
    [593, 326, 527, 328], [527, 328, 528, 334], [528, 334, 606, 333]
  ];

  // Bloque B - Habitaciones y pasillos
  let lineasBloqueB = [
    [603, 841, 69, 841], [69, 841, 69, 1449.2], [69, 1449.2, 746, 1449.2],
    [751.8, 1449, 1459.8, 1450], [1459.8, 1450, 1459.8, 843], [1459.8, 843, 763.8, 840]
  ];

  // Agregar líneas al mapa
  [...lineasExteriores, ...lineasBloqueA, ...lineasBloqueB].forEach(linea => {
    dibujo.addLinea(new Linea(new Punto(linea[0], linea[1]), new Punto(linea[2], linea[3])));
  });
}
