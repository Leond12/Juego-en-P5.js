//Vectores
var exist = true;
var ba = [];
var mu = [];
var bo = [];
var vbe1 = [];
var vbe2 = [];
var vbe3 = [];
var vbe4 = [];
var vbeP = [];
var vboss = [];
//Balas del Boss
var vbb = [];
var vbbA = [];
var vbbB = [];
var vbbD = [];
var vbbI = [];
var rvis = [];
//Vectores de los enemigos
var ene = [];
var enedi = [];
var eneab = [];
//Estados
var estado = 0;
var ctd = 200;//200
var ctd2 = 400;//400
var ctd3 = 100;
var esc = 100;
//Variables para el movimiento
var ang = Math.PI/4;
//Variables para el mapa
var A,B;
var dibujo;
//Portada
var x = 330;
var y = 298;
var xF = 765;
var yF = 750;
//municion
var ammu = false;
var cgd = 0;
var x1 = 400;
var y1 = 130;
var x2 = 230;
var y2 = 367;
var x3 = 685;
var y3 = 357;
var x4 = 480;
var y4 = 550;
var x5 = 1200;
var y5 = 175;
var x6 = 1300;
var y6 = 500;
var x7 = 685;
var y7 = 1100;
var x8 = 935;
var y8 = 1328;
var x9 = 1346;
var y9 = 1332;
var x10 = 1350; //1300
var y10 = 1120; //1200
var x11 = 370;
var y11 = 1000;
var x12 = 120;
var y12 = 1200;
var x13 = 370;
var y13 = 1405;
//enemigos cuarto A
var xE1 = 328;//enemigo del medio
var yE1 = 177;
var xE2 = 489;//enemigo inferior derecho
var yE2 = 270;
var xE3 = 165;//enemigo superior izquierdo 
var yE3 = 105;
var xE4 = 153;//enemigo inferior izquierdo
var yE4 = 257;
var xE5 = 498;//enemigo superior derecho
var yE5 = 103;
//enemigos cuarto B
var xE6 = 916;//enemigo superior izquierdo
var yE6 = 126;
var xE7 = 1316;//enemigo superior derecho
var yE7 = 127;
var xE8 = 1110;//enemigo del medio
var yE8 = 230;
var xE9 = 1330;//enemigo inferior derecho
var yE9 = 327;
var xE10 = 800;//enemigo con movimiento superior
var yE10 = 180;
var xE11 = 935;//enemigo con movimiento inferior
var yE11 = 290;
//enemigos cuarto C
var xE12 = 131;//enemigo superior izquierdo
var yE12 = 469;
var xE13 = 302;//enemigo del medio
var yE13 = 466;
var xE14 = 486;//enemigo superior derecho
var yE14 = 465;
var xE15 = 223;//enemigo inferior izquierdo
var yE15 = 535;
var xE16 = 400;//enemigo inferior derecho
var yE16 = 535;
//enemigos cuarto D
var xE17 = 842;//enemigo inferior izquierdo
var yE17 = 556;
var xE18 = 916;//enemigo superior derecho
var yE18 = 504;
var xE19 = 980;//enemigo con movimiento vertical izquierdo
var yE19 = 480;
var xE20 = 1350;//enemigo con movimiento vertical derecho
var yE20 = 480;
var xE21 = 430;//enemigo con movimiento horizontal
var yE21 = 535;
//enemigos cuarto E
var xE22 = 205;//enemigo superior izquierdo
var yE22 = 1053;
var xE23 = 187;//enemigo del medio izquierdo
var yE23 = 1213;
var xE24 = 192;//enemigo inferior izquierdo
var yE24 = 1372;
var xE25 = 514;//enemigo superior derecho
var yE25 = 1106;
var xE26 = 511;//enemigo inferior izquierdo
var yE26 = 1271;
//enemigos cuarto F
var xE27 = 1127;//enemigo inferior izquierdo
var yE27 = 1121;
var xE28 = 1145;//enemigo superior derecho
var yE28 = 922;
var xE29 = 1328;
var yE29 = 953;
var exist = true;
//Salud
var lifeP = 100;
var lifeE = 100;
var lifeB = 1000; //250 aciertos para matar
var Mercy = 50;
var DamageP = 20;
var DamageE = 20;
//Botiquines
var xB1 = 705;
var yB1 = 70;
var xB2 = 700;
var yB2 = 500;
var xB3 = 100;
var yB3 = 550;
var xB4 = 695;
var yB4 = 1390;
var xB5 = 1150;
var yB5 = 1330;
var xB6 = 550;
var yB6 = 1390;
//Perspectica del Personaje
var Pers = 2.2;
var vidapersonaje = false;
//BalasMuerte
var muerte0 = false;
var muerte1 = false;
var muerte2 = false;
var muerte3 = false;
var muerte4 = false;
var muerte5 = false;
var muerte6 = false;
var muerte7 = false;
var muerte8 = false;
var muerte9 = false;
var muerte10 = false;
var muerte11 = false;
var muerte12 = false;
var muerte13 = false;
var muerte14 = false;
var muerte15 = false;
var muerte16 = false;
var muerte17 = false;
var muerte18 = false;
var muerte19 = false;
var muerte20 = false;
var muerte21 = false;
var muerte22 = false;
var muerte23 = false;
var enem0 = 1;
var enem1 = 1;
var enem2 = 1;
var enem3 = 1;
var enem4 = 1;
var enem5 = 1;
var enem6 = 1;
var enem7 = 1;
var enem8 = 1;
var enem9 = 1;
var enem10 = 1;
var enem11 = 1;
var enem12 = 1;
var enem13 = 1;
var enem14 = 1;
var enem15 = 1;
var enem16 = 1;
var enem17 = 1;
var enem18 = 1;
var enem19 = 1;
var enem20 = 1;
var enem21 = 1;
var enem22 = 1;
var enem23 = 1;
function preload(){
  portada = loadImage("portada.original2.jpg");
  caracterA = loadImage("CaracterA.png");
  caracterB = loadImage("CaracterB.png");
  caracterD = loadImage("personajeabajo2.png");
  caracterI = loadImage("CaracterI.png");
  pause = loadImage("menupause1.jpeg");
  fin = loadImage("findeljuego.jpeg");
  inicio = loadImage("logo1.1.png");
  credito = loadImage("creditos.jpg");
  menuplay = loadImage("menuiniciplay.jpeg");
  continuar= loadImage("continuar1.jpeg");
  fondo = loadImage("MapaFinal.png");
  gun = loadImage("gun.png");
  bossF = loadImage("jefe3.png");
  SkinEnemigo = loadImage("enemigo2.png");
  SkinEnemigoE = loadImage("enemigoEst.png");
  municion = loadImage("municion.png");
  balaPersonaje = loadImage("BalaPersonaje.png");
  balaEnemigo = loadImage("BalaEnemigo.png");
  azul = loadImage("bolazul.png");
  Botiquin = loadImage("botiquin2.png");
  Balajefe = loadImage("bolajefe.png");
  BulletBoss = loadImage("bolajefe2.png");
  CaracterD1 = loadImage("CaracterD1.png");
  CaracterD2 = loadImage("CaracterD2.png");
}
//-----------------------------
let slider;
let ele;
let ele2;
//-----------------------------
function draw() {
  background(150,150,150);
  dibujo.dibujar();
  push();
  translate(xF,yF);
  rotate(0);
  esc = esc - (100-1.0)/100;
  if(esc <1.0){esc = 1.0;}
  scale(esc);
  translate(-xF,-yF);
  image(fondo,xF,yF);
  pop();
  fill(255);
  //----------------------
  if (estado == 0){
    dibujarEstado0();
  }
  if (estado == 1){
    dibujarEstado1();
  }
  if (estado == 2){
  var di = dist(vision.x,vision.y,personaje.x,personaje.y);
    if (di <= 260 && di>=0){
      llenarvectorBEA();
    }
    dibujarEstado2();
  var dis = dist(vision.a,vision.b,personaje.x,personaje.y);
    if (dis <= 380 && dis>=0){
      llenarvectorBEB();
    }
  var dista = dist(vision.r,vision.v,personaje.x,personaje.y);
    if (dista <= 320 && dista>=0){
      llenarvectorBEC();
    }
  var distan = dist(vision.o,vision.p,personaje.x,personaje.y);
    if (distan <= 300 && di>=0){
      llenarvectorBED();
    }

  var distanc = dist(vision.s,vision.t,personaje.x,personaje.y);
    if (distanc <= 380 && distanc>=0){
      llenarvectorBEE();
      llenarvectorBalaBoss();
    }

  var distanci = dist(vision.m,vision.n,personaje.x,personaje.y);
    if (distanci <= 280 && distanci>=0){
      llenarvectorBEF();
    }
}
  //generar disparo
    if (mouseIsPressed === true && frameCount % 10 == 0 && ammu === true && cgd > 0){  
      if (mouseButton === LEFT){
        ba.push(new Bala(personaje.x, personaje.y,10));
        cgd--;
      }
    }
  if(estado == 3){
    dibujarEstado6();
  }
  if(estado == 4){
    dibujarEstado11();
  }
}