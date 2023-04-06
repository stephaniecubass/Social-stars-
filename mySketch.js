// Stephanie Cubas 
// Pascal Huynh 
//Web and FX: From Theory to practice, 502-A22-LA 
// falling stars 
// https://openprocessing.org/sketch/1889284 
/*This interaction consists on trying to put as many stars on the different buckets, but you need to make sure to follow the color pattern. If you don’t, the game is over. */ 
/*The meaning behind my interactive assignment it is to try to convince or to try to transmit a little of the reality that is lived today and which many people do not talk about. Society has created social standards and limits for social groups. Many people consider themselves inferior to others and what I am trying to convey is that we are all like a star, unique and special but with this society we are trying to fit into those standards.  */ 

// variables of game
let bucketX, bucketY, bucketWidth, bucketHeight, score, stars;

function setup() {
  createCanvas(500, 500);
  bucketX = width / 2 - 100;
  bucketY = height - 125;
  bucketWidth = 100;
  bucketHeight = 120;
  score = 0;
  stars = [];
  for (let i = 0; i < 10; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(220);
  
  //  bucket 
  fill(92, 64, 51);
  rect(bucketX, bucketY, bucketWidth, bucketHeight);
  
  // Move bucket
  if (keyIsDown(LEFT_ARROW)) {
    bucketX -= 25;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    bucketX += 25;
  }
  
  // Draw stars
  for (let i = 0 ; i < stars.length; i++) {
    stars[i].show();
    stars[i].update();
    
    //  collection
    if (stars[i].y + stars[i].r > bucketY && stars[i].x > bucketX && stars[i].x + stars[i].r < bucketX + bucketWidth) {
      score++;
      stars[i] = new Star();
    }
    
    // Check for game over
    if (stars[i].y > height) {
      gameOver();
      break;
    }
  }
  
  // Draw score
  textSize(35);
  textAlign(LEFT);
  fill(0);
  text(`social standards: ${score}`, 10, 30);
}

function Star() {
  this.r = 30;
  this.x = random(this.r, width - this.r);
  this.y = random(-height, -this.r);
  this.speed = random(1, 3);
	
	this.show = function() {
    fill(255, 255, 0);
    stroke(0);
    strokeWeight(2);
    beginShape();
    vertex(this.x, this.y - this.r);
    vertex(this.x + this.r * 0.3, this.y - this.r * 0.3);
    vertex(this.x + this.r, this.y);
    vertex(this.x + this.r * 0.3, this.y + this.r * 0.3);
    vertex(this.x, this.y + this.r);
    vertex(this.x - this.r * 0.3, this.y + this.r * 0.3);
    vertex(this.x - this.r, this.y);
    vertex(this.x - this.r * 0.3, this.y - this.r * 0.3);
    endShape(CLOSE);
	}
  
	this.update = function() {
    this.y += this.speed;
	}
}


function gameOver() {
  textSize(32);
  textAlign(CENTER);
  fill(0);
  text("You dont need to fit in", width / 2, height / 2 - 20);
  text(`score : ${score}`, width / 2, height / 2 + 20);
  noLoop();
}

