let screen = 0;
let body_x = 1000;
let body_y = 400;
let head_x = 1000;
let head_y = 370;
let feet_x = 990;
let feet_y = 430;
let eye_x = 995;
let eye_y = 360;
let speed1 = 3;
let obstacle1_x = 30;
let obstacle1_y = 369;
let obstacle2_x = 30;
let obstacle2_y = 569;
let power_x = 400;
let power_y = 700;
let score = 0;
let carrot_top_x1 = 690;
let carrot_top_x2 = 710;
let carrot_top_x3 = 700;
let carrot_top_y1 = 120;
let carrot_top_y2 = 120;
let carrot_top_y3 = 140;
let carrot_bottom_x1 = 680;
let carrot_bottom_x2 = 720;
let carrot_bottom_x3 = 700;
let carrot_bottom_y1 = 135;
let carrot_bottom_y2 = 135;
let carrot_bottom_y3 = 180;



function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {

	if (screen == 0){
		startScreen()
	}else if (screen == 1){
		gameOn()
	}else if (screen == 2){
		gameOver()
	}else if (screen ==3){
		win()//to be continued
	}
	
}

function startScreen(){
	background(212, 245, 203);
	noStroke();
	fill(54, 132, 107);
	textSize(50);
	text("Win The Tug Of War", 500, height/2);
	textSize(20);
	text("click to start", width/2, height/2 + 80);
	rabbit();
	fill(255, 158, 175)
	text("I will fight for my carrot!",1030,330);
	
	stroke(5,5,5);
	fill(131, 125, 125);
	textSize(20);
	text("Previous Story:", 30,100);
	noStroke();
	text("Forest bully did not catch any fish.",30,130);
	text("So, he dicided to threaten rabbit: pull carrot for him, or he will cook the rabbit.",30, 160);
	text("Rabbit pulled three carrot, but the forest bully did not want to share even one with rabbit.", 30, 190);
}

function gameOn(){
	
	scene();
	rabbit();
	obstacle();
	power();
	
	// game more difficult as the score increases
	if (score>5){
		speed1 = 6;
	}
}

function gameOver(){
	background(212, 245, 203);
	fill(131, 125, 125);
	textSize(50);
	text("GAME OVER", 500, height/2);
	rabbit();
	
}

function win(){
	background(212, 245, 203);
	fill(114, 179, 126);
	textSize(50);
	text("Rabbit Win!", 500, height/2)
	textSize(40);
	text("Can rabbit get carrot finally?", 500, height/2+80)
	text("to be continued.....", 800, height/2 + 130);
	rabbit();
}

function mousePressed(){
	if(screen ==0){
		screen =1
	}
}

function scene(){
	//tug of war area
	background(212, 245, 203); // ground color light green
	
	//play area
	
	noStroke();
	
	//1
	fill(241, 244, 198);
	rect(0,339,1440,100);
	
	//2
	fill(214, 208, 184);
	rect(0,439,1440,100);
	
	//3
	fill(241, 244, 198);
	rect(0,539,1440,100);
	
	//4
	fill(214, 208, 184);
	rect(0,639,1440,100);
	
	//score
	fill(131, 125, 125)
	textSize(50);
	text(score,1020,100);
	
	//tug of war
	fill(0,0,0);
	rect(500,150,400,5);
	fill(81, 156, 102);      //carrot
	triangle(carrot_top_x1,carrot_top_y1,carrot_top_x2,carrot_top_y2,carrot_top_x3,carrot_top_y3);
	fill(245, 173, 59);
	triangle(carrot_bottom_x1,carrot_bottom_y1,carrot_bottom_x2,carrot_bottom_y2,carrot_bottom_x3,carrot_bottom_y3);
	
	fill(76, 173, 164);
	textSize(20);
	text("Forest Bully", 390, 150);
	text("Rabbit", 900,150);
	strokeWeight(1);
	
	//how to play
	fill(0,0,0)
	text("Use keyboard to move rabbit,",30,100);
	text("Touch orange circle,",30,140);
	text("Avoid brown circle", 30, 180);
	text("Get 10 score to win the tug of war.",30, 220);
	
		
}

function rabbit(){
	noStroke();
	//rabbit
	fill(252, 249, 237);
	ellipse(head_x, head_y, 40, 40);
	ellipse(body_x, body_y, 57, 70);
	ellipse(feet_x, feet_y, 10, 20); // left foot
	ellipse(feet_x + 20, feet_y, 10, 20); // right foot 
	ellipse(feet_x, feet_y - 85, 10, 20); // left ear
	ellipse(feet_x + 20, feet_y - 85, 10, 20); // right ear
	fill(5,5,5);
	ellipse(eye_x, eye_y, 5, 5);//left eye
	ellipse(eye_x+10, eye_y, 5, 5);//right eye
	ellipse(eye_x+5, eye_y+7, 3, 3);//nose
	fill(255, 230, 235); //pink
	ellipse(feet_x, feet_y - 85, 6, 12); // left ear
	ellipse(feet_x + 20, feet_y - 85, 6, 12); // right ear
	ellipse(eye_x-8, eye_y+7, 7, 5);//left pink face
	ellipse(eye_x+18, eye_y+7, 7, 5);//right pink face
	
	//move rabbit
	if(keyIsDown(RIGHT_ARROW)) {
		body_x = body_x +5;
		head_x = head_x +5;
		feet_x = feet_x +5;
		eye_x = eye_x +5;
		
	}
	
	if(keyIsDown(LEFT_ARROW)) {
		body_x = body_x-5;
		head_x = head_x-5;
		feet_x = feet_x-5;
		eye_x = eye_x-5;
		
	}
	
	if(keyIsDown(UP_ARROW)) {
		body_y = body_y-5;
		head_y = head_y-5;
		feet_y = feet_y-5;
		eye_y = eye_y-5;
		
	}
	
	if(keyIsDown(DOWN_ARROW)) {
		body_y = body_y+5;
		head_y = head_y+5;
		feet_y = feet_y+5;
		eye_y = eye_y+5;
	
	}
}

function obstacle(){
	fill(131, 125, 125);
	
	
	
	//obstacle 1
	ellipse(obstacle1_x,obstacle1_y,60,60);
	
	// obstacle move
	obstacle1_x += speed1;
	
	// limit obstacle move area
	if(obstacle1_x >1370){
		obstacle1_x = 30;
		obstacle1_y = random(369,539);
	}
	
	// obstacle 2
	ellipse(obstacle2_x,obstacle2_y,60,60);
	
	// obstacle move
	obstacle2_x += speed1;
	
	// limit obstacle move area
	if(obstacle2_x >1370){
		obstacle2_x = 30;
		obstacle2_y = random(569,680);
	}
	
	// if rabbit touch the obstacle, game over
	let d1_body = dist (obstacle1_x, obstacle1_y, body_x, body_y);
	let d2_body = dist (obstacle2_x, obstacle2_y, body_x, body_y);
	let d1_head = dist (obstacle1_x, obstacle1_y, head_x, head_y);
	let d2_head = dist (obstacle2_x, obstacle2_y, head_x, head_y);
	
	if (d1_body<40 || d2_body<40 || d1_head <40 || d2_head<40){
		screen = 2;
	}
	
}



function power(){
	fill(214, 132, 56);
	ellipse(power_x, power_y,20,20);
	
	//if rabbit touch power, score add 1
	let d_body = dist (power_x, power_y, body_x, body_y);
	let d_head = dist (power_x, power_y, head_x, head_y);
	
	if(d_body < 30 || d_head <30){
		score = score +1;
		power_x = random(30,1000);
		power_y = random(369,700);
		//carrot move to right 
		carrot_top_x1 = carrot_top_x1 +20;
		carrot_top_x2 = carrot_top_x2 +20;
		carrot_top_x3 = carrot_top_x3 +20;
		carrot_bottom_x1 = carrot_bottom_x1 +20;
		carrot_bottom_x2 = carrot_bottom_x2 +20;
		carrot_bottom_x3 = carrot_bottom_x3 +20;
	}
	
	if (score == 10){
		screen = 3;
	}
	
}






