//-----------------------------
function llenarvectorBalaBoss(){
    if (frameCount % 80 == 0 && exist == true) {
      vbbA.push(new BalaBossA(boss.x,boss.y,10));
      vbbB.push(new BalaBossB(boss.x,boss.y,10));
      vbbD.push(new BalaBossD(boss.x,boss.y,10));
      vbbI.push(new BalaBossI(boss.x,boss.y,10));
    }
  if (frameCount % 145 == 0 && exist == true) {
    vbb.push(new BalaBoss(boss.x,boss.y,10));
  }
}
//-----------------------------
function llenarvectorBoss(){
  vboss = [];
  vboss.push(boss = new Boss(450,570));
}
//-----------------------------