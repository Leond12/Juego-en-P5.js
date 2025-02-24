/*
//-----------------------------
function Recargar(){
  if (cgd < 0){
    cgd = cgd - 30;
  }
}
//-----------------------------
*/
function llenarMunicion(){
  mu.push(new Municion(x1, y1, 10));
  mu.push(new Municion(x2, y2, 10));
  mu.push(new Municion(x3, y3, 10));
  mu.push(new Municion(x4, y4, 10));
  mu.push(new Municion(x5, y5, 10));
  mu.push(new Municion(x6, y6, 10));
  mu.push(new Municion(x7, y7, 10));
  mu.push(new Municion(x8, y8, 10));
  mu.push(new Municion(x9, y9, 10));
  mu.push(new Municion(x10, y10, 10));
  mu.push(new Municion(x11, y11, 10));
  mu.push(new Municion(x12, y12, 10));
  mu.push(new Municion(x13, y13, 10));
}
//-----------------------------
class Municion {
  constructor(_x,_y) {
    this.x = _x;
    this.y = _y;
  }
  mostrar() {
    push();
    translate(this.x,this.y);
    scale(0.1);
    translate(-this.x,-this.y);
    image(municion,this.x,this.y);
    pop();
  }
}
//-----------------------------
function CargadorPJ(){
  if (ammu === false){
    fill(0);
    textSize(20);
    //-------------------
      push();
      translate(personaje.x + 10,personaje.y + 75);
      scale(0.8);
      translate(-personaje.x + 10,- personaje.y + 75);
      image(gun,personaje.x + 10, personaje.y + 75);
      pop();
      //-------------------
    //text("Sin munición",10,430);
    text(cgd,personaje.x + 200,personaje.y + 205);
  } else{
    fill(0);
    textSize(20);
    //-------------------
      push();
      translate(personaje.x + 10,personaje.y + 75);
      scale(0.8);
      translate(- personaje.x + 10,- personaje.y + 75);
      image(gun,personaje.x + 10,personaje.y + 75);
      pop();
      //-------------------
    //text("Con munición",10,430);
      text(cgd,personaje.x + 200,personaje.y + 205);
  }
}
//-----------------------------