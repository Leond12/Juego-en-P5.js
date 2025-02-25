// -----------------------------
// Función para detectar colisión entre balas enemigas y el personaje
function colisionBalaPersonaje() {
  let balasEliminar = [];

  // Detectar colisión con balas de enemigos
  vbe.forEach((bala, i) => {
    if (dist(personaje.x, personaje.y, bala.x, bala.y) < 26) {
      balasEliminar.push(i);
      lifeP -= DamageE;
    }
  });

  // Detectar colisión con balas del jefe
  vbb.forEach((bala, i) => {
    if (dist(personaje.x, personaje.y, bala.x, bala.y) < 26) {
      balasEliminar.push(i);
      lifeP -= DamageE;
    }
  });

  // Eliminar balas enemigas que impactaron al personaje
  vbe = vbe.filter((_, i) => !balasEliminar.includes(i));
  vbb = vbb.filter((_, i) => !balasEliminar.includes(i));
}