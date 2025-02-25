// -----------------------------
// Función para llenar munición en el mapa
function llenarMunicion() {
  mu = [];
  municiones.forEach(m => {
    mu.push(new Municion(m.x, m.y));
  });
}

// -----------------------------
// Clase Munición
class Municion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mostrar() {
    push();
    translate(this.x, this.y);
    scale(0.1);
    image(municion, 0, 0);
    pop();
  }

  // Verifica si el personaje puede recoger esta munición
  colisionar() {
    let distancia = dist(this.x, this.y, personaje.x, personaje.y);
    if (distancia < 26) {
      text("Recargar (R)", this.x - 40, this.y + 45);
      if (keyIsDown(82)) { // Tecla "R"
        return true;
      }
    }
    return false;
  }
}

// -----------------------------
// Mostrar estado del cargador del jugador
function CargadorPJ() {
  fill(0);
  textSize(20);

  push();
  translate(personaje.x + 10, personaje.y + 75);
  scale(0.8);
  image(gun, 0, 0);
  pop();

  text(cgd, personaje.x + 200, personaje.y + 205);
}

// -----------------------------
// Verificar recolección de munición en cada frame
function verificarMunicion() {
  let indice = -1;
  for (let i = 0; i < mu.length; i++) {
    if (mu[i].colisionar()) {
      indice = i;
    }
  }

  // Si hay munición recogida, se elimina y recarga el cargador
  if (indice !== -1) {
    mu.splice(indice, 1);
    ammu = true;
    cgd = 30; // Recargar completamente
  }
}