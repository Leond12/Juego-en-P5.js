// -----------------------------
// Función para detectar colisión entre balas del personaje y el jefe
function colisionBalaJefe() {
  let baelim = [];
  let boselim = [];

  // Detectar colisiones entre las balas del personaje y el jefe
  ba.forEach((bala, i) => {
    vboss.forEach((boss, j) => {
      if (dist(bala.x, bala.y, boss.x, boss.y) < 100) {
        baelim.push(i);
        boselim.push(j);
      }
    });
  });

  // Aplicar daño al jefe
  boselim.forEach(i => {
    lifeB -= DamageP;
    if (lifeB <= 0) {
      vboss.splice(i, 1);
      exist = false;
    }
  });

  // Eliminar balas del jefe
  vbb = vbb.filter(bala => !boselim.includes(vbb.indexOf(bala)));

  // Eliminar balas del personaje que impactaron
  baelim.reverse().forEach(i => ba.splice(i, 1));
}