function drawBackground() {
     // Blue sky background
    background(135,206,235);
    triangle(60,190,15,300,100,300);
    triangle(160,190,100,300,200,300);
    triangle(250,165,200,300,360,400);
    triangle(380,150,300,300,450,300);
    // TODO: Sun on the right side
    fill(255, 255, 0);
    ellipse(340, 50, 60, 60);
    // Grass at the bottom (100px high)
    fill(34, 139, 34);
    rect(0, 400 - 100, 400, 100);
}