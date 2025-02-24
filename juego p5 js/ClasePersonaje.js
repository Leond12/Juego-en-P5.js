class Personaje{
  constructor(){
    this.x = 60; 
    this.y = 365;
    this.a = false;
    this.d = false;
    this.w = false;
    this.s = false;
    this.vel = 5;
  }
  mover(){
    if (this.d){this.x = this.x + this.vel;}
    if (this.a){this.x = this.x - this.vel;}
    if (this.w){this.y = this.y - this.vel;}
    if (this.s){this.y = this.y + this.vel;}
  }
  dibujar(){
    if (Pers === 1){
    //-------------------
    push();
    translate(this.x,this.y);
    //rotate(angulo(this.x,this.y,mouseX,mouseY)+PI/2);
    scale(0.2);
    translate(-this.x,-this.y);
    image(caracterA,this.x,this.y);
    pop();
    //-------------------- 
    }
    if (Pers === 2.2){
    //-------------------
    push();
    translate(this.x,this.y);
    scale(0.2);
    translate(-this.x,-this.y);
    image(caracterD,this.x,this.y);
    pop();
    //-------------------- 
    }
    if (Pers === 3){
    //-------------------
    push();
    translate(this.x,this.y);
    //rotate(angulo(this.x,this.y,mouseX,mouseY)+PI/2);
    scale(0.2);
    translate(-this.x,-this.y);
    image(caracterI,this.x,this.y);
    pop();
    //-------------------- 
    }
    if (Pers === 4){
    //-------------------
    push();
    translate(this.x,this.y);
    //rotate(angulo(this.x,this.y,mouseX,mouseY)+PI/2);
    scale(0.2);
    translate(-this.x,-this.y);
    image(caracterB,this.x,this.y);
    pop();
    //-------------------- 
    }
    //-----------Colision con la municion--------------
    var indice = -1;
    for(let i = 0; i < mu.length; i++){
      var di = dist(this.x, this.y,mu[i].x,mu[i].y);
        if (di < 26 && keyCode === 82){
          indice = i;
          //Recargar();
        }
        if (di < 26){text("Recargar (R)",this.x - 40,this.y + 45);}
    }
    if (indice != -1){
        mu.splice(indice,1);
        ammu = true;
        cgd = 30;
    }
    //-----------Colision con el botiquín--------------
    var indce = -1;
    for(let i = 0; i < bo.length; i++){
      var l = dist(this.x, this.y,bo[i].x,bo[i].y);
        if (l < 26 && keyCode === 69){
          indce = i;
          //Recargar();
        }
        if (l < 26){text("Recoger (E)",this.x - 40,this.y + 45);}
    }
    if (indce != -1){
        bo.splice(indce,1);
      if(lifeP <= 50){lifeP = lifeP + Mercy}
      else{
        var lifePNew = 100 - lifeP;
        lifeP += lifePNew;
      }
    }
      //-------------------
      fill(255,0,0);
      //circle(this.x,this.y,40);
      //var ang = angulo(this.x,this.y,mouseX,mouseY);
      //line(this.x,this.y,this.x+20*cos(ang),this.y+20*sin(ang));
      //========================================
      var aux = dibujo.cercaA(this.x,this.y);
      var dista = dist(this.x,this.y,aux.x,aux.y);
      if (dista<25){
        var angu = angulo(aux.x,aux.y,this.x,this.y);
        var entro = 25 - dista;
        this.x = this.x + entro*cos(angu);
        this.y = this.y + entro*sin(angu);
      } 
   }
}