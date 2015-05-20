function draw_chart() {
  var chart_canvas = document.getElementById("chart");
  var context = chart_canvas.getContext("2d");
  
  //grid lines
  for (var x = 5.5; x < 500; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 500);
  }

  for (var y = 5.5; y < 500; y += 10) {
  context.moveTo(0, y);
  context.lineTo(500, y);
  }

  context.strokeStyle = "#eee";
  context.stroke();

  //vertical axis
  context.beginPath();
  context.moveTo(4.5, 500);
  context.lineTo(500, 500);
  context.moveTo(495, 495);
  context.lineTo(500, 500);
  context.lineTo(495, 505);
  //horizontal axis
  context.moveTo(5, 5);
  context.lineTo(5, 500);
  context.moveTo(0, 10);
  context.lineTo(5, 5);
  context.lineTo(10, 10);
  //ticks on horizontal axis
  context.moveTo(35, 495);
  context.lineTo(35, 505);
  context.moveTo(250, 495);
  context.lineTo(250, 505);
  context.moveTo(450, 495);
  context.lineTo(450, 505);
  //ticks on vertical axis

  for (var y = 55.5; y < 500; y += 50) {
  context.moveTo(0, y);
  context.lineTo(500, y);
  }

  

  context.strokeStyle = "#000";
  context.stroke();

  // axis labels
  context.font = "18px sans-serif";
  context.fillText("Position in National Income Distribution", 90, 580);
  // context.fillText("Position in International Income Distribution", 15, 10);

  // horizontal axis labels
  context.font = "14px sans-serif";
  context.fillText("Bottom 5%", 10, 530);
  context.fillText("National Average", 220, 530);
  context.fillText("Top 5%", 430, 530);

  // vertical axis labels
  for (var y = 55.5; y < 500; y += 50) {

  context.fillText("X%", 0, y);
  }

  //draw figures
  var poorPersonIndia = document.getElementById("poorPersonIndia");
  context.drawImage(poorPersonIndia, 0, 450);

  var medianPersonIndia = document.getElementById("medianPersonIndia");
  context.drawImage(medianPersonIndia, 200, 360);

  var richPersonIndia = document.getElementById("richPersonIndia");
  context.drawImage(richPersonIndia, 400, 100);

  var poorPersonUS = document.getElementById("poorPersonUS");
  context.drawImage(poorPersonUS, 0, 100);

  var medianPersonUS = document.getElementById("medianPersonUS");
  context.drawImage(medianPersonUS, 200, 50);

  var richPersonUS = document.getElementById("richPersonUS");
  context.drawImage(richPersonUS, 400, 0);

};

draw_chart();
