function colisionBalaEnemigo1(){
  var baelim = [];
  var enelim = [];
  let k;
  for (let i = 0; i < ba.length;i++){ // i -> balas
    for (let j = 0; j< ene.length; j++) { //j -> enemigos
      var di = dist(ba[i].x,ba[i].y,ene[j].x,ene[j].y);
        if (di < 25){
          baelim.push(i);
          enelim.push(j);
        }
    }
  }
  //-- eliminar los enemigos
  for (let i = enelim.length - 1; i >= 0; i--){
        if (lifeE <= 20){
          if(enelim[i] == 0){
            muerte0 = true;
            enem0 = 0;
          } else{enem0 = 1;}
          if(enelim[i] == 1){
            textSize(100);
            muerte1 = true;
            enem1 = 0;
          }
          if(enelim[i] == 2){
            textSize(100);
            muerte2 = true;
            enem2 = 0;
          }
          if(enelim[i] == 3){
            textSize(100);
            muerte3 = true;
            enem3 = 0;
          }
          if(enelim[i] == 4){
            textSize(100);
            muerte4 = true;
            text("pajaro",200,200);
            enem4 = 0;
          }
          if(enelim[i] == 5){
            textSize(100);
            muerte5 = true;
            text("lalo",200,200);
            enem5 = 0;
          }
          if(enelim[i] == 6){
            textSize(100);
            muerte6 = true;
            text("kiko",200,200);
            enem6 = 0;
          }
          if(enelim[i] == 7){
            textSize(100);
            muerte7 = true;
            text("facil",200,200);
            enem7 = 0;
          }
          if(enelim[i] == 8){
            textSize(100);
            muerte8 = true;
            text("chavo",200,200);
            enem8 = 0;
          }
          if(enelim[i] == 9){
            muerte9 = true;
            enem9 = 0;
          }
          if(enelim[i] == 10){
            muerte10 = true;
            enem10 = 0;
          }
          if(enelim[i] == 11){
            //cuartoC
            muerte11 = true;
            enem11 = 0;
          }
          if(enelim[i] == 12){
            muerte12 = true;
            enem12 = 0;
          }
          if(enelim[i] == 13){
            textSize(100);
            muerte13 = true;
            text("aca",200,200);
            enem13 = 0;
          }
          if(enelim[i] == 14){
            textSize(100);
            muerte14 = true;
            text("tula",200,200);
            enem14 = 0;
          }
          if(enelim[i] == 15){
            textSize(100);
            muerte15 = true;
            text("palo",200,200);
            enem15 = 0;
          }
          if(enelim[i] == 16){
            textSize(100);
            text("aqe",200,200);
            enem16 = 0;
          }
          if(enelim[i] == 17){
            textSize(100);
            text("mama",200,200);
            enem17 = 0;
          }
          if(enelim[i] == 18){
            enem18 = 0;
          }
          if(enelim[i] == 19){
            enem19 = 0;
          }
          if(enelim[i] == 20){
            enem20 = 0;
          }
          if(enelim[i] == 21){
            enem21 = 0;
          }
          if(enelim[i] == 22){
            enem22 = 0;
          }
          if(enelim[i] == 23){
            enem23 = 0;
          }
          if(enelim[i] == 24){
            enem24 = 0;
          }
          ene.splice(enelim[i],1);
          lifeE = 120;
          //exist = false;
        }
    //exist = true;
    lifeE = lifeE - DamageP;
  }
  //-- eliminar las balas enemigas
  //-- eliminar las balas
  for (let i = baelim.length - 1; i >= 0; i--){
    ba.splice(baelim[i],1);
  }
}
function colisionBalaEnemigo2(){
  var baelim = [];
  var enedilim = [];
  for (let i = 0; i < ba.length;i++){ // i -> balas
    for (let j = 0; j< enedi.length; j++) { //j -> enemigos
      var di = dist(ba[i].x,ba[i].y,enedi[j].x,enedi[j].y);
        if (di < 30){
          baelim.push(i);
          enedilim.push(j);
        }
    }
  }
  //-- eliminar los enemigos
  for (let i = enedilim.length - 1; i >= 0; i--){
        if (lifeE <= 20){
          enedi.splice(enedilim[i],1);
          lifeE = 120;
          //exist = false;
        }
    //exist = true;
    lifeE = lifeE - DamageP;
  }
  /*
  //-- eliminar las balas enemigas
  for (let j = vbelim.length - 1; j >= 0; j--){
    vbe.splice(vbelim[j],1);
  }*/
  //-- eliminar las balas
  for (let i = baelim.length - 1; i >= 0; i--){
    ba.splice(baelim[i],1);
  }
}
function colisionBalaEnemigo3(){
  var baelim = [];
  var eneablim = [];
  for (let i = 0; i < ba.length;i++){ // i -> balas
    for (let j = 0; j< eneab.length; j++) { //j -> enemigos
      var di = dist(ba[i].x,ba[i].y,eneab[j].x,eneab[j].y);
        if (di < 30){
          baelim.push(i);
          eneablim.push(j);
        }
    }
  }
  //-- eliminar los enemigos
  for (let i = eneablim.length - 1; i >= 0; i--){
        if (lifeE <= 20){
          eneab.splice(eneablim[i],1);
          lifeE = 120;
          //exist = false;
        }
    //exist = true;
    lifeE = lifeE - DamageP;
  }
  /*
  //-- eliminar las balas enemigas
  for (let j = vbelim.length - 1; j >= 0; j--){
    vbe.splice(vbelim[j],1);
  }*/
  //-- eliminar las balas
  for (let i = baelim.length - 1; i >= 0; i--){
    ba.splice(baelim[i],1);
  }
}