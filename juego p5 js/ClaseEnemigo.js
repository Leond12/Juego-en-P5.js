// -----------------------------
// Clase Base Enemigo
class Enemigo {
  constructor(x, y, imagen) {
    this.x = x;
    this.y = y;
    this.imagen = imagen;
  }

  dibujar() {
    push();
    translate(this.x, this.y);
    scale(0.2);
    image(this.imagen, 0, 0);
    pop();
  }
}

// -----------------------------
// Enemigo Estático (Hereda de Enemigo)
class EnemigoE extends Enemigo {
  constructor(x, y) {
    super(x, y, SkinEnemigoE);
  }
}

// -----------------------------
// Enemigo Móvil (Hereda de Enemigo)
class EnemigoM extends Enemigo {
  constructor(x, y, horizontal, limiteMin, limiteMax, velocidad = 1.6) {
    super(x, y, SkinEnemigo);
    this.horizontal = horizontal; // true: mueve en X, false: mueve en Y
    this.limiteMin = limiteMin;
    this.limiteMax = limiteMax;
    this.direccion = true; // true: avanza, false: retrocede
    this.velocidad = velocidad;
  }

  mover() {
    if (this.horizontal) {
      this.x += this.direccion ? this.velocidad : -this.velocidad;
      if (this.x >= this.limiteMax || this.x <= this.limiteMin) {
        this.direccion = !this.direccion;
      }
    } else {
      this.y += this.direccion ? this.velocidad : -this.velocidad;
      if (this.y >= this.limiteMax || this.y <= this.limiteMin) {
        this.direccion = !this.direccion;
      }
    }
  }
}