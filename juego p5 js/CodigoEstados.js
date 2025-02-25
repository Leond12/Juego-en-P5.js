// -----------------------------
// Función genérica para dibujar estados con fondo e imágenes
function dibujarEstadoFondo(imagen, escala, tiempoVariable, siguienteEstado) {
  background(0);
  push();
  translate(x, y);
  scale(escala);
  image(imagen, 0, 0);
  pop();

  // Reducir el temporizador correcto
  if (siguienteEstado === 2) {
    ctd--;
    console.log("ctd actual:", ctd);
  } else if (siguienteEstado === 0) {
    ctd3--;
    console.log("ctd3 actual:", ctd3);
  }

  // Cambiar estado si el tiempo llegó a 0
  if ((siguienteEstado === 2 && ctd <= 0) || (siguienteEstado === 0 && ctd3 <= 0)) {
    console.log("Cambiando estado a:", siguienteEstado);
    estado = siguienteEstado;
  }
}

// -----------------------------
// Estados del juego

function dibujarEstado0() {
  console.log("Dibujando estado 0, ctd2:", ctd2);

  background(0);
  push();
  translate(x, y);
  scale(1.3);
  image(inicio, 0, 0);
  pop();

  ctd2--;
  
  if (ctd2 <= 0) {
    console.log("Cambiando a estado 1");
    estado = 1;
    ele = createAudio('inicio.mpeg');
    ele.autoplay(true);
  }
}

function dibujarEstado11() {
  dibujarEstadoFondo(credito, 0.9, ctd3, 0);
}

function dibujarEstado1() {
  console.log("Dibujando estado 1, ctd:", ctd);
  dibujarEstadoFondo(portada, 1.3, ctd, 2);

  if (estado === 2) {
    console.log("Inicializando elementos en estado 2...");
    
    llenarvectorBoss(); // Asegurar que el jefe se genera antes del estado 2
    console.log("✅ Jefe generado en estado 2:", boss); // Depuración
    
    llenarMunicion();
    llenarBotiquines();
    llenarEnemigos();
    llenarvectorRVision();

    ba = [];
    vbe = [];
    vbb = [];
    vbeP = [];
  }
}

function dibujarEstado2() {
  personaje.mover();
  personaje.dibujar();

  // Dibujar y mover todos los objetos en el juego
  [...rvis, ...ene, ...enedi, ...eneab, ...vboss, ...vbb, ...ba, ...vbeP, ...mu, ...bo].forEach(obj => {
    obj.mover && obj.mover();
    obj.dibujar && obj.dibujar();
  });

  // Verificar que `vbe` existe antes de usarlo
  if (typeof vbe !== "undefined" && Array.isArray(vbe)) {
    vbe.forEach(bala => {
      bala.mover();
      bala.dibujar();
    });
  } else {
    console.warn("⚠️ Advertencia: `vbe` no está definido. Asegúrate de que fue declarado en `setup()`.");
  }

  // Actualizar jefe (movimiento y ataques)
  actualizarJefe();

  // Interfaz y lógica de colisión
  CargadorPJ();
  mostrarVidaPersonaje(); // Mostrar vida del personaje en pantalla
  VidaBoss();
  
  colisionBalaEnemigos("estatico");
  colisionBalaEnemigos("movil");
  colisionBalaEnemigos("otro");
  colisionBalaJefe();

  // Verificar si se ha ganado el juego
  if (vboss.length === 0 && ene.length === 0) {
    console.log("Juego ganado, cambiando a estado 4");
    estado = 4;
    ammu = false;
    ctd = 200;
    cgd = 0;
    Mercy = 50;
    lifeP = 100;
    lifeB = 5000;
  }
}


function dibujarEstado3() {
  personaje.mover();
  personaje.dibujar();
  textStyle(BOLD);
  textSize(25);
  fill(255, 0, 0);
  text("Presione C para continuar", personaje.x - 100, personaje.y + 10);
  noLoop();
}

function dibujarEstado4() {
  loop();
}

function dibujarEstado5() {
  estado = 1;
  ctd = 200;
  lifeP = 100;
  personaje.x = 60;
  personaje.y = 365;
}

function dibujarEstado6() {
  dibujarEstadoFondo(fin, 1, null);
}

// -----------------------------
// Funciones de Vida

function VidaBoss() {
  fill(0, 0, 130);
  textSize(20);
  textStyle(BOLD);
  text("Crugger", boss.x - 100, boss.y + 120);
  text(lifeB, boss.x + 50, boss.y + 120);
}