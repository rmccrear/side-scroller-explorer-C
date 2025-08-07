

// Declare and initialize global variables for food, enemy, health, and score
// Assume food, enemy, health, and score are declared and initialized in variables.js

function doSpriteMovement() {
    // Update positions based on velocity
    food.velocityX;
    enemy.velocityX;

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

    
}

