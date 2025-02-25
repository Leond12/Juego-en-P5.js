// -----------------------------
// Vectores y Estados
var exist = true;
var ba = [], mu = [], bo = [], vbe1 = [], vbe2 = [], vbe3 = [], vbe4 = [], vbeP = [], vboss = [];
var vbb = [], vbbA = [], vbbB = [], vbbD = [], vbbI = [], rvis = [];
var ene = [], enedi = [], eneab = [];
var estado = 0;
var ctd = 200, ctd2 = 400, ctd3 = 100;
var esc = 100;

// Variables de Movimiento y Mapa
var ang = Math.PI / 4;
var A, B, dibujo;
var x = 330, y = 298, xF = 765, yF = 750;

// -----------------------------
// Datos de munición y botiquines
var ammu = false, cgd = 0;
var municiones = [
  { x: 400, y: 130 }, { x: 230, y: 367 }, { x: 685, y: 357 }, { x: 480, y: 550 },
  { x: 1200, y: 175 }, { x: 1300, y: 500 }, { x: 685, y: 1100 }, { x: 935, y: 1328 },
  { x: 1346, y: 1332 }, { x: 1350, y: 1120 }, { x: 370, y: 1000 }, { x: 120, y: 1200 },
  { x: 370, y: 1405 }
];

var botiquines = [
  { x: 705, y: 70 }, { x: 700, y: 500 }, { x: 100, y: 550 },
  { x: 695, y: 1390 }, { x: 1150, y: 1330 }, { x: 550, y: 1390 }
];

// -----------------------------
// Enemigos organizados en una lista de objetos
var enemigos = [
  // Cuarto A
  { x: 328, y: 177, cuarto: "A" }, { x: 489, y: 270, cuarto: "A" },
  { x: 165, y: 105, cuarto: "A" }, { x: 153, y: 257, cuarto: "A" },
  { x: 498, y: 103, cuarto: "A" },

  // Cuarto B
  { x: 916, y: 126, cuarto: "B" }, { x: 1316, y: 127, cuarto: "B" },
  { x: 1110, y: 230, cuarto: "B" }, { x: 1330, y: 327, cuarto: "B" },
  { x: 800, y: 180, cuarto: "B" }, { x: 935, y: 290, cuarto: "B" },

  // Cuarto C
  { x: 131, y: 469, cuarto: "C" }, { x: 302, y: 466, cuarto: "C" },
  { x: 486, y: 465, cuarto: "C" }, { x: 223, y: 535, cuarto: "C" },
  { x: 400, y: 535, cuarto: "C" },

  // Cuarto D
  { x: 842, y: 556, cuarto: "D" }, { x: 916, y: 504, cuarto: "D" },
  { x: 980, y: 480, cuarto: "D" }, { x: 1350, y: 480, cuarto: "D" },
  { x: 430, y: 535, cuarto: "D" },

  // Cuarto E
  { x: 205, y: 1053, cuarto: "E" }, { x: 187, y: 1213, cuarto: "E" },
  { x: 192, y: 1372, cuarto: "E" }, { x: 514, y: 1106, cuarto: "E" },
  { x: 511, y: 1271, cuarto: "E" },

  // Cuarto F
  { x: 1127, y: 1121, cuarto: "F" }, { x: 1145, y: 922, cuarto: "F" },
  { x: 1328, y: 953, cuarto: "F" }
];

var exist = true;

// -----------------------------
// Salud y Daño
var lifeP = 100, lifeE = 100, lifeB = 1000;
var Mercy = 50, DamageP = 20, DamageE = 20;

// -----------------------------
// Variables para Balas y Enemigos Eliminados
var Pers = 2.2, vidapersonaje = false;
var muerte = Array(24).fill(false);
var enem = Array(24).fill(1);

// -----------------------------
// Carga de imágenes
function preload() {
  portada = loadImage("portada.original2.jpg");
  caracterA = loadImage("CaracterA.png");
  caracterB = loadImage("CaracterB.png");
  caracterD = loadImage("personajeabajo2.png");
  caracterI = loadImage("CaracterI.png");
  pause = loadImage("menupause1.jpeg");
  fin = loadImage("findeljuego.jpeg");
  inicio = loadImage("logo1.1.png");
  credito = loadImage("creditos.jpg");
  menuplay = loadImage("menuiniciplay.jpeg");
  continuar = loadImage("continuar1.jpeg");
  fondo = loadImage("MapaFinal.png");
  gun = loadImage("gun.png");
  bossF = loadImage("jefe3.png");
  SkinEnemigo = loadImage("enemigo2.png");
  SkinEnemigoE = loadImage("enemigoEst.png");
  municion = loadImage("municion.png");
  balaPersonaje = loadImage("BalaPersonaje.png");
  balaEnemigo = loadImage("BalaEnemigo.png");
  azul = loadImage("bolazul.png");
  botiquinImagen = loadImage("botiquin2.png");
  Balajefe = loadImage("bolajefe.png");
  BulletBoss = loadImage("bolajefe2.png");
  CaracterD1 = loadImage("CaracterD1.png");
  CaracterD2 = loadImage("CaracterD2.png");
}

// -----------------------------
let slider, ele, ele2;

// -----------------------------
// Bucle Principal
// -----------------------------
// Bucle Principal
function draw() {
  background(150, 150, 150);
  dibujo.dibujar();

  // Dibujar el fondo correctamente
  push();
  translate(xF, yF);
  scale(esc);
  image(fondo, 0, 0); // Cambio de xF, yF a (0, 0) para evitar desajustes
  pop();

  fill(255);

  console.log("Estado actual:", estado); // Depuración

  switch (estado) {
    case 0: // Menú principal
      console.log("Dibujando estado 0 (Portada)"); // Depuración
      dibujarEstado0();
      break;

    case 1: // Carga del nivel
      console.log("Dibujando estado 1 (Carga del nivel)"); // Depuración
      dibujarEstado1();
      break;

    case 2: // Juego en marcha
      console.log("Dibujando estado 2 (Juego en marcha)"); // Depuración
      dibujarEstado2(); // Maneja actualización y dibujo de todos los objetos
      verificarMunicion(); // Recolectar munición
      verificarBotiquines(); // Recolectar botiquines
      verificarVidaPersonaje(); // Verifica vida del personaje en tiempo real
      colisionBalaEnemigos("estatico");
      colisionBalaEnemigos("movil");
      colisionBalaEnemigos("otro");
      colisionBalaJefe();
      colisionBalasFueraDeLimite(); // Elimina balas fuera del mapa
      break;

    case 3: // Game Over
      console.log("Dibujando estado 3 (Game Over)"); // Depuración
      dibujarEstado6();
      break;

    case 4: // Pantalla de créditos o victoria
      console.log("Dibujando estado 4 (Créditos o victoria)"); // Depuración
      dibujarEstado11();
      break;
  }
}

// -----------------------------
// Función para actualizar el juego
function actualizarJuego() {
  dibujarEstado2();

  if (mouseIsPressed && frameCount % 10 === 0 && ammu && cgd > 0) {  
    if (mouseButton === LEFT) {
      ba.push(new Bala(personaje.x, personaje.y, 10));
      cgd--;
    }
  }
}
