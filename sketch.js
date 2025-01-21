function setup() {
  createCanvas(800, 800);
  colorMode(RGB);
  angleMode(DEGREES);
  noSmooth();
  noLoop();
}

function draw() {
  background(0);
  const offset = width / 20;
  const margin = offset / 5;
  const cellCount = int(random(2, 4));
  drawGrid(offset, offset, width - offset * 2, height - offset * 2, cellCount, margin);
}

function drawGrid(x, y, w, h, cellCount, margin) {
  let cellWidth, cellHeight;
  const rotation = int(random(4)) * 90;

  if (rotation % 180 === 0) {
    cellWidth = w;
    cellHeight = h;
  } else {
    cellWidth = h;
    cellHeight = w;
  }

  push();
  translate(x + w / 2, y + h / 2);
  rotate(rotation);
  translate(-cellWidth / 2, -cellHeight / 2);

  const cellW = (cellWidth - margin * (cellCount - 1)) / cellCount;
  const cellH = (cellHeight - margin * (cellCount - 1)) / cellCount;

  for (let j = 0; j < cellCount; j++) {
    for (let i = 0; i < cellCount; i++) {
      const cx = i * (cellW + margin);
      const cy = j * (cellH + margin);

      if (min(cellW, cellH) > width / 15) {
        drawGrid(cx, cy, cellW, cellH, int(random(2, 4)), margin / 2);
      } else {
        drawCell(cx, cy, cellW, cellH);
      }
    }
  }

  pop();
}

function drawCell(x, y, w, h) {
  const palette = ['#16C47F', '#FFD65A', '#FF9D23', '#F93827'];
  fill(random(palette));
  stroke(random(palette));
  strokeWeight(1);
  rect(x, y, w, h);
}
