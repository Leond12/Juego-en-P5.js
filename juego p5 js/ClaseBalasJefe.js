// -----------------------------
// Clase base para las balas del jefe
class BalaJefe {
  constructor(x, y, direccion, velocidad = 4) {
    this.x = x;
    this.y = y;
    this.vel = velocidad;
    this.direccion = direccion;
    this.angulo = angulo(this.x, this.y, personaje.x, personaje.y);
  }

  // Movimiento según la dirección
  mover() {
    switch (this.direccion) {
      case "abajo":
        this.y += this.vel;
        break;
      case "arriba":
        this.y -= this.vel;
        break;
      case "derecha":
        this.x += this.vel;
        break;
      case "izquierda":
        this.x -= this.vel;
        break;
      case "perseguidora":
        this.x += this.vel * cos(this.angulo);
        this.y += this.vel * sin(this.angulo);
        break;
    }

    // Verificar si la bala colisiona con el mapa o está fuera del límite
    if (this.verificarColision() || this.fueraDeLimites()) {
      this.eliminar();
    }
  }

  // Dibujar la bala
  dibujar() {
    push();
    translate(this.x, this.y);
    scale(0.12);
    image(Balajefe, 0, 0);
    pop();
  }

  // Verifica colisión con el entorno
  verificarColision() {
    let aux = dibujo.cercaA(this.x, this.y);
    return dist(this.x, this.y, aux.x, aux.y) < 10;
  }

  // Verifica si la bala está fuera de los límites del mapa
  fueraDeLimites() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }

  // Eliminar la bala de su respectivo array
  eliminar() {
    let lista = this.direccion === "perseguidora" ? vbb : vbbA;
    let index = lista.indexOf(this);
    if (index !== -1) lista.splice(index, 1);
  }
}

// -----------------------------
// Bala especial del jefe (rápida y perseguidora)
class BalaBossEspecial extends BalaJefe {
  constructor(x, y) {
    super(x, y, "perseguidora", 10);
  }

  dibujar() {
    push();
    translate(this.x, this.y);
    scale(0.12);
    image(BulletBoss, 0, 0);
    pop();
  }
}
