function colisionBalaPersonaje1(){
  var vbe1elim = [];
  for (let i = 0; i < vbe1.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbe1[i].x,vbe1[i].y);
      if (d < 26){
        vbe1elim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vbe1elim.length - 1; i >= 0; i--){
    vbe1.splice(vbe1elim[i],1);
    lifeP = lifeP - DamageE;
  }
}
function colisionBalaPersonaje2(){
  var vbe2elim = [];
  for (let i = 0; i < vbe2.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbe2[i].x,vbe2[i].y);
      if (d < 26){
        vbe2elim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vbe2elim.length - 1; i >= 0; i--){
    vbe2.splice(vbe2elim[i],1);
    lifeP = lifeP - DamageE;
  }
}
function colisionBalaPersonaje3(){
  var vbe3elim = [];
  for (let i = 0; i < vbe3.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbe3[i].x,vbe3[i].y);
      if (d < 26){
        vbe3elim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vbe3elim.length - 1; i >= 0; i--){
    vbe3.splice(vbe3elim[i],1);
    lifeP = lifeP - DamageE;
  }
}
function colisionBalaPersonaje4(){
  var vbe4elim = [];
  for (let i = 0; i < vbe4.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbe4[i].x,vbe4[i].y);
      if (d < 26){
        vbe4elim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vbe4elim.length - 1; i >= 0; i--){
    vbe4.splice(vbe4elim[i],1);
    lifeP = lifeP - DamageE;
  }
}
function colisionBalaPersonaje5(){
  var vbePelim = [];
  for (let i = 0; i < vbeP.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbeP[i].x,vbeP[i].y);
      if (d < 26){
        vbePelim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vbePelim.length - 1; i >= 0; i--){
    vbeP.splice(vbePelim[i],1);
    lifeP = lifeP - DamageE;
  }
}
//
function colisionBalaPersonajeBA(){
  var vboAelim = [];
  for (let i = 0; i < vbbA.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbbA[i].x,vbbA[i].y);
      if (d < 26){
        vboAelim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vboAelim.length - 1; i >= 0; i--){
    vbbA.splice(vboAelim[i],1);
    lifeP = lifeP - DamageE;
  }
}
function colisionBalaPersonajeBB(){
  var vboBelim = [];
  for (let i = 0; i < vbbB.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbbB[i].x,vbbB[i].y);
      if (d < 26){
        vboBelim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vboBelim.length - 1; i >= 0; i--){
    vbbB.splice(vboBelim[i],1);
    lifeP = lifeP - DamageE;
  }
}
function colisionBalaPersonajeBD(){
  var vboDelim = [];
  for (let i = 0; i < vbbD.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbbD[i].x,vbbD[i].y);
      if (d < 26){
        vboDelim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vboDelim.length - 1; i >= 0; i--){
    vbbD.splice(vboDelim[i],1);
    lifeP = lifeP - DamageE;
  }
}
function colisionBalaPersonajeBI(){
  var vboIelim = [];
  for (let i = 0; i < vbbI.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbbI[i].x,vbbI[i].y);
      if (d < 26){
        vboIelim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vboIelim.length - 1; i >= 0; i--){
    vbbI.splice(vboIelim[i],1);
    lifeP = lifeP - DamageE;
  }
}
function colisionBalaPersonajeBE(){
  var vboEPelim = [];
  for (let i = 0; i < vbb.length;i++){ // i -> balas
      var d = dist(personaje.x,personaje.y,vbb[i].x,vbb[i].y);
      if (d < 26){
        vboEPelim.push(i);
      }
  }
  //-- eliminar las balas enemigas
  for (let i = vboEPelim.length - 1; i >= 0; i--){
    vbb.splice(vboEPelim[i],1);
    lifeP = lifeP - DamageE;
  }
}