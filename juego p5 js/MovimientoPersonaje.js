//Teclas de movimiento
function keyPressed(){
   //print(keyCode);
  if(keyCode == 87){
    personaje.w = true;
    Pers = 1;
  }
  if(keyCode == 68){
    personaje.d = true;
    Pers = 2.2;
  }
  if(keyCode == 65){
    personaje.a = true;
    Pers = 3;
  }
  if(keyCode == 83){
    personaje.s = true;
    Pers = 4;
  }
  //------------------------------------
  if (keyCode == 86){dibujarEstado3();}
  if (keyCode == 67){dibujarEstado4();}
  if (keyCode == 27){dibujarEstado5();}
  if (keyCode == 13){dibujarEstado1();}
}
function keyReleased(){
  if(keyCode == 87){
    personaje.w = false;
    Pers = 1;
  }
  if(keyCode == 68){
    personaje.d = false;
    Pers = 2.2;
    PD = false;
  }
  if(keyCode == 65){
    personaje.a = false;
    Pers = 3;
  }
  if(keyCode == 83){
    personaje.s = false;
    Pers = 4;
  }
}