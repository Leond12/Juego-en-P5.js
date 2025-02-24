function angulo(ox, oy, parX, parY) {
    pix = parX - ox;
    piy = parY - oy;
    ang_pi = Math.atan2(pix, piy);
    ang = Math.PI / 2 - ang_pi;
    if (ang < 0.0)
      return (ang + (2.0 * Math.PI));
    else
      return ang;
}