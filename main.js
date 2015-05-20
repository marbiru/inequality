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

  context.strokeStyle = "#000";
  context.stroke();

  // axis labels
  context.font = "14px sans-serif";
  context.fillText("Position in National Income Distribution", 120, 550);
  context.fillText("Position in International Income Distribution", 15, 10);

};

draw_chart();