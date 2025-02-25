// -----------------------------
// Función genérica para detectar colisiones entre balas y enemigos
function colisionBalaEnemigos(tipo) {
  let listaEnemigos = tipo === "estatico" ? ene : tipo === "movil" ? enedi : eneab;
  let baelim = [];
  let enelim = [];

  // Detectar colisiones
  ba.forEach((bala, i) => {
    listaEnemigos.forEach((enemigo, j) => {
      if (dist(bala.x, bala.y, enemigo.x, enemigo.y) < 25) {
        baelim.push(i);
        enelim.push(j);
      }
    });
  });

  // Eliminar enemigos alcanzados
  for (let i = enelim.length - 1; i >= 0; i--) {
    let indice = enelim[i];

    if (lifeE <= 20) {
      muerte[indice] = true;
      enemigos[indice].vida = 0; // Marcamos la vida en 0
      listaEnemigos.splice(indice, 1);
      lifeE = 120; // Reiniciar la vida de los enemigos restantes
    } else {
      lifeE -= DamageP;
    }
  }

  // Eliminar balas que impactaron
  for (let i = baelim.length - 1; i >= 0; i--) {
    ba.splice(baelim[i], 1);
  }
}
