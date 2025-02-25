//====================================
// Clase que maneja el dibujo del mapa y las colisiones con líneas
class Dibujo {
  constructor() {
    this.lineas = [];
  }

  addLinea(lin) {
    this.lineas.push(lin);
  }

  dibujar() {
    this.lineas.forEach(linea => linea.dibujar());
  }

  // Encuentra el punto más cercano en las líneas al punto dado
  cercaA(px, py) {
    let dMenor = Infinity;
    let puntoCercano = new Punto(0, 0);

    this.lineas.forEach(lin => {
      let aux = lin.lineaPuntoSegmento(new Punto(px, py));
      let d = dist(aux.x, aux.y, px, py);
      if (d < dMenor) {
        dMenor = d;
        puntoCercano = aux;
      }
    });

    return puntoCercano;
  }
}

//====================================
// Clase para representar una línea en el mapa
class Linea {
  constructor(pa, pb) {
    this.a = pa;
    this.b = pb;
  }

  dibujar() {
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }

  // Encuentra el punto más cercano en la línea a un punto dado
  lineaPuntoSegmento(pto) {
    let A = pto.x - this.a.x;
    let B = pto.y - this.a.y;
    let C = this.b.x - this.a.x;
    let D = this.b.y - this.a.y;

    let dot = A * C + B * D;
    let len_sq = C * C + D * D;
    let param = dot / len_sq;

    if (param < 0) return new Punto(this.a.x, this.a.y);
    if (param > 1) return new Punto(this.b.x, this.b.y);
    return new Punto(this.a.x + param * C, this.a.y + param * D);
  }
}

//====================================
// Clase para representar un punto en el mapa
class Punto {
  constructor(px, py) {
    this.x = px;
    this.y = py;
  }
}