//====================================
class Dibujo{
  constructor(){
     this.lineas = []
   }  
  addLinea(lin) {
    this.lineas.push(lin);
  }
  dibujar() {
    for (let aux of this.lineas) {
      aux.dibujar();
    }
  }
  cercaA(px, py) {
    this.dmenor = 999999;
    this.cx = 0;
    this.cy = 0;
    for (let lin of this.lineas) {
      var aux = lin.lineaPuntoSegmento(new Punto(px, py));
      var d = dist(aux.x, aux.y, px, py);
      if (d < this.dmenor) {
        this.dmenor = d;
        this.cx = aux.x;
        this.cy = aux.y;
      }
    }
    return new Punto(this.cx, this.cy);
  }
}
//====================================
class Linea {
  constructor(pa, pb) {
    this.a = pa;
    this.b = pb;
  }
  dibujar(){
    line(this.a.x,this.a.y,this.b.x,this.b.y);
  }
  lineaPuntoSegmento(pto) {
    this.A = pto.x - this.a.x;
    this.B = pto.y - this.a.y;
    this.C = this.b.x - this.a.x;
    this.D = this.b.y - this.a.y;

    this.dot = this.A * this.C + this.B * this.D;
    this.len_sq = this.C * this.C + this.D * this.D;
    this.param = this.dot / this.len_sq;

    this.nx = 0;
    this.ny = 0;

    if (this.param < 0) {
      this.nx = this.a.x;
      this.ny = this.a.y;
    } else if (this.param > 1) {
      this.nx = this.b.x;
      this.ny = this.b.y;
    } else {
      this.nx = this.a.x + this.param * this.C;
      this.ny = this.a.y + this.param * this.D;
    }
    return new Punto(this.nx, this.ny);
  }
}
//====================================
class Punto {
  constructor(px, py) {
    this.x = px;
    this.y = py;
  }
}