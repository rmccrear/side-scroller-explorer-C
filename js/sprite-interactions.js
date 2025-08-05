
function doSpriteInteraction() {
    // Check if player touches food
    if (player.isTouching(food)) {
        score = score + 10; // Add 10 points
        food.x = 400; // Send food back to start (right edge)

    // Check if enemy touches player
    if (enemy.isTouching(player)) {
        enemy.rotation = -2; //enemy rotates counter clockwise when touching player
        health = health - 1; // Subtract 1 health
    }
}
