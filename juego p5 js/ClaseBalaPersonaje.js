// -----------------------------
// Clase Bala del Personaje
class Bala {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angulo = angulo(this.x, this.y, mouseX, mouseY);
    this.vel = 9;
  }

  // Movimiento de la bala
  mover() {
    this.x += this.vel * cos(this.angulo);
    this.y += this.vel * sin(this.angulo);

    // Verificar si la bala colisiona con el mapa o está fuera del límite
    if (this.verificarColision() || this.fueraDeLimites()) {
      let index = ba.indexOf(this);
      if (index !== -1) ba.splice(index, 1);
    }
  }

  // Dibujar la bala
  dibujar() {
    push();
    translate(this.x, this.y);
    scale(0.010);
    image(balaPersonaje, 0, 0);
    pop();
  }

  // Verifica colisión con las paredes del mapa
  verificarColision() {
    let aux = dibujo.cercaA(this.x, this.y);
    return dist(this.x, this.y, aux.x, aux.y) < 10;
  }

  // Verifica si la bala está fuera de los límites del mapa
  fueraDeLimites() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }
}