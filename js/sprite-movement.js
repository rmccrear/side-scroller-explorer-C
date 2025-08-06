

// Declare and initialize global variables for food, enemy, health, and score
// Assume food, enemy, health, and score are declared and initialized in variables.js

function doSpriteMovement() {
    // Update positions based on velocity
    food.x += food.velocityX;
    enemy.x += enemy.velocityX;

    // Food movement - moves from right to left and repeats
    if (food.x < -20) {
        food.x = 420;
    }

    // Enemy movement - moves from right to left and repeats
    if (enemy.x < -20) {
        enemy.x = 420;
    }

    // DRAW SPRITES (replace with your actual sprite drawing logic)
    drawSprites();

    // SCOREBOARD
    fill(0, 0, 0);
    textSize(20);
    text("Health:", 280, 30);
    text(" Health" + health, 350, 30);
    text("Score:", 20, 30);
    text(` Score${score}`, 100, 30);

    // GAME OVER
    // if health runs out
    // show Game over
}

