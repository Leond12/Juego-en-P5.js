class EnemigoE{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  dibujar(){
    //-------------------
    push();
    translate(this.x,this.y);
    //rotate(angulo(this.x,this.y,mouseX,mouseY)+PI/2);
    scale(0.2);
    translate(-this.x,-this.y);
    image(SkinEnemigoE,this.x,this.y);
    pop();
    //--------------------
    //fill(0,0,255);
    //circle(this.x,this.y,10);
    fill(0);
    //text(lifeE,this.x,this.y); 
  }
}
class EnemigoM{
  constructor(x,y,der,izq,up,down,vel){
    this.x = x;
    this.y = y;
    this.der = der;
    this.izq = izq;
    this.up = up;
    this.down = down;
    this.vel = 1.6;
    this.angulo = angulo(this.x, this.y, personaje.x, personaje.y);
  }
  moverB1(){ // movimiento de derecha a izquierda
       if (this.der){this.x = this.x + 1 + this.vel;}
       else{this.x = this.x - 1 - this.vel;}
       if (this.x >= 1280){this.der = false;}
       if (this.x <= 800){this.der = true;} 
  }
  moverB2(){ // movimiento de derecha a izquierda
       if (this.der){this.x = this.x + 1 + this.vel;}
       else{this.x = this.x - 1 - this.vel;}
       if (this.x >= 1400){this.der = false;}
       if (this.x <= 935){this.der = true;} 
  }
  moverC1(){ // movimiento de arriba a abajo
      if (this.up){this.y = this.y + 1 + this.vel;}
      else{this.y = this.y - 1 - this.vel;}
      if (this.y >= 560){this.up = false;}
      if (this.y <= 440){this.up = true;}
  }
  moverC2(){ // movimiento de derecha a izquierda
       if (this.der){this.x = this.x - 1 + this.vel;}
       else{this.x = this.x + 1 - this.vel;}
       if (this.x >= 1530){this.der = false;}
       if (this.x <= 1009){this.der = true;} 
  }
  dibujar(){
    //-------------------
    push();
    translate(this.x,this.y);
    //rotate(angulo(this.x,this.y,mouseX,mouseY)+PI/2);
    scale(0.2);
    translate(-this.x,-this.y);
    image(SkinEnemigo,this.x,this.y);
    pop();
    //--------------------
    //fill(0,0,255);
    //circle(this.x,this.y,50);
    fill(0);
    //text(lifeE,this.x,this.y); 
  }
}