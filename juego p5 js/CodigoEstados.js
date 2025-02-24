function dibujarEstado0(){
    background(0);
    push();
    translate(x,y);
    rotate(0);
    esc = esc - (100-1.3)/150;
    if(esc <1.3){esc = 1.3;}
    scale(esc);
    translate(-x,-y);
    image(inicio,x,y);
    pop();  
    ctd2--;
    if (ctd2 <= 0){
      estado = 1;
      ele = createAudio('inicio.mpeg');
      ele.autoplay(true);
    }
}
//-----------------------------
function dibujarEstado11(){
    background(0);
    push();
    translate(x,y);
    rotate(0);
    esc = esc - (100-0.9)/150;
    if(esc <0.9){esc = 0.9;}
    scale(esc);
    translate(-x,-y);
    image(credito,750,y);
    pop(); 
    ctd3--;
    if (ctd3 <= 0){
      estado = 0;
    }
}
//-----------------------------
function dibujarEstado1(){
   push();
   translate(x,y);
   rotate(0);
   esc = esc - (100-1.3)/150;
   if(esc <1.3){esc = 1.3;}
   scale(esc);
   translate(-x,-y);
   image(portada,500,y);
   pop();  
   ctd--;
   if (ctd <= 0){
    llenarMunicion();
    llenarBotiquines()
    llenarEnemigosA();
    llenarEnemigosB();
    llenarEnemigosC();
    llenarEnemigosD();
    llenarEnemigosE();
    llenarEnemigosF();
    llenarvectorBoss();
    llenarvectorRVision();
    ba = [];
    //vbe = [];
    vbe1 = [];
    vbe2 = [];
    vbe3 = [];
    vbe4 = [];
    vbbA = [];
    vbbB = [];
    vbbD = [];
    vbbI = [];
    vbb = [];
    vbeP = [];
    estado = 2;
  }
}
//-----------------------------
function dibujarEstado2(){
    personaje.mover();
    personaje.dibujar();
  for (let aux of rvis){
    aux.dibujar();
  }
  for (let aux of ene){
    //aux.mover();
    aux.dibujar();
  }
  for (let aux of enedi){
    aux.moverB1();
    aux.moverB2();
    aux.moverC2();
    aux.dibujar();
  }
  for (let aux of eneab){
    aux.moverC1();
    aux.dibujar();
  }
  for (let aux of vboss){
    aux.dibujar();
  }
  for (let aux of vbb){
    aux.mover();
    aux.dibujar();
  }
  for (let aux of vbbA){
    //aux.mover1();
    aux.moverA();
    aux.dibujar();
  }
  for (let aux of vbbB){
    //aux.mover1();
    aux.moverB();
    aux.dibujar();
  }
  for (let aux of vbbD){
    //aux.mover1();
    aux.moverD();
    aux.dibujar();
  }
  for (let aux of vbbI){
    //aux.mover1();
    aux.moverI();
    aux.dibujar();
  }
  for (let aux of ba){
    aux.mover();
    aux.dibujar();
  }
  for (let aux of vbe1){
    //aux.mover1();
    aux.moverA();
    aux.dibujar();
  }
  for (let aux of vbe2){
    //aux.mover1();
    aux.moverB();
    aux.dibujar();
  }
  for (let aux of vbe3){
    //aux.mover1();
    aux.moverD();
    aux.dibujar();
  }
  for (let aux of vbe4){
    //aux.mover1();
    aux.moverI();
    aux.dibujar();
  }
  for (let aux of vbeP){
    aux.mover1();
    aux.dibujar();
  }
  for (let aux of mu) {
    aux.mostrar();
  }
  for (let aux of bo) {
    aux.mostrar();
  }
  CargadorPJ();
  VidaPj();
  VidaBoss();
  colisionBalaEnemigo1();
  colisionBalaEnemigo2();
  colisionBalaEnemigo3();
  colisionBalaPersonaje1();
  colisionBalaPersonaje2();
  colisionBalaPersonaje3();
  colisionBalaPersonaje4();
  colisionBalaPersonaje5();
  colisionBalaPersonajeBA();
  colisionBalaPersonajeBB();
  colisionBalaPersonajeBD();
  colisionBalaPersonajeBI();
  colisionBalaPersonajeBE();
  colisionBalaJefe();
  if (vboss.length == 0 && ene.length == 0){
    estado =4;
    ammu = false;
    ctd = 200;
    cgd = 0;
    Mercy = 50;
    lifeP = 100;
    lifeB = 5000;
  }
}
//-----------------------------
function dibujarEstado3(){
  if (noLoop){
    personaje.mover();
    personaje.dibujar();
  }
  textStyle(BOLD);
  textSize(25);
  fill(255,0,0);
  text("Presione C para continuar",personaje.x - 100,personaje.y + 10);
  noLoop(); 
}
//-----------------------------
function dibujarEstado4(){
  loop();
}
//-----------------------------
function dibujarEstado5(){
      estado =1;
      ctd = 200;
      lifeP = 100;
  personaje.x = 60;
  personaje.y = 365;   
}
//-----------------------------
function dibujarEstado6(){
  let ele;
  imageMode(CENTER);
  push();
  translate(x,y);
  rotate(0);
  esc = esc - (130-1)/120;
  if(esc <1){esc = 1;}
    scale(esc);
    translate(-x,-y);
    image(fin,765,750);
    pop(); 
}
//-----------------------------
function VidaPj(){
  if (lifeP <= 0){
    fill(0);
    textSize(20);
    textStyle(BOLD);
    text("Vida",personaje.x - 25,personaje.y + 65);
    text(lifeP,personaje.x + 25,personaje.y + 65);
    estado = 3;
    ctd = 200;
    lifeP = 100;
    personaje.x = 60;
    personaje.y = 365;
    ele2 = createAudio('gameover.mp4');
    ele2.autoplay(true);
    ele.autoplay(false);
  } else {
      fill(0);
      textSize(20);
      textStyle(BOLD);
      text("Vida",personaje.x - 25,personaje.y + 65);
      text(lifeP,personaje.x + 25,personaje.y + 65);
      ele.autoplay(true);
  }
}
function VidaBoss(){
  if (lifeB <= 0){
    fill(0,0,130);
    textSize(20);
    textStyle(BOLD);
    text("Crugger",boss.x- 100,boss.y + 120);
    text(lifeB,boss.x + 50,boss.y + 120);
  } else {
      fill(0,0,130);
      textSize(20);
      textStyle(BOLD);
      text("Crugger",boss.x- 100,boss.y + 120);
      text(lifeB,boss.x + 50,boss.y + 120);
  }
}