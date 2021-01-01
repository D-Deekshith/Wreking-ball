var car1,car2,car3,car4,wall1,speed,weight,wall2,wall3,deformation,tester1,tester2,tester3,tester4;
var deformation2,deformation3,deformation4,speed2,weight2,speed3,weight3,speed4,weight4;

function setup() {
  createCanvas(1367,400);

  car1 = createSprite(50, 50, 25, 25);
  car1.shapeColor = "sKyBluE";

  car2 = createSprite(50, 150, 25, 25);
  car2.shapeColor = "purple";

  car3 = createSprite(50, 250, 25, 25);
  car3.shapeColor = "blue";

  car4 = createSprite(50, 350, 25, 25);
  car4.shapeColor = "orange";

  wall1 = createSprite(700,100,1500,5);
  wall1.shapeColor = "white";

  wall2 = createSprite(700,200,1500,5);
  wall2.shapeColor = "white";

  wall3 = createSprite(700,300,1500,5);
  wall3.shapeColor = "white";

  tester1 = createSprite(1300,50,50,50);
  tester1.shapeColor = "yellow";

  tester2 = createSprite(1300,150,50,50);
  tester2.shapeColor = "green";

  tester3 = createSprite(1300,250,50,50);
  tester3.shapeColor = "violet";

  tester4 = createSprite(1300,350,50,50);
  tester4.shapeColor = "maroon";

  speed = random(55,90);
  weight = random(400,1500);

  speed2 = random(55,90);
  weight2 = random(400,1500);

  speed3 = random(55,90);
  weight3 = random(400,1500);

  speed4 = random(55,90);
  weight4 = random(400,1500);
}

function draw() {
  background(0);  

  drawSprites();

if(keyDown("right")){
  car1.x = car1.x + speed;
}

if(car1.x > 1325){
  deformation = Math.round(0.5*weight*speed*speed/22500);
  car1.destroy();

  textSize(50);
  fill("red");
  text("Car1 Deformation= "+deformation,240,70);

  if(deformation>180){
    textSize(50);
    fill("red");
    text(", Lethal"+", Press space",780,70);
  }

  if(deformation<81 ){
    textSize(50);
    fill("red");
    text(", good"+", Press space",790,70);
  }

  if(deformation>80 && deformation<101){
    textSize(50);
    fill("red");
    text(", average"+", Press space",760,70);
  }

  if(deformation>100 && deformation<181){
    textSize(50);
    fill("red");
    text(", average"+", Press space",750,70);
  }

  if(keyDown("space")){
    car2.x = car2.x + speed;
  }
}

if(car2.x > 1325){
  deformation2 = Math.round(0.5*weight2*speed2*speed2/22500);
  car2.destroy();

  textSize(50);
  fill("red");
  text("Car2 Deformation= "+deformation2,240,170);

  if(deformation2>180){
    textSize(50);
    fill("red");
    text(", Lethal"+", Press enter",780,170);
  }

  if(deformation2<81 ){
    textSize(50);
    fill("red");
    text(", good"+", Press enter",790,170);
  }

  if(deformation2>80 && deformation2<101){
    textSize(50);
    fill("red");
    text(", average"+", Press enter",760,170);
  }

  if(deformation2>100 && deformation2<181){
    textSize(50);
    fill("red");
    text(", average"+", Press enter",750,170);
  }

  if(keyDown("enter")){
    car3.x = car3.x + speed;
  }
}

if(car3.x > 1325){
  deformation3 = Math.round(0.5*weight3*speed3*speed3/22500);
  car3.destroy();

  textSize(50);
  fill("red");
  text("Car3 Deformation= "+deformation3,240,270);

  if(deformation3>180){
    textSize(50);
    fill("red");
    text(", Lethal"+", Press shift",780,270);
  }

  if(deformation3<81 ){
    textSize(50);
    fill("red");
    text(", good"+", Press shift",790,270);
  }

  if(deformation3>80 && deformation3<101){
    textSize(50);
    fill("red");
    text(", average"+", Press shift",760,270);
  }

  if(deformation3>100 && deformation3<181){
    textSize(50);
    fill("red");
    text(", average"+", Press shift",750,270);
  }

  if(keyDown("shift")){
    car4.x = car4.x + speed;
  }
}

if(car4.x > 1325){
  deformation4 = Math.round(0.5*weight4*speed4*speed4/22500);
  car4.destroy();

  textSize(50);
  fill("red");
  text("Car4 Deformation= "+deformation4,240,370);

  if(deformation4>181){
    textSize(50);
    fill("red");
    text(", Lethal",780,370);
  }

  if(deformation4<81 ){
    textSize(50);
    fill("red");
    text(", good",790,370);
  }

  if(deformation4>80 && deformation4<101){
    textSize(50);
    fill("red");
    text(", average",760,370);
  }

  if(deformation4>100 && deformation4<181){
    textSize(50);
    fill("red");
    text(", average",750,370);
  }

  }
}