class BalaBossA{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vel = 4;
  }
  moverA(){
    this.y = this.y + 2 + this.vel;
  }
  dibujar(){
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.12);
    translate(-this.x,-this.y);
    image(Balajefe,this.x,this.y);
    pop();
    //--------------------
    fill(0,140,200);
    circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbbA.length; i++){
        var di = dist(this.x,this.y,vbbA[i].x,vbbA[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbbA.splice(indice,1);
      }
    }
  }
}
class BalaBossB{
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
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.12);
    translate(-this.x,-this.y);
    image(Balajefe,this.x,this.y);
    pop();
    //--------------------
    fill(0,140,200);
    circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbbB.length; i++){
        var di = dist(this.x,this.y,vbbB[i].x,vbbB[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbbB.splice(indice,1);
      }
    }
  }
}
class BalaBossD{
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
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.12);
    translate(-this.x,-this.y);
    image(Balajefe,this.x,this.y);
    pop();
    //--------------------
    fill(0,140,200);
    circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbbD.length; i++){
        var di = dist(this.x,this.y,vbbD[i].x,vbbD[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbbD.splice(indice,1);
      }
    }
  }
}
class BalaBossI{
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
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.12);
    translate(-this.x,-this.y);
    image(Balajefe,this.x,this.y);
    pop();
    //--------------------
    fill(0,140,200);
    circle(this.x,this.y,15);
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbbI.length; i++){
        var di = dist(this.x,this.y,vbbI[i].x,vbbI[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbbI.splice(indice,1);
      }
    }
  }
}

class BalaBoss{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vel = 10;
    this.angulo = angulo(this.x, this.y, personaje.x, personaje.y);
  }
  mover(){
    this.x = this.x + this.vel * cos(this.angulo);
    this.y = this.y + this.vel * sin(this.angulo);
  }
  dibujar(){
    push();
    translate(this.x,this.y);
    rotate(this.y = this.y + 2);
    scale(0.12);
    translate(-this.x,-this.y);
    image(BulletBoss,this.x,this.y);
    pop();
    //--------------------
    fill(0,140,200);
    circle(this.x,this.y,15);
    //
    var aux = dibujo.cercaA(this.x,this.y);
    let dista = dist(this.x,this.y,aux.x,aux.y);
    if (dista<10){
      //print("colisiono!");
      var angu = angulo(aux.x,aux.y,this.x,this.y);
      //angu = angu + Math.PI;
      var entro = 10 - dista;
      this.x = this.x + entro*cos(angu);
      this.y = this.y + entro*sin(angu);
      var indice = -1;
      for(let i = 0; i < vbb.length; i++){
        var di = dist(this.x,this.y,vbb[i].x,vbb[i].y);
        if (di < 10){ 
          indice = i;
        }
      }
      if (indice != -1){
       vbb.splice(indice,1);
      }
    }
  }
}