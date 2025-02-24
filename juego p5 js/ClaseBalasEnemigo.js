class BalaEnemigoA{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vel = 4;
    this.angulo = angulo(this.x, this.y, personaje.x, personaje.y);
  }
  moverA(){
    this.y = this.y + 2 + this.vel;
  }
  dibujar(){
    //-------------------
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.006);
    translate(-this.x,-this.y);
    image(balaEnemigo,this.x,this.y);
    pop();
    //--------------------
    //fill(0,140,200);
    //circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbe1.length; i++){
        var di = dist(this.x,this.y,vbe1[i].x,vbe1[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbe1.splice(indice,1);
      }
    }
  }
}
class BalaEnemigoB{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vel = 4;
    this.angulo = angulo(this.x, this.y, personaje.x, personaje.y);
  }
  moverB(){
    this.y = this.y - 2 - this.vel;
  }
  dibujar(){
    //-------------------
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.006);
    translate(-this.x,-this.y);
    image(balaEnemigo,this.x,this.y);
    pop();
    //--------------------
    //fill(0,140,200);
    //circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbe2.length; i++){
        var di = dist(this.x,this.y,vbe2[i].x,vbe2[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbe2.splice(indice,1);
      }
    }
  }
}
class BalaEnemigoD{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vel = 4;
    this.angulo = angulo(this.x, this.y, personaje.x, personaje.y);
  }
  moverD(){
    this.x = this.x + 2 + this.vel;
  }
  dibujar(){
    //-------------------
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.006);
    translate(-this.x,-this.y);
    image(balaEnemigo,this.x,this.y);
    pop();
    //--------------------
    //fill(0,140,200);
    //circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbe3.length; i++){
        var di = dist(this.x,this.y,vbe3[i].x,vbe3[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbe3.splice(indice,1);
      }
    }
  }
}
class BalaEnemigoI{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vel = 4;
    this.angulo = angulo(this.x, this.y, personaje.x, personaje.y);
  }
  moverI(){
    this.x = this.x - 2 - this.vel;
  }
  dibujar(){
    //-------------------
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.006);
    translate(-this.x,-this.y);
    image(balaEnemigo,this.x,this.y);
    pop();
    //--------------------
    //fill(0,140,200);
    //circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbe4.length; i++){
        var di = dist(this.x,this.y,vbe4[i].x,vbe4[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbe4.splice(indice,1);
      }
    }
  }
}
class BalaEnemigoP{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vel = 8;
    this.angulo = angulo(this.x, this.y, personaje.x, personaje.y);
  }
  mover1(){
    this.x = this.x + this.vel * cos(this.angulo);
    this.y = this.y + this.vel * sin(this.angulo);
  }
  dibujar(){
    //-------------------
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.10);
    translate(-this.x,-this.y);
    image(azul,this.x,this.y);
    pop();
    //--------------------
    //fill(0,140,200);
    //circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbeP.length; i++){
        var di = dist(this.x,this.y,vbeP[i].x,vbeP[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbeP.splice(indice,1);
      }
    }
  }
}