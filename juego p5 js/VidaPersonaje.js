// -----------------------------
// Verificar si el personaje ha perdido toda su vida
function verificarVidaPersonaje() {
  if (lifeP <= 0) {
    lifeP = 0; // Evita valores negativos
    estado = 3; // Cambia a estado de Game Over
    ctd = 200;
    lifeP = 100; // Restablece vida para nueva partida
    personaje.x = 350;
    personaje.y = 470;

    // Reproducir sonido de Game Over una sola vez
    if (!ele2) {
      ele2 = createAudio('gameover.mp4');
      ele2.autoplay(true);
    }

    ele.autoplay(false);
  }
}

// -----------------------------
// Mostrar la barra de vida del personaje
function mostrarVidaPersonaje() {
  fill(0);
  textSize(20);
  textStyle(BOLD);
  text(`Vida: ${lifeP}`, personaje.x - 25, personaje.y + 65);
}