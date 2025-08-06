
function doSpriteMovement() {
    // Food movement - moves from right to left and repeats
    if(food.x < 0) {
        food.x = 400;
    }
    
    // Enemy movement - moves from right to left and repeats
    if(enemy.x < 0) {
        enemy.x = 400;
    }
    // Movement of 
// set velocity for the obstacle and the target
food.scale = 1;
enemy.x = 425;
food.velocityX=-5;
enemy.velocityX=-8;

// enemy movement and conditions
// LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if(enemy.x<-20){
    enemy.x=420}

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
if(food.x<20){
  food.x=420;
}
  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("Score:", 20, 30);
  text (score, 100, 30);
  // GAME OVER
  // if health runs out
  // show Game over
}
