// -----------------------------
// Clase para el rango de visión de los enemigos
class RVision {
  constructor() {
    this.puntosVision = [
      { x: 330, y: 100, radio: 470 },
      { x: 1150, y: 125, radio: 550 },
      { x: 320, y: 620, radio: 440 },
      { x: 1000, y: 620, radio: 440 },
      { x: 300, y: 1150, radio: 600 },
      { x: 1260, y: 970, radio: 440 }
    ];
  }

  // Dibujar todas las áreas de visión
  dibujar() {
    fill(50, 200, 160);
    this.puntosVision.forEach(punto => {
      circle(punto.x, punto.y, punto.radio);
    });
    fill(0);
  }
}