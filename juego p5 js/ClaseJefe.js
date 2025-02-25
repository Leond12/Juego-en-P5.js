// -----------------------------
// Clase del jefe final
class Boss {
  constructor() {
    this.x = 365;
    this.y = 1160;
    this.velocidad = 2;
    this.direccion = "horizontal"; // Alterna entre "horizontal" y "vertical"
    this.limiteMin = 300;
    this.limiteMax = 600;
    this.movimientoDerecha = true;
  }

  // Movimiento del jefe
  mover() {
    if (this.direccion === "horizontal") {
      this.x += this.movimientoDerecha ? this.velocidad : -this.velocidad;
      if (this.x >= this.limiteMax || this.x <= this.limiteMin) {
        this.movimientoDerecha = !this.movimientoDerecha;
        this.direccion = "vertical"; // Cambia a movimiento vertical
      }
    } else {
      this.y += this.movimientoDerecha ? this.velocidad : -this.velocidad;
      if (this.y >= this.limiteMax || this.y <= this.limiteMin) {
        this.movimientoDerecha = !this.movimientoDerecha;
        this.direccion = "horizontal"; // Cambia a movimiento horizontal
      }
    }
  }

  // Disparo del jefe
  atacar() {
    if (frameCount % 80 === 0) {
      let direcciones = ["abajo", "arriba", "derecha", "izquierda"];
      direcciones.forEach(dir => vbb.push(new BalaJefe(this.x, this.y, dir)));
    }

    if (frameCount % 145 === 0) {
      vbb.push(new BalaBossEspecial(this.x, this.y)); // Disparo especial
    }
  }

  // Dibujar al jefe
  dibujar() {
    push();
    translate(this.x, this.y);
    scale(0.5);
    image(bossF, 0, 0);
    pop();
  }
}