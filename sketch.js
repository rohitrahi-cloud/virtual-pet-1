var dog,dogImg,dogImg1,database,foods,foodStock;
function preload(){
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");

}

function setup(){
  createCanvas(500,500);
  datasbase = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250,350,10,68);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}

function draw(){
  background("green");
  if(foodS!== undefined){
    textSize(20);
    fill(255);
    text("Note:Press UP Arrow to feed DRAGO milk",50,50);
    text("FoodRemaining",150,150);

    if(keyWentDown(UP_ARROW)){
      writeStock(foods);
      dog.addImage(dogImg1);

    }
    if(keyWentUp(UP_ARROW)){
      dog.addImage(dogImg);

    }

    if(foodS === 0){
      foodS = 20;
    }


    drawSprites();
  }
}

function writeStock(x){
  if(x<=0){
    x = 0;

  }
  else{
    x = x-1;
  }

  database.ref("/".update)({
    food:x
  })


}


function readStock(data){
  foodS = datas.val();
}