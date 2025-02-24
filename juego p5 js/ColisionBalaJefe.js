function colisionBalaJefe(){
  var baelim = [];
  var boselim = [];
  var vbselim = [];
  for (let i = 0; i < ba.length;i++){ // i -> balas
    for (let j = 0; j< vboss.length; j++) { //j -> boss
      var di = dist(ba[i].x,ba[i].y,vboss[j].x,vboss[j].y);
        if (di < 100){
          baelim.push(i);
          boselim.push(j);
        }
    }
  }
  for (let i = boselim.length - 1; i >= 0; i--){
        if (lifeB <= 20){
          vboss.splice(boselim[i],1);
          exist = false;
        }
    lifeB = lifeB - DamageP;
  }
  //-- eliminar las bala del jefe
  for (let j = boselim.length - 1; j >= 0; j--){
    vbb.splice(boselim[j],1);
  }
  for (let j = boselim.length - 1; j >= 0; j--){
    vbbA.splice(boselim[j],1);
  }
  for (let j = boselim.length - 1; j >= 0; j--){
    vbbB.splice(boselim[j],1);
  }
  for (let j = boselim.length - 1; j >= 0; j--){
    vbbD.splice(boselim[j],1);
  }
  for (let j = boselim.length - 1; j >= 0; j--){
    vbbI.splice(boselim[j],1);
  }
  //-- eliminar las balas
  for (let i = baelim.length - 1; i >= 0; i--){
    ba.splice(baelim[i],1);
  }
}