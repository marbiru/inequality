function draw_median_chart() {
  var chart_canvas = document.getElementById("median_chart");
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

  var square = 550;
  var small = 50;

  //horizontal axis
  context.beginPath();
  context.moveTo(50, square);
  context.lineTo(square, square);
  //horizontal arrow
  context.moveTo(square - 5, square - 5);
  context.lineTo(square, square);
  context.lineTo(square - 5, square + 5);
  //vertical axis
  context.moveTo(small, small);
  context.lineTo(small, square);
  //vertical arrow
  context.moveTo(small - 5, small + 5);
  context.lineTo(small, small);
  context.lineTo(small + 5, small + 5);
  //ticks on horizontal axis
  //context.moveTo(small + 25, square - 5);
  //context.lineTo(small + 25, square + 5);
  context.moveTo(small + 250, square - 5);
  context.lineTo(small + 250, square + 5);
  //context.moveTo(small + 475, square - 5);
  //context.lineTo(small + 475, square + 5);
  //ticks on vertical axis
  for (var y = 100.5; y < square; y += 50) {
  context.moveTo(50, y);
  context.lineTo(550.5, y);
  }
  //finally, fill in the lines
  context.strokeStyle = "#000";
  context.stroke();

  // axis labels
  context.font = "18px sans-serif";
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("Position in National Income Distribution", small + 250, 595);
  context.textAlign = 'left';
  context.fillText("Position in Global Income Distribution", 10, 40);

  // horizontal axis median label
  context.font = "14px sans-serif";
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("National Average", small + 250, square + 20);

  // vertical axis labels
  for (var y = 100; y < 550; y += 50) {
  context.textBaseline = "middle";
  context.fillText( (550 - y)/5 + "%", 30, y);
  }

  //India median
  context.beginPath();
  context.arc(small + 250,445,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  //US median
  context.beginPath();
  context.arc(small + 250,110,10,0,2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

  //legend
  //India
  context.beginPath();
  context.fillStyle = "steelBlue";
  context.fillRect(350, 2, 15, 15);
  context.font = "12 sans-serif";
  context.textAlign = 'left';
  context.fillText("= India", 370, 9);
  //US
  context.beginPath();
  context.fillStyle = "fireBrick";
  context.fillRect(430, 2, 15, 15);
  context.font = "12 sans-serif";
  context.textAlign = 'left';
  context.fillText("= U.S.", 450, 9);

  //MAIN CHART ONLY
  /*
  //India poorest
  context.beginPath();
  context.arc(small + 25,545,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  //India richest
  context.beginPath();
  context.arc(525,220,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

   //US poorest
  context.beginPath();
  context.arc(small + 25,210,10,0,2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

   //US richest
  context.beginPath();
  context.arc(525,55,10,0,2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

  // horizontal axis top/bottom labels
  context.font = "14px sans-serif";
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("Bottom 5%", small + 25, square + 20);
  context.fillText("Top 5%", small + 475, square + 20);
  */
};

draw_median_chart();

function draw_main_chart() {
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

  var square = 550;
  var small = 50;

  //horizontal axis
  context.beginPath();
  context.moveTo(50, square);
  context.lineTo(square, square);
  //horizontal arrow
  context.moveTo(square - 5, square - 5);
  context.lineTo(square, square);
  context.lineTo(square - 5, square + 5);
  //vertical axis
  context.moveTo(small, small);
  context.lineTo(small, square);
  //vertical arrow
  context.moveTo(small - 5, small + 5);
  context.lineTo(small, small);
  context.lineTo(small + 5, small + 5);
  //ticks on horizontal axis
  context.moveTo(small + 25, square - 5);
  context.lineTo(small + 25, square + 5);
  context.moveTo(small + 250, square - 5);
  context.lineTo(small + 250, square + 5);
  context.moveTo(small + 475, square - 5);
  context.lineTo(small + 475, square + 5);
  //ticks on vertical axis
  for (var y = 100.5; y < square; y += 50) {
  context.moveTo(50, y);
  context.lineTo(550.5, y);
  }
  //finally, fill in the lines
  context.strokeStyle = "#000";
  context.stroke();

  // axis labels
  context.font = "18px sans-serif";
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("Position in National Income Distribution", small + 250, 595);
  context.textAlign = 'left';
  context.fillText("Position in Global Income Distribution", 10, 40);

  // horizontal axis median label
  context.font = "14px sans-serif";
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("National Average", small + 250, square + 20);

  // vertical axis labels
  for (var y = 100; y < 550; y += 50) {
  context.textBaseline = "middle";
  context.fillText( (550 - y)/5 + "%", 30, y);
  }

  //India median
  context.beginPath();
  context.arc(small + 250,445,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  //US median
  context.beginPath();
  context.arc(small + 250,110,10,0,2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

  //legend
  //India
  context.beginPath();
  context.fillStyle = "steelBlue";
  context.fillRect(350, 2, 15, 15);
  context.font = "12 sans-serif";
  context.textAlign = 'left';
  context.fillText("= India", 370, 9);
  //US
  context.beginPath();
  context.fillStyle = "fireBrick";
  context.fillRect(430, 2, 15, 15);
  context.font = "12 sans-serif";
  context.textAlign = 'left';
  context.fillText("= U.S.", 450, 9);

  //MAIN CHART ONLY

  //India poorest
  context.beginPath();
  context.arc(small + 25,545,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  //India richest
  context.beginPath();
  context.arc(525,220,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

   //US poorest
  context.beginPath();
  context.arc(small + 25,210,10,0,2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

   //US richest
  context.beginPath();
  context.arc(525,55,10,0,2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

  // horizontal axis top/bottom labels
  context.font = "14px sans-serif";
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("Bottom 5%", small + 25, square + 20);
  context.fillText("Top 5%", small + 475, square + 20);

};

draw_main_chart();
