// -----------------------------
// Función para llenar botiquines en el mapa
function llenarBotiquines() {
  bo = [
    new Botiquin(705, 70),
    new Botiquin(700, 500),
    new Botiquin(100, 550),
    new Botiquin(695, 1390),
    new Botiquin(1150, 1330),
    new Botiquin(550, 1390)
  ];
  console.log("✅ Botiquines generados:", bo); // Depuración
}

// -----------------------------
// Clase Botiquín
class Botiquin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mostrar() {
    push();
    translate(this.x, this.y);
    scale(0.1);
    image(botiquinImagen, 0, 0);
    pop();
  }

  // Verifica si el personaje puede recoger este botiquín
  colisionar() {
    let distancia = dist(this.x, this.y, personaje.x, personaje.y);
    if (distancia < 26) {
      text("Recoger (E)", this.x - 40, this.y + 45);
      if (keyIsDown(69)) { // Tecla "E"
        return true;
      }
    }
    return false;
  }
}

// -----------------------------
// Verificar recolección de botiquines en cada frame
function verificarBotiquines() {
  let indice = -1;
  for (let i = 0; i < bo.length; i++) {
    if (bo[i].colisionar()) {
      indice = i;
    }
  }

  // Si hay un botiquín recogido, se elimina y se recupera vida
  if (indice !== -1) {
    bo.splice(indice, 1);
    if (lifeP <= 50) {
      lifeP += Mercy; // Recupera 50 de vida
    } else {
      let vidaRestante = 100 - lifeP;
      lifeP += vidaRestante;
    }
  }
}