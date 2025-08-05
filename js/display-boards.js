
function showBoards() {
  // Display score
  fill(255, 255, 255); // White text
  textSize(24);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);

   // Display health
  fill(255, 255, 255); // White text
  textSize(24);
  textAlign(RIGHT, TOP);
  text("Health: " + health, 10, 10);
}
