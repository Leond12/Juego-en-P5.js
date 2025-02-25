// -----------------------------
// Función para llenar los enemigos en el mapa
function llenarEnemigos() {
  ene = [];
  enedi = [];
  eneab = [];

  enemigos.forEach(e => {
    let esMovil = ["B", "D"].includes(e.cuarto); // Cuartos con enemigos móviles
    let enemigo;

    if (esMovil) {
      enemigo = new EnemigoM(e.x, e.y, true, e.limiteMin, e.limiteMax);
      (e.cuarto === "B" ? enedi : eneab).push(enemigo);
    } else {
      enemigo = new EnemigoE(e.x, e.y);
      ene.push(enemigo);
    }
  });
}

// -----------------------------
// Función para llenar los vectores de balas de enemigos según el cuarto
function llenarvectorBE() {
  if (frameCount % 75 === 0) {
    enemigos.forEach(e => {
      if (!muerte.includes(e)) {
        let direcciones = ["abajo", "arriba", "derecha", "izquierda"];
        direcciones.forEach(dir => vbe.push(new BalaEnemigo(e.x, e.y, dir)));

        if (["A", "B", "C", "D"].includes(e.cuarto)) {
          vbeP.push(new BalaEnemigo(e.x, e.y, "perseguidora"));
        }
      }
    });
  }
}