
function respondToUser() {
  
  // TODO: if player is back to position
  // stop them
  if (player.y <= 300) {
    player.velocityY = 0;
  }
  
  // Player jumping controls
  if (keyWentDown("UP")) {
    player.velocityY = player.velocityY - 0.2;
  }
  
  // Set velocityY to 4 when player reaches y=100
  if (player.y <= 100) {
    player.velocityY = 4;
  }
}
