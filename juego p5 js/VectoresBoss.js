// -----------------------------
// Generar balas del jefe y manejar su comportamiento
function actualizarJefe() {
  if (exist && vboss.length > 0) {
    boss.mover(); // Movimiento del jefe
    boss.atacar(); // Ataques del jefe
  }
}

// -----------------------------
// Generar jefe en el mapa
function llenarvectorBoss() {
  vboss = [];
  boss = new Boss(450, 570); // Se inicializa `boss` correctamente
  vboss.push(boss);
  console.log("Jefe generado:", boss); // Depuración
}