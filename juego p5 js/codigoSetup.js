function setup() {
  //----------------------
  createCanvas(1530, 1500);
  imageMode(CENTER);
  personaje = new Personaje();
  enemigoE = new EnemigoE();
  enemigoM = new EnemigoM();
  //----------------------------
  dibujo = new Dibujo();
  //Contorno exterior (línea guinda)
  dibujo.addLinea(new Linea(new Punto(59,332), new Punto(48,332))); 
  dibujo.addLinea(new Linea(new Punto(48,332), new Punto(48,13))); 
  dibujo.addLinea(new Linea(new Punto(48,13), new Punto(605,14))); 
  dibujo.addLinea(new Linea(new Punto(599.4000244140625,15), new Punto(1457.4000244140625,15))); 
  dibujo.addLinea(new Linea(new Punto(1457.4000244140625,15), new Punto(1458.4000244140625,592))); 
  dibujo.addLinea(new Linea(new Punto(1458.4000244140625,592), new Punto(764.4000244140625,592)));
  dibujo.addLinea(new Linea(new Punto(604,592), new Punto(38,590))); 
  dibujo.addLinea(new Linea(new Punto(38,590), new Punto(39,395))); 
  dibujo.addLinea(new Linea(new Punto(39,395), new Punto(47,396)));
  dibujo.addLinea(new Linea(new Punto(472,326), new Punto(471,332))); 
  dibujo.addLinea(new Linea(new Punto(471,332), new Punto(59,331))); 
  dibujo.addLinea(new Linea(new Punto(59,331), new Punto(68,325))); 
  dibujo.addLinea(new Linea(new Punto(68,325), new Punto(68,31))); 
  dibujo.addLinea(new Linea(new Punto(68,31), new Punto(591,31))); 
  dibujo.addLinea(new Linea(new Punto(591,31), new Punto(593,326))); 
  dibujo.addLinea(new Linea(new Punto(593,326), new Punto(527,328))); 
  dibujo.addLinea(new Linea(new Punto(527,328), new Punto(528,334))); 
  dibujo.addLinea(new Linea(new Punto(528,334), new Punto(606,333))); 
  dibujo.addLinea(new Linea(new Punto(606,333), new Punto(606,331))); 
  dibujo.addLinea(new Linea(new Punto(606,331), new Punto(622,330))); 
  dibujo.addLinea(new Linea(new Punto(622,330), new Punto(622,32))); 
  dibujo.addLinea(new Linea(new Punto(622,32), new Punto(755,32))); 
  dibujo.addLinea(new Linea(new Punto(755,32), new Punto(755,316)));
  //Bloque A habitacion inferior izquierda
  dibujo.addLinea(new Linea(new Punto(48,395), new Punto(477,395))); 
  dibujo.addLinea(new Linea(new Punto(477,395), new Punto(478,401))); 
  dibujo.addLinea(new Linea(new Punto(478,401), new Punto(57,402))); 
  dibujo.addLinea(new Linea(new Punto(57,402), new Punto(58,574))); 
  dibujo.addLinea(new Linea(new Punto(58,574), new Punto(598,576))); 
  dibujo.addLinea(new Linea(new Punto(598,576), new Punto(598,401))); 
  dibujo.addLinea(new Linea(new Punto(598,401), new Punto(535,400))); 
  dibujo.addLinea(new Linea(new Punto(535,400), new Punto(536,394))); 
  dibujo.addLinea(new Linea(new Punto(536,394), new Punto(607,393)));
  //Bloque A habitacion superior derecha
  dibujo.addLinea(new Linea(new Punto(755.2000122070312,317), new Punto(763.2000122070312,316))); 
  dibujo.addLinea(new Linea(new Punto(763.2000122070312,316), new Punto(765.2000122070312,313))); 
  dibujo.addLinea(new Linea(new Punto(765.2000122070312,313), new Punto(782.2000122070312,313))); 
  dibujo.addLinea(new Linea(new Punto(782.2000122070312,313), new Punto(781.2000122070312,31))); 
  dibujo.addLinea(new Linea(new Punto(781.2000122070312,31), new Punto(1437.2000122070312,31))); 
  dibujo.addLinea(new Linea(new Punto(1437.2000122070312,31), new Punto(1437.2000122070312,392))); 
  dibujo.addLinea(new Linea(new Punto(1437.2000122070312,392), new Punto(779.2000122070312,393))); 
  dibujo.addLinea(new Linea(new Punto(779.2000122070312,393), new Punto(779.2000122070312,377))); 
  dibujo.addLinea(new Linea(new Punto(779.2000122070312,377), new Punto(764.2000122070312,377))); 
  dibujo.addLinea(new Linea(new Punto(764.2000122070312,377), new Punto(764.2000122070312,393)));
  //Bloque A habitacion inferior derecha
  dibujo.addLinea(new Linea(new Punto(765.6000366210938,469), new Punto(775.6000366210938,469))); 
  dibujo.addLinea(new Linea(new Punto(775.6000366210938,469), new Punto(775.6000366210938,419))); 
  dibujo.addLinea(new Linea(new Punto(775.6000366210938,419), new Punto(1436.6000366210938,419))); 
  dibujo.addLinea(new Linea(new Punto(1436.6000366210938,419), new Punto(1436.6000366210938,576))); 
  dibujo.addLinea(new Linea(new Punto(1436.6000366210938,576), new Punto(774.6000366210938,577))); 
  dibujo.addLinea(new Linea(new Punto(774.6000366210938,577), new Punto(773.6000366210938,539))); 
  dibujo.addLinea(new Linea(new Punto(773.6000366210938,539), new Punto(763.6000366210938,539)));
  //Bloque A pasillo
  dibujo.addLinea(new Linea(new Punto(605,393), new Punto(661,393))); 
  dibujo.addLinea(new Linea(new Punto(661,393), new Punto(660,405))); 
  dibujo.addLinea(new Linea(new Punto(660,405), new Punto(621,406))); 
  dibujo.addLinea(new Linea(new Punto(621,406), new Punto(621,580)));
  dibujo.addLinea(new Linea(new Punto(764,377), new Punto(765,393))); 
  dibujo.addLinea(new Linea(new Punto(765,393), new Punto(702,393))); 
  dibujo.addLinea(new Linea(new Punto(702,393), new Punto(703,407))); 
  dibujo.addLinea(new Linea(new Punto(703,407), new Punto(746,409))); 
  dibujo.addLinea(new Linea(new Punto(746,409), new Punto(746,465))); 
  dibujo.addLinea(new Linea(new Punto(746,465), new Punto(753,465))); 
  dibujo.addLinea(new Linea(new Punto(753,465), new Punto(753,469))); 
  dibujo.addLinea(new Linea(new Punto(753,469), new Punto(776,469)));
  dibujo.addLinea(new Linea(new Punto(765,540), new Punto(746,538))); 
  dibujo.addLinea(new Linea(new Punto(746,538), new Punto(746,580)));
  //Pasillo exterior
  dibujo.addLinea(new Linea(new Punto(603,592), new Punto(604,840)));
  dibujo.addLinea(new Linea(new Punto(766,592), new Punto(765,841)));
  //Pasillo interior
  dibujo.addLinea(new Linea(new Punto(621,578), new Punto(622,849)));
  dibujo.addLinea(new Linea(new Punto(746,578), new Punto(745,849)));
  //Contorno exterior bloque B
  dibujo.addLinea(new Linea(new Punto(603,841), new Punto(69,841))); 
  dibujo.addLinea(new Linea(new Punto(69,841), new Punto(69,1449.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(69,1449.2000122070312), new Punto(746,1449.2000122070312)));
  dibujo.addLinea(new Linea(new Punto(751.7999877929688,1449), new Punto(1459.7999877929688,1450))); 
  dibujo.addLinea(new Linea(new Punto(1459.7999877929688,1450), new Punto(1459.7999877929688,843))); 
  dibujo.addLinea(new Linea(new Punto(1459.7999877929688,843), new Punto(763.7999877929688,840)));
  //Bloque B habitacion izquierda
  dibujo.addLinea(new Linea(new Punto(621,848.2000122070312), new Punto(622,1144.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(622,1144.2000122070312), new Punto(614,1145.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(614,1145.2000122070312), new Punto(612,1144.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(612,1144.2000122070312), new Punto(605,1144.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(605,1144.2000122070312), new Punto(604,850.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(604,850.2000122070312), new Punto(79,850.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(79,850.2000122070312), new Punto(78,1440.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(78,1440.2000122070312), new Punto(602,1440.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(602,1440.2000122070312), new Punto(603,1216.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(603,1216.2000122070312), new Punto(622,1215.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(622,1215.2000122070312), new Punto(622,1439.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(622,1439.2000122070312), new Punto(739,1440.2000122070312)));
  dibujo.addLinea(new Linea(new Punto(739,1440.2000122070312), new Punto(737,1224.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(737,1224.2000122070312), new Punto(745,1224.2000122070312)));
  //Bloque B habitacion superior derecha
  dibujo.addLinea(new Linea(new Punto(754.7999877929688,1149.2000122070312), new Punto(762.7999877929688,1144.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(762.7999877929688,1144.2000122070312), new Punto(762.7999877929688,850.2000122070312)));               dibujo.addLinea(new Linea(new Punto(762.7999877929688,850.2000122070312), new Punto(992.7999877929688,851.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(992.7999877929688,851.2000122070312), new Punto(991.7999877929688,1004.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(991.7999877929688,1004.2000122070312), new Punto(1018.7999877929688,1006.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1018.7999877929688,1006.2000122070312), new Punto(1018.7999877929688,860.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1018.7999877929688,860.2000122070312), new Punto(1435.7999877929688,862.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1435.7999877929688,862.2000122070312), new Punto(1436.7999877929688,1156.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1436.7999877929688,1156.2000122070312), new Punto(1015.7999877929688,1157.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1015.7999877929688,1157.2000122070312), new Punto(1015.7999877929688,1077.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1015.7999877929688,1077.2000122070312), new Punto(990.7999877929688,1076.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(990.7999877929688,1076.2000122070312), new Punto(991.7999877929688,1175.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(991.7999877929688,1175.2000122070312), new Punto(1434.7999877929688,1176.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1434.7999877929688,1176.2000122070312), new Punto(1435.7999877929688,1224.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1435.7999877929688,1224.2000122070312), new Punto(989.7999877929688,1224.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(989.7999877929688,1224.2000122070312), new Punto(987.7999877929688,1240.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(987.7999877929688,1240.2000122070312), new Punto(1434.7999877929688,1241.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1434.7999877929688,1241.2000122070312), new Punto(1434.7999877929688,1425.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(1434.7999877929688,1425.2000122070312), new Punto(764.7999877929688,1425.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(764.7999877929688,1425.2000122070312), new Punto(764.7999877929688,1243.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(764.7999877929688,1243.2000122070312), new Punto(862.7999877929688,1241.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(862.7999877929688,1241.2000122070312), new Punto(862.7999877929688,1224.2000122070312))); 
  dibujo.addLinea(new Linea(new Punto(862.7999877929688,1224.2000122070312), new Punto(743.7999877929688,1224.2000122070312)));
  dibujo.addLinea(new Linea(new Punto(744,849), new Punto(744,1149))); 
  dibujo.addLinea(new Linea(new Punto(744,1149), new Punto(754,1149)));
}