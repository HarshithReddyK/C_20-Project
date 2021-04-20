var jerry, jerryImg, tom, tomImg; 


function preload() {
    //load the images here
    jerry = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png"); 

    tom = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png"); 

    garden = loadImage("garden.png");
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    jerry = createSprite(200,200,10,10);
    jerryGroup = createGroup();
    jerryGroup.add(jerry1);
    jerryGroup.add(jerry2);
    jerryGroup.add(jerry3);
    jerryGroup.add(jerry4);

    tom = createSprite(300,200,10,10);
    tomGroup = createGroup();
    tomGroup.add(tom1);
    tomGroup.add(tom2);
    tomGroup.add(tom3);
    tomGroup.add(tom4);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (keyDown("LEFT_ARROW")) {
       tom.velocityX = 4;
    }
    if (tom.collide(jerry)) {
     tom.changeImage("cat4.png");
     jerry.changeImage("mouse4.png"); 
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
