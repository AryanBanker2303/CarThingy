
var car, wall;
var wieght,speed,deformation;
function setup(){

createCanvas(1500,200);

wall = createSprite(1470,100,10,200);
wall.shapeColor = "red";
car  = createSprite(30,100,32,11);
car.shapeColor = "white";

weight = random(400,1500);
speed = random(50,100);


}

function draw(){
background(200,200,200);
car.velocityX = speed;

if(car.collide(wall)){
    deformation = ((0.5 * speed * speed * weight)/22500)
    if(deformation<80){
        car.shapeColor = "green";
    }
    if(deformation>80 || deformation<180){
        car.shapeColor = "yellow";
    }
    if(deformation>180){
        car.shapeColor = "red";
    }
}

drawSprites();
}