function preload(){
cart = loadImage("carr.png");
road = loadImage("estrada.jpg");
}

function setup() {
 createCanvas(554,460);
 carro = createSprite(100,405);
 carro.addImage(cart);
 carro.scale = 0.7

}

function draw() {
 image(road,0,0,554,460);
 if(keyIsDown(RIGHT_ARROW)){
    carro.x = carro.x+2
 }
 if(keyIsDown(LEFT_ARROW)){
    carro.x = carro.x-2
 }
 
 drawSprites();
}