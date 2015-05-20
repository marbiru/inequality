function draw_chart() {
  var chart_canvas = document.getElementById("chart");
  var context = chart_canvas.getContext("2d");
  
  //grid lines
  for (var x = 50.5; x < 550.5; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 600.5);
  }

  for (var y = 50.5; y < 550.5; y += 10) {
  context.moveTo(0, y);
  context.lineTo(550.5, y);
  }

  context.strokeStyle = "#eee";
  context.stroke();

  //vertical axis
  context.beginPath();
  context.moveTo(50, 550);
  context.lineTo(550, 550);
  context.moveTo(495, 495);
  context.lineTo(500, 500);
  context.lineTo(495, 505);
  //vertical axis
  context.moveTo(50, 50);
  context.lineTo(50, 550);
  context.moveTo(45, 55);
  context.lineTo(50, 50);
  context.lineTo(55, 55);
  //ticks on horizontal axis
  context.moveTo(35, 495);
  context.lineTo(35, 505);
  context.moveTo(250, 495);
  context.lineTo(250, 505);
  context.moveTo(450, 495);
  context.lineTo(450, 505);
  //ticks on vertical axis

  for (var y = 100.5; y < 550; y += 50) {
  context.moveTo(50, y);
  context.lineTo(550.5, y);
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
  for (var y = 100; y < 550; y += 50) {
  context.textBaseline = "middle";
  context.fillText("X%", 15, y);
  }


  //India circles
  context.beginPath();
  context.arc(75,545,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  context.beginPath();
  context.arc(300,445,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  context.beginPath();
  context.arc(525,205,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

};

draw_chart();

 /* draw figures
  var poorPersonIndia = document.getElementById("poorPersonIndia");
  context.drawImage(poorPersonIndia, 0, 480);

  var medianPersonIndia = document.getElementById("medianPersonIndia");
  context.drawImage(medianPersonIndia, 200, 360);

  var richPersonIndia = document.getElementById("richPersonIndia");
  context.drawImage(richPersonIndia, 400, 100);

  var poorPersonUS = document.getElementById("poorPersonUS");
  context.drawImage(poorPersonUS, 0, 120);

  var medianPersonUS = document.getElementById("medianPersonUS");
  context.drawImage(medianPersonUS, 200, 50);

  var richPersonUS = document.getElementById("richPersonUS");
  context.drawImage(richPersonUS, 400, 0); */


