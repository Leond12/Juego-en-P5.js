// -----------------------------
// Función para eliminar balas fuera del área de juego
function colisionBalasFueraDeLimite() {
  ba = ba.filter(bala => !bala.fueraDeLimites());
  vbe = vbe.filter(bala => !bala.fueraDeLimites());
  vbb = vbb.filter(bala => !bala.fueraDeLimites());
}