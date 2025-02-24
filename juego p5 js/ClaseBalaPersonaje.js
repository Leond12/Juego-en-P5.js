class Bala {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.angulo = angulo(this.x, this.y, mouseX, mouseY);
    this.vel = 9;
  }
  mover() {
    this.x = this.x + this.vel * cos(this.angulo);
    this.y = this.y + this.vel * sin(this.angulo);
  }
  dibujar() {
    //-------------------
    push();
    translate(this.x,this.y);
    //rotate(angulo(this.x,this.y));
    scale(0.010);
    translate(-this.x,-this.y);
    image(balaPersonaje,this.x,this.y);
    pop();
    //--------------------
    //circle(this.x, this.y, 20);
    //========================================
    var aux = dibujo.cercaA(this.x,this.y);
    var dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < ba.length; i++){
        var di = dist(this.x,this.y,ba[i].x,ba[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       ba.splice(indice,1);
      }
    }
  }
}