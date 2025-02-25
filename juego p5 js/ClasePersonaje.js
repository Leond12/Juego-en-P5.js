// -----------------------------
// Clase Personaje
class Personaje {
  constructor() {
    this.x = 60;
    this.y = 365;
    this.vel = 5;
    this.direccion = {
      a: false,
      d: false,
      w: false,
      s: false
    };
  }

  // Mover al personaje según la dirección activa
  mover() {
    if (this.direccion.d) this.x += this.vel;
    if (this.direccion.a) this.x -= this.vel;
    if (this.direccion.w) this.y -= this.vel;
    if (this.direccion.s) this.y += this.vel;
  }

  // Dibujar al personaje según la dirección en la que mira
  dibujar() {
    const imagenes = {
      1: caracterA,
      2.2: caracterD,
      3: caracterI,
      4: caracterB
    };

    push();
    translate(this.x, this.y);
    scale(0.2);
    image(imagenes[Pers], 0, 0);
    pop();
  }

  // Verifica colisión con munición y botiquines
  detectarColisiones() {
    verificarMunicion();
    verificarBotiquines();
  }

  // Evita colisiones con las paredes
  verificarColisionMapa() {
    let aux = dibujo.cercaA(this.x, this.y);
    let dista = dist(this.x, this.y, aux.x, aux.y);
    if (dista < 25) {
      let angu = angulo(aux.x, aux.y, this.x, this.y);
      let entro = 25 - dista;
      this.x += entro * cos(angu);
      this.y += entro * sin(angu);
    }
  }
}