function llenarBotiquines(){
  bo.push(new kit(xB1, yB1, 10));
  bo.push(new kit(xB2, yB2, 10));
  bo.push(new kit(xB3, yB3, 10));
  bo.push(new kit(xB4, yB4, 10));
  bo.push(new kit(xB5, yB5, 10));
  bo.push(new kit(xB6, yB6, 10));
}
//-----------------------------
class kit{
  constructor(_x,_y) {
    this.x = _x;
    this.y = _y;
  }
  mostrar() {
    push();
    translate(this.x,this.y);
    scale(0.1);
    translate(-this.x,-this.y);
    image(Botiquin,this.x,this.y);
    pop();
    fill(120,30,160);
    //circle(this.x, this.y, 10);
  }
}