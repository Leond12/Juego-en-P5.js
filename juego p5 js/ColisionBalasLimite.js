//-----------------------------
function colisionBalaLimite(){
  var baelim = [];
  //-- eliminar las balas
  for (let i = baelim.length - 1; i >= 0; i--){
    ba.splice(baelim[i],1);
  }
}
//-----------------------------
function colisionBalaELimite(){
  var vbe1elim = [];
  var vbe2elim = [];
  var vbe3elim = [];
  var vbe4elim = [];
  //-- eliminar las balas
  for (let i = vbe1elim.length - 1; i >= 0; i--){
    vbe1.splice(vbe1elim[i],1);
  }
  //-- eliminar las balas
  for (let i = vbe2elim.length - 1; i >= 0; i--){
    vbe2.splice(vbe2elim[i],1);
  }
  //-- eliminar las balas
  for (let i = vbe3elim.length - 1; i >= 0; i--){
    vbe3.splice(vbe3elim[i],1);
  }
  //-- eliminar las balas
  for (let i = vbe4elim.length - 1; i >= 0; i--){
    vbe4.splice(vbe4elim[i],1);
  }
}