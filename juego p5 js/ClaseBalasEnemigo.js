// -----------------------------
// Función para detectar colisión entre balas del personaje y enemigos
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
      enemigos[indice].vida = 0; // Marcar la vida en 0
      listaEnemigos.splice(indice, 1);
      lifeE = 120; // Reiniciar la vida de los enemigos restantes
    } else {
      lifeE -= DamageP;
    }
  }

  // Eliminar balas del personaje que impactaron
  for (let i = baelim.length - 1; i >= 0; i--) {
    ba.splice(baelim[i], 1);
  }
}

// -----------------------------
// Función para detectar colisión entre balas enemigas y el mapa
function colisionBalaEnemigoMapa() {
  vbe = vbe.filter(bala => {
    if (bala.verificarColision() || bala.fueraDeLimites()) {
      return false; // Se elimina la bala
    }
    return true; // Se mantiene en el array
  });
}
