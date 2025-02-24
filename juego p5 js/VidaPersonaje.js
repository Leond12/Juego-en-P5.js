function VidaPJ(){
  if (lifeP <= 0){
    fill(0);
    textSize(20);
    text("Sin vida",300,430);
    text(lifeP,450,430);
    estado =3;
    ctd = 200;
    lifeP = 100;
    personaje.x = 350;
    personaje.y = 470;
    ele2 = createAudio('gameover.mp4');
    ele2.autoplay(true);
    ele.autoplay(false);
  } else {
      fill(0);
      textSize(20);
      text("Con vida",300,430);
      text(lifeP,450,430);
      ele.autoplay(true);
  }
}