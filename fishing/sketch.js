let ocean;
let playerImage;
let fishImage;
let deadFishImage;
let houseImage;
let roomImage;
let catImage;
let creditImage;
let fishes = [];
let player;
let fishingRod = false;
let fishOnAnchor = false;//check when to use deadfish image
let anchorEndY = 220;
let fishingRodSpeed = 3;
let score = 0;
let myfontB;
let myfontN;
let screen =2;
let timer = 20;
let money=0;
let goPlaySceneButton;
let goStoreSceneButton;
let goHouseSceneButton;
let goCreditSceneButton;
let moneyImage;
let levelGoal = 3;
let level = 1;
let passlevel = 0;
let housepurchse = false;
let catpurchse = false;
let song;


function preload(){
  ocean = loadImage('image/ocean.png');
  playerImage = loadImage('image/player.png');
  fishImage = loadImage('image/fish.png');
  moneyImage = loadImage('image/money.png');
  deadFishImage = loadImage('image/deadFish.png');
  houseImage = loadImage('image/house.png');
  catImage = loadImage('image/cat.png');
  creditImage = loadImage('image/credit.png');
  roomImage = loadImage('image/home.png');
  myfontB = loadFont('font/slkscrb.ttf');
  myfontN = loadFont('font/slkscre.ttf');
  song = loadSound('music/bgm.mp3');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  song.play();

  playerImage.resize(100,0);
  moneyImage.resize(70,0);
  roomImage.resize(1430,739);
  catImage.resize(100,0);
  creditImage.resize(1000,0);
  player = new Player();

  // //create fishes on screen
  // for (let i = 0; i < 8; i++) {
  //   let fish = new Fish();
	// 	// add new fish element to the end of the fishes array 
	// 	fishes.push(fish);
    
  // }
}

function draw() {
  if(screen === 1){
    playScene();
  }else if(screen === 2){
    startScene();
  }else if(screen === 3){
    storeScene();
  }else if(screen === 4){
    houseScene();
  }else if(screen === 5){
    creditScene();
  }
  
  //console.log(mouseX + ", " + mouseY);
  //console.log(fishes.length);
  //screen =2;
  //UI level goal
  
}

function startScene(){//screen2
  background('#8FB8EA');
  image(ocean,width/2,height/2+150);
  textFont(myfontB);
  textSize(100)
  fill('#5e7eb4');
  text("Go Fishing",350,200);
  textFont(myfontN);
  textSize(50);
  text("by Yifei Wang",750,300)
  fill('white');
  textSize(20);
  text("[press SPACE to start]",520,355);
  GoCreditSceneButton();
  if(keyIsDown(32)){
    screen = 1;
  }
}

function playScene(){//screen1
  textFont(myfontN)
  background('#5e7eb4');
  image(ocean,width/2,100);
  fill('black');
  text("Level" +level +": " + levelGoal + " fishes" ,400,100);
  text("Made by: Yifei Wang",1000,710);
  text("left/right arrow key move boat",width/2,120);
  text("down arrow key fish",width/2,100);

  if (frameCount % 120 === 0 && fishes.length < 8) {
		// create a missile
		let fish = new Fish();
		// Remember an array's push function adds the provided value to the "end of the array"
		fishes.push(fish);
	}
  
  for (let i=0; i<fishes.length; i++){
    fishes[i].display();
    fishes[i].catchFish();
    if(fishes[i].alpha<0){
      score = score + 1;
      fishes.splice(i,1);
      i = i-1;
    }else if(fishes[i].x>width){
      fishes.splice(i,1);
      i = i-1;
    }
  }
  if(score >= levelGoal){
    screen =3;
    timer = 0;
  }

  player.playerController();

  //count fish
  image(deadFishImage,100,100);
  //fill("#8FB8EA");
  fill('black');
  textSize(20);
  text(" : " + score,120,100);
  //UI money
  image(moneyImage,220,100);
  text(": " + money, 270,100);
  //timer
  Timer();
  GoCreditSceneButton();
}

function creditScene(){
  background("#8FB8EA")
  timer = 0;
  image(creditImage,700,400);
  GoStoreSceneButton();
}

function storeScene(){//screen3
  background("#8FB8EA")
  timer = 0;
  fill('black');
  text("Level" +level +": " + levelGoal + " fishes" ,400,100);
  fill("#5E7EB5")
  //UI->store
  textFont(myfontB);
  textSize(80);
  text("Store",582,80);
  //UI->fish count
  textFont(myfontN);
  textSize(20);
  image(deadFishImage,100,100);
  text(" : " + score,120,100);
  //UI money
  image(moneyImage,220,100);
  text(": " + money, 270,100);
  //UI -> salse fish button
  fill("#5E7EB5");
  text("press [s]+[f]",126,230);
  image(deadFishImage,372,220);
  fill('#D6E8FF');
  text("-->",440,220);
  text("Sale Fish For Money",318,293);
  fill('black');
  text("$5/fish",394,320);
  image(moneyImage,565,220);
  if(keyIsDown(83)&& keyIsDown(70)){//83->S 70->F
    if(score > 0){
    money = money + score*5;
    score = 0;
    }else{
      text("You do not have fish to sale",900, 250);
    }
  }
  //advanced fishingrod
  text("Current Speed: " + fishingRodSpeed, 600,378);
  fill("#d69142");
  text("-----------",358,378);
  fill('#D6E8FF');
  text("Advanced Fishing Rod(fishing speed+2)",154,422);
  fill('black');
  text("$10",406,450);
  fill("#5E7EB5");
  text("press [a]+[c]",126,375);
  if(keyIsDown(65)&&keyIsDown(67)){//a->65 c->67
    if(money >= 10 && fishingRodSpeed<5){
      fishingRodSpeed = 5;
      money = money - 10;
    }else if(money >= 10&&fishingRodSpeed<7){
      fishingRodSpeed = 7;
      money = money-10;
    }else{
      fill('#D6E8FF');
      text("You don't have enough money", 900,250);
      text("upgrading your fishing rod",900,290);
    }
  }
  //buy house
  image(houseImage,400,550);
  text("press[h]",220,560);
  fill('#D6E8FF');
  text("House",363,610);
  fill('black');
  text("$80",370,640);
  if(keyIsDown(72) && money>=80 && housepurchse === false){
    housepurchse = true;
    money = money - 80;
  }
  if(housepurchse === true){
    GoHouseSceneButton()
  }

  //buy cat
  image(catImage,800,550);
  fill("#5E7EB5");
  text("press[c]",870,570);
  fill('#D6E8FF');
  text("Cat",780,610);
  text("(have a house first)",690,640);
  fill('black');
  text("$30",775,670);
  if(keyIsDown(67)){
    if(money>=30 && housepurchse===true){
      catpurchse = true;
      money = money - 30;
    }else if(housepurchse === false){
      text("you need to have a house first!",900,220);
    }
  }
  //UI ->go play scene button
  GoPlaySceneButton();
  GoCreditSceneButton();
}

function houseScene(){
  timer = 0;
  let text1 = 'you have a home now!';
  let text2 = 'you have a home & a cat! Enjoy!'
  background('#404738');
  fill('white');
  textFont(myfontN);
  image(roomImage,width/2,height/2);
  textSize(20);
  GoStoreSceneButton();
  if(catpurchse === true){
    text(text2,100,60);
    image(catImage,680,680);
    textSize(50);
    fill('yellow')
    text("Game End",800,80);
  }else{
    textSize(20);
    text(text1,100,60);
  }
}

class Fish {
  constructor(){
    //this.x = random(0,width);
    this.x = 0;
    this.y = random(300,height-20);
    this.alpha = 100;
    
  }
  display(){
    //move the fish
    this.x = this.x + 5;
    image(fishImage,this.x,this.y);

    if(this.x > width){
      this.x = random(-3,0);
      this.y = random(300,height-10);
    }
  }
  catchFish(){
    for (let i = 0; i < fishes.length; i++){
      let dPtoF = dist(fishes[i].x,fishes[i].y,player.anchorX,player.anchorEndY);
      if(dPtoF<20 && fishingRod === true){
        fishOnAnchor = true;//check if catch fish, yes-> use the dead fish image
        fishes[i].alpha = fishes[i].alpha -50;
      }
    }
    if(fishOnAnchor === true){
      image(deadFishImage,player.anchorX,player.anchorEndY);
    }
  }
}

class Player {
  constructor(){
    this.x = width/2;
    this.y = 200;
    this.anchorX = this.x+35;
    this.anchorY = this.y-20;
    this.anchorEndY = this.anchorY + 20;
  }

  playerController(){
    image(playerImage,this.x,this.y);//display the player
    line(this.anchorX,this.anchorY,this.anchorX,this.anchorEndY);//display fishing rod
    
    //move player to right
    if(keyIsDown(RIGHT_ARROW) && fishingRod == false) {
      this.x = this.x + 5;
      this.anchorX = this.x+35;
      if (this.x > width - 39){
        this.x = width -39;
      }
    }
    //move player to left
    if(keyIsDown(LEFT_ARROW) && fishingRod == false) {
      this.x = this.x - 5;
      this.anchorX = this.x+35;
      if (this.x < 10){
        this.x = 10;
      }
    }
    //fishing Rod how long press how long go down
    if(keyIsDown(DOWN_ARROW)){
      fishingRod = true;
      if (this.anchorEndY < height-10 && fishOnAnchor === false){
        this.anchorEndY = this.anchorEndY + fishingRodSpeed;
      }else{//if fishing rod is lower than screen bottom, go up
        fishingRod = false;
      }
    }else{//if player released down arrow
      fishingRod = false;
    }


    if(fishingRod === false){ //if fishing rod does not in use
        this.anchorEndY = this.anchorEndY - fishingRodSpeed
        if(this.anchorEndY <= 220){//if fishing rod go up to the boat
          this.anchorEndY = 220;
          fishOnAnchor = false;
        }
      }
  }  
}

function Timer(){
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }else if (timer == 0) {
    if(score >= levelGoal){
      level = level + 1;
      levelGoal = levelGoal + 3;
    }
    clear();
    screen = 3;
  }
  fill('black');
  textSize(20);
  text("Time: "+ timer,80,30);
}

function GoPlaySceneButton(){
  goPlaySceneButton = createButton('FISH');
  goPlaySceneButton.position(1200,30);
  goPlaySceneButton.mousePressed(goPlayScene);
  goPlaySceneButton.style('background-color', '#5E7EB5');
  goPlaySceneButton.style('font-family','myfontN');
}
function GoStoreSceneButton(){
  goStoreSceneButton = createButton('STORE');
  goStoreSceneButton.position(1260,30);
  goStoreSceneButton.mousePressed(goStoreScene);
  goStoreSceneButton.style('background-color', '#5E7EB5');
  goStoreSceneButton.style('font-family','myfontN');
}

function GoHouseSceneButton(){
  goHouseSceneButton = createButton('HOUSE');
  goHouseSceneButton.position(1340,30);
  goHouseSceneButton.mousePressed(goHouseScene);
  goHouseSceneButton.style('background-color', '#5E7EB5');
}

function GoCreditSceneButton(){
  goCreditSceneButton = createButton('CREDIT');
  goCreditSceneButton.position(1110,30);
  goCreditSceneButton.mousePressed(goCreditScene);
  goCreditSceneButton.style('background-color', '#5E7EB5');
}

function goPlayScene(){

  timer = 20;
  screen =1;
  
}

function goStoreScene(){
  screen = 3;
}

function goHouseScene(){
  screen = 4;
}

function goCreditScene(){
  screen = 5;
}
