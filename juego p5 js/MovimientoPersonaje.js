// -----------------------------
// Manejo de teclas presionadas
function keyPressed() {
  switch (keyCode) {
    case 87: // W - Arriba
      personaje.direccion.w = true;
      break;
    case 68: // D - Derecha
      personaje.direccion.d = true;
      break;
    case 65: // A - Izquierda
      personaje.direccion.a = true;
      break;
    case 83: // S - Abajo
      personaje.direccion.s = true;
      break;
    case 86: // V - Estado 3
      dibujarEstado3();
      break;
    case 67: // C - Estado 4
      dibujarEstado4();
      break;
    case 27: // ESC - Estado 5
      dibujarEstado5();
      break;
    case 13: // ENTER - Estado 1
      dibujarEstado1();
      break;
  }
}

// -----------------------------
// Manejo de teclas liberadas
function keyReleased() {
  switch (keyCode) {
    case 87: // W - Arriba
      personaje.direccion.w = false;
      break;
    case 68: // D - Derecha
      personaje.direccion.d = false;
      break;
    case 65: // A - Izquierda
      personaje.direccion.a = false;
      break;
    case 83: // S - Abajo
      personaje.direccion.s = false;
      break;
  }
}