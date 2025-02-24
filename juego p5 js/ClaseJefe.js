class Boss{
  constructor(){
    this.x = 365;
    this.y = 1160;
  }
  dibujar(){
    //-------------------
    push();
    translate(this.x,this.y);
    //rotate(angulo(this.x,this.y,mouseX,mouseY)+PI/2);
    scale(0.5);
    translate(-this.x,-this.y);
    image(bossF,this.x,this.y);
    pop();
    //--------------------
    fill(50,200,160);
    //circle(this.x,this.y,200);
    fill(0);
  }
}