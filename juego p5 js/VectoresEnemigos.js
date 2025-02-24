//-----------------------------
function llenarEnemigosA(){
  ene = [];
    let moneda = random();
    if (moneda < 0.5){
      ene.push(enemigo1 = new EnemigoE(xE1,yE1,false));
      ene.push(enemigo2 = new EnemigoE(xE2,yE2,false));
      ene.push(enemigo3 = new EnemigoE(xE3,yE3,false));
      ene.push(enemigo4 = new EnemigoE(xE4,yE4,false));
      ene.push(enemigo5 = new EnemigoE(xE5,yE5,false));      
    } else {
      ene.push(enemigo1 = new EnemigoE(xE1,yE1,true));
      ene.push(enemigo2 = new EnemigoE(xE2,yE2,true));
      ene.push(enemigo3 = new EnemigoE(xE3,yE3,true));
      ene.push(enemigo4 = new EnemigoE(xE4,yE4,true));
      ene.push(enemigo5 = new EnemigoE(xE5,yE5,true));   
    }
}
function llenarEnemigosB(){
 //   ene = [];
    let moneda = random();
    if (moneda < 0.5){
      ene.push(enemigo6 = new EnemigoE(xE6,yE6,false));  
      ene.push(enemigo7 = new EnemigoE(xE7,yE7,false));
      ene.push(enemigo8 = new EnemigoE(xE8,yE8,false));
      ene.push(enemigo9 = new EnemigoE(xE9,yE9,false));
    } else{
      ene.push(enemigo6 = new EnemigoE(xE6,yE6,true));
      ene.push(enemigo7 = new EnemigoE(xE7,yE7,true));
      ene.push(enemigo8 = new EnemigoE(xE8,yE8,true));
      ene.push(enemigo9 = new EnemigoE(xE9,yE9,true));
    }
  enedi = [];
    let m = random();
    if (m < 0.5){
      enedi.push(enemigo10 = new EnemigoM(xE10,yE10,false));
      enedi.push(enemigo11 = new EnemigoM(xE11,yE11,false));
    } else{
      enedi.push(enemigo10 = new EnemigoM(xE10,yE10,true));
      enedi.push(enemigo11 = new EnemigoM(xE11,yE11,true));
    }
}
function llenarEnemigosC(){
 // ene = [];
    let moneda = random();
    if (moneda < 0.5){
      ene.push(enemigo12 = new EnemigoE(xE12,yE12,false));
      ene.push(enemigo13 = new EnemigoE(xE13,yE13,false));
      ene.push(enemigo14 = new EnemigoE(xE14,yE14,false));
      ene.push(enemigo15 = new EnemigoE(xE15,yE15,false));
      ene.push(enemigo16 = new EnemigoE(xE16,yE16,false));
    } else {
      ene.push(enemigo12 = new EnemigoE(xE12,yE12,true));
      ene.push(enemigo13 = new EnemigoE(xE13,yE13,true));
      ene.push(enemigo14 = new EnemigoE(xE14,yE14,true));
      ene.push(enemigo15 = new EnemigoE(xE15,yE15,true));
      ene.push(enemigo16 = new EnemigoE(xE16,yE16,true));
    }
}
function llenarEnemigosD(){
 // ene = [];
    let moneda = random();
    if (moneda < 0.5){
      ene.push(enemigo17 = new EnemigoE(xE17,yE17,false));
      ene.push(enemigo18 = new EnemigoE(xE18,yE18,false));
    } else{
      ene.push(enemigo17 = new EnemigoE(xE17,yE17,true));
      ene.push(enemigo18 = new EnemigoE(xE18,yE18,true));
    }
  eneab = [];
  let mo = random();
    if (mo < 0.5){
      eneab.push(enemigo19 = new EnemigoM(xE19,yE19,false));
      eneab.push(enemigo20 = new EnemigoM(xE20,yE20,false));
    }else{
      eneab.push(enemigo19 = new EnemigoM(xE19,yE19,true));
      eneab.push(enemigo20 = new EnemigoM(xE20,yE20,true));
    }
 // enedi = [];
    let m = random();
    if (m < 0.5){
      enedi.push(enemigo21 = new EnemigoM(xE21,yE21,false));
    }else{
      enedi.push(enemigo21 = new EnemigoM(xE21,yE21,true));
    }
}
function llenarEnemigosE(){
 // ene = [];
    let moneda = random();
    if (moneda < 0.5){
      ene.push(enemigo22 = new EnemigoE(xE22,yE22,false));
      ene.push(enemigo23 = new EnemigoE(xE23,yE23,false));
      ene.push(enemigo24 = new EnemigoE(xE24,yE24,false));
      ene.push(enemigo25 = new EnemigoE(xE25,yE25,false));
      ene.push(enemigo26 = new EnemigoE(xE26,yE26,false));
    } else{
      ene.push(enemigo22 = new EnemigoE(xE22,yE22,true));
      ene.push(enemigo23 = new EnemigoE(xE23,yE23,true));
      ene.push(enemigo24 = new EnemigoE(xE24,yE24,true));
      ene.push(enemigo25 = new EnemigoE(xE25,yE25,true));
      ene.push(enemigo26 = new EnemigoE(xE26,yE26,true));
    }
}
function llenarEnemigosF(){
  //ene = [];
    let moneda = random();
    if (moneda < 0.5){
      ene.push(enemigo27 = new EnemigoE(xE27,yE27,false));
      ene.push(enemigo28 = new EnemigoE(xE28,yE28,false));
      ene.push(enemigo29 = new EnemigoE(xE29,yE29,false));
    } else{
      ene.push(enemigo27 = new EnemigoE(xE27,yE27,true));
      ene.push(enemigo28 = new EnemigoE(xE28,yE28,true));
      ene.push(enemigo29 = new EnemigoE(xE29,yE29,true));
    }
}
//-----------------------------
function llenarvectorBEA(){
    if (frameCount % 75 == 0) {
      //vbe.push(new BalaEnemigo(enemigo1.x,enemigo1.y));
      //Balas de enemigos del cuarto A
      if (muerte1 == false){enem1 = 1;}
      if(enem1 == 1){
        vbe1.push(enem1 = new BalaEnemigoA(enemigo2.x,enemigo2.y));
        vbe2.push(enem1 = new BalaEnemigoB(enemigo2.x,enemigo2.y));
        vbe3.push(enem1 = new BalaEnemigoD(enemigo2.x,enemigo2.y));
        vbe4.push(enem1 = new BalaEnemigoI(enemigo2.x,enemigo2.y));
      }
      vbe1.push(new BalaEnemigoA(enemigo3.x,enemigo3.y));
      vbe2.push(new BalaEnemigoB(enemigo3.x,enemigo3.y));
      vbe3.push(new BalaEnemigoD(enemigo3.x,enemigo3.y));
      vbe4.push(new BalaEnemigoI(enemigo3.x,enemigo3.y));
      //Balas de enemigos del cuarto A (persiguen)
      if (muerte0 == false){enem0 = 1;}
      if (enem0 == 1){vbeP.push(enem0 = new BalaEnemigoP(enemigo1.x,enemigo1.y));}
      if (muerte1 == false){enem2 = 1;}
      if(enem1 == 1){vbeP.push(enem1 = new BalaEnemigoP(enemigo4.x,enemigo4.y));}
      if (muerte3 == false){enem3 = 1;}
      if(enem3 == 1){vbeP.push(enem3 = new BalaEnemigoP(enemigo5.x,enemigo5.y));}
    }
}
function llenarvectorBEB(){
  if (frameCount % 75 == 0) {
    //Balas de enemigos del cuarto B
    if (muerte5 == false){enem5 = 1;}
    if(enem5 == 1){
      vbe1.push(enem5 = new BalaEnemigoA(enemigo6.x,enemigo6.y));
      vbe2.push(enem5 = new BalaEnemigoB(enemigo6.x,enemigo6.y));
      vbe3.push(enem5 = new BalaEnemigoD(enemigo6.x,enemigo6.y));
      vbe4.push(enem5 = new BalaEnemigoI(enemigo6.x,enemigo6.y));
    }
    //Balas de enemigos del cuarto B (persiguen)
      vbeP.push(new BalaEnemigoP(enemigo7.x,enemigo7.y));
    if (muerte6 == false){enem6 = 1;}
    if(enem6 == 1){
      vbeP.push(enem6 = new BalaEnemigoP(enemigo8.x,enemigo8.y));
    }
      vbeP.push(new BalaEnemigoP(enemigo9.x,enemigo9.y));
  }
}
function llenarvectorBEC(){
  if (frameCount % 110 == 0) {
    if (muerte9 == false){enem9 = 1;}
    if(enem9 == 1){
      //Balas de enemigos del cuarto C
      vbe1.push(enem9 = new BalaEnemigoA(enemigo12.x,enemigo12.y));
      vbe2.push(enem9 = new BalaEnemigoB(enemigo12.x,enemigo12.y));
      vbe3.push(enem9 = new BalaEnemigoD(enemigo12.x,enemigo12.y));
      vbe4.push(enem9 = new BalaEnemigoI(enemigo12.x,enemigo12.y));
    }
    if (muerte10 == false){enem10 = 1;}
    if(enem10 == 1){
      vbe1.push(enem10 = new BalaEnemigoA(enemigo13.x,enemigo13.y));
      vbe2.push(enem10 = new BalaEnemigoB(enemigo13.x,enemigo13.y));
      vbe3.push(enem10 = new BalaEnemigoD(enemigo13.x,enemigo13.y));
      vbe4.push(enem10 = new BalaEnemigoI(enemigo13.x,enemigo13.y));
    }
    if (muerte11 == false){enem11 = 1;}
    if(enem11 == 1){
      vbe1.push(enem11 = new BalaEnemigoA(enemigo14.x,enemigo14.y));
      vbe2.push(enem11 = new BalaEnemigoB(enemigo14.x,enemigo14.y));
      vbe3.push(enem11 = new BalaEnemigoD(enemigo14.x,enemigo14.y));
      vbe4.push(enem11 = new BalaEnemigoI(enemigo14.x,enemigo14.y));
    }
  }
  if (frameCount % 80 == 0) {
    //Balas de enemigos del cuarto C (persiguen)
    if (muerte10 == false){enem10 = 1;}
    if(enem10 == 1){
      vbeP.push(enem10 = new BalaEnemigoP(enemigo15.x,enemigo15.y));
    }
    if (muerte12 == false){enem12 = 1;}
    if(enem12 == 1){
      vbeP.push(enem12 = new BalaEnemigoP(enemigo16.x,enemigo16.y));
    }
  }
}
function llenarvectorBED(){
  if (frameCount % 75 == 0) {
  //Balas de enemigos del cuarto D
    if (muerte14 == false){enem14 = 1;}
    if(enem14 == 1){
      vbe1.push(enem14 = new BalaEnemigoA(enemigo17.x,enemigo17.y));
      vbe2.push(enem14 = new BalaEnemigoB(enemigo17.x,enemigo17.y));
      vbe3.push(enem14 = new BalaEnemigoD(enemigo17.x,enemigo17.y));
      vbe4.push(enem14 = new BalaEnemigoI(enemigo17.x,enemigo17.y));
    }
    if (muerte15 == false){enem15 = 1;}
    if(enem15 == 1){
      vbe1.push(enem15 = new BalaEnemigoA(enemigo18.x,enemigo18.y));
      vbe2.push(enem15 = new BalaEnemigoB(enemigo18.x,enemigo18.y));
      vbe3.push(enem15 = new BalaEnemigoD(enemigo18.x,enemigo18.y));
      vbe4.push(enem15 = new BalaEnemigoI(enemigo18.x,enemigo18.y));
    }
  }
}
function llenarvectorBEE(){
  if (frameCount % 110 == 0) {
  //Balas de enemigos del cuarto E (sala del jefe)
      vbe1.push(new BalaEnemigoA(enemigo22.x,enemigo22.y));
      vbe2.push(new BalaEnemigoB(enemigo22.x,enemigo22.y));
      vbe3.push(new BalaEnemigoD(enemigo22.x,enemigo22.y));
      vbe4.push(new BalaEnemigoI(enemigo22.x,enemigo22.y));
      vbe1.push(new BalaEnemigoA(enemigo23.x,enemigo23.y));
      vbe2.push(new BalaEnemigoB(enemigo23.x,enemigo23.y));
      vbe3.push(new BalaEnemigoD(enemigo23.x,enemigo23.y));
      vbe4.push(new BalaEnemigoI(enemigo23.x,enemigo23.y));
      vbe1.push(new BalaEnemigoA(enemigo24.x,enemigo24.y));
      vbe2.push(new BalaEnemigoB(enemigo24.x,enemigo24.y));
      vbe3.push(new BalaEnemigoD(enemigo24.x,enemigo24.y));
      vbe4.push(new BalaEnemigoI(enemigo24.x,enemigo24.y));
      vbe1.push(new BalaEnemigoA(enemigo25.x,enemigo25.y));
      vbe2.push(new BalaEnemigoB(enemigo25.x,enemigo25.y));
      vbe3.push(new BalaEnemigoD(enemigo25.x,enemigo25.y));
      vbe4.push(new BalaEnemigoI(enemigo25.x,enemigo25.y));
      vbe1.push(new BalaEnemigoA(enemigo26.x,enemigo26.y));
      vbe2.push(new BalaEnemigoB(enemigo26.x,enemigo26.y));
      vbe3.push(new BalaEnemigoD(enemigo26.x,enemigo26.y));
      vbe4.push(new BalaEnemigoI(enemigo26.x,enemigo26.y));
  }
}
function llenarvectorBEF(){
  if (frameCount % 50 == 0) {
  //Balas de enemigos del cuarto F (persiguen)
    vbeP.push(new BalaEnemigoP(enemigo27.x,enemigo27.y));
    vbeP.push(new BalaEnemigoP(enemigo28.x,enemigo28.y));
    vbeP.push(new BalaEnemigoP(enemigo29.x,enemigo29.y));
  }
}