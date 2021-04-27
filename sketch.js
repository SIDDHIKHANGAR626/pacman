var pacman;
var monsterBlue, monsterRed, monsterGreen, monsterpink;
var border1 , border2, border3, border4;
var wall, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17;
var wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25;
var sheltter, sheltter2, sheltter3, sheltter4, sheltter5;
var score;
var move_cherctors = [pacman, monsterBlue, monsterGreen, monsterRed, monsterpink];
var walls;
var pointsGroup;

function setup() {
  createCanvas(800,400);

  score = 0;

  //creating pacman
  pacman = createSprite(200,200, 10, 10);
  pacman.shapeColor = color("yellow");
  
  
  // createing monsters 
  monsterBlue = createSprite(250,200,10,10);
  monsterBlue.shapeColor = "blue";

  monsterGreen = createSprite(300,200,10,10);
  monsterGreen.shapeColor = "green"

  monsterRed = createSprite(350,200,10,10);
  monsterRed.shapeColor = "red";

  monsterpink = createSprite(400,200,10,10);
  monsterpink.shapeColor = "pink";

  border1 = createSprite(50,200,10,390);
  border1.shapeColor = "lightBlue";

  border2 = createSprite(400,10,700,10);
  border2.shapeColor = "lightBlue";

  border3 = createSprite(400,390,700,10);
  border3.shapeColor = "red";

  border4 = createSprite(750,200,10,390);
  border4.shapeColor = "red";

    // createing the paths 
  wall = createSprite(380,170,400,10);
  wall2 = createSprite(580,340,10,90);
  wall3 = createSprite(180,340,10,90);
  wall4 = createSprite(380,380,400,10);
  wall5 = createSprite(180,230,10,130);
  wall6 = createSprite(580,230,10,130);
  wall7 = createSprite(300,200,10,50);
  wall8 = createSprite(460,200,10,50);  
  wall9 = createSprite(380,210,100,10);
  wall10 = createSprite(380,340,100,10);
  wall11 = createSprite(300,350,10,60);
  wall12 = createSprite(300,350,10,60);
  wall13 = createSprite(230,320,10,50);
  wall14 = createSprite(240,350,30,10);
  wall15 = createSprite(230,225,10,60);
  wall16 = createSprite(240,200,30,10);
  wall17 = createSprite(460,349,10,60);
  wall18 = createSprite(530,230,10,50);
  wall19 = createSprite(520,200,30,10);
  wall20 = createSprite(530,320,10,50);
  wall21 = createSprite(520,350,30,10);
  wall22 = createSprite(285,300,40,10);
  wall23 = createSprite(285,250,40,10);
  wall24 = createSprite(475,300,40,10);
  wall25 = createSprite(475,250,40,10);

  pointsGroup = new Group();
  //creating points
  for(var i = 195; i <370; i = i+20){
    var point1 = createSprite(195,i,5,5);
    var point2 = createSprite(217,i,5,5);
    pointsGroup.add(point1);
    pointsGroup.add(point2);
  }

  for(var i = 195; i <370; i = i+20){
    var point3 = createSprite(320,i,5,5);
    var point4 = createSprite(445,i,5,5);
    pointsGroup.add(point3);
    pointsGroup.add(point4);
  }

  for(var i = 195; i <370; i = i+20){
    var point5 = createSprite(545,i,5,5);
    var point6 = createSprite(565,i,5,5);
    pointsGroup.add(point5);
    pointsGroup.add(point6);
  }

  for(var i = 200; i <358; i = i+20){
    var point7 = createSprite(245,i,5,5);
    var point8 = createSprite(515,i,5,5);
    pointsGroup.add(point7);
    pointsGroup.add(point8);
  }

  for(var i = 370; i <i ; i+20){
    var point7 = createSprite(245,i,5,5);
    var point8 = createSprite(515,i,5,5);
    pointsGroup.add(point7);
    pointsGroup.add(point8);
  }
  //create power packs 

  //pacman lives 

  //creating monsters sheltter 
  sheltter = createSprite(335,275,10,50);
  sheltter2 = createSprite(425,275,10,50);
  sheltter3 = createSprite(375,295,90,10);
  sheltter4 = createSprite(3,295,30,10);
  // create exit 


}

function draw() {
  background(1,1,1);  

  //control the pacman 
  if(keyDown(UP_ARROW)){
    pacman.y = pacman.y -5;
  }

  if(keyDown(DOWN_ARROW)){
    pacman.y = pacman.y +5;
  }

  if(keyDown(RIGHT_ARROW)){
    pacman.x = pacman.x +5;
  }

  if(keyDown(LEFT_ARROW)){
    pacman.x = pacman.x -5;
  }
  // if pacman touch monster decrement one live 
    if(pacman.isTouching(monsterRed)){
      //decrement pacman's live 

    }
  //if pacman touching pointes, incresing the score and delete the point

  //if pacman touches power packs, set the flag
  
  //if flag is set, and pacman touches any monsters, reset the monsters and unset the flag  

  //if pacman reaches exit taking to next level  

  //collide with walls
  pacman.collide(wall);
  pacman.collide(wall2);
  pacman.collide(wall3);
  pacman.collide(wall4);
  pacman.collide(wall5);
  pacman.collide(wall6);
  pacman.collide(wall7);
  pacman.collide(wall8);
  pacman.collide(wall9);
  pacman.collide(wall10);
  pacman.collide(wall12);
  pacman.collide(wall13);
  pacman.collide(wall14);
  pacman.collide(wall15);
  pacman.collide(wall16);
  pacman.collide(wall17); 
  pacman.collide(wall17);
  pacman.collide(wall18);
  pacman.collide(wall19);
  pacman.collide(wall20);
  pacman.collide(wall21);
  pacman.collide(wall22);
  pacman.collide(wall23);
  pacman.collide(wall24);
  pacman.collide(wall25);
  pacman.collide(sheltter);
  pacman.collide(sheltter2);
  pacman.collide(sheltter3);
  pacman.collide(sheltter4);
  
  drawSprites();
}


