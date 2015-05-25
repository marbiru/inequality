function draw_graph_paper(canvas_name, width, height) {
    var chart_canvas = document.getElementById( canvas_name );
  var context = chart_canvas.getContext("2d");
  
  //grid lines
  for (var x = 0.5; x < width; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, height);
  }

  for (var y = 25.5; y < height - 24; y += 10) {
  context.moveTo(0, y);
  context.lineTo(width, y);
  }

  context.strokeStyle = "#eee";
  context.stroke();

  var square = 550;
  var small = 50;
}

function draw_common_chart(canvas_name) {
  var chart_canvas = document.getElementById( canvas_name );
  var context = chart_canvas.getContext("2d");

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
  //tick on horizontal axis
  context.moveTo(small + 250, square - 5);
  context.lineTo(small + 250, square + 5);
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

};

function draw_main_chart() {
  var chart_canvas = document.getElementById( "main_chart" );
  var context = chart_canvas.getContext("2d");

  //MAIN CHART ONLY

  var square = 550;
  var small = 50;
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

  //India line

  context.beginPath();
  context.moveTo(small + 25, 545);
  context.lineTo(small + 250, 445);
  context.lineTo(525, 220);
  context.strokeStyle = "steelBlue";
  context.stroke();

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

  // US line

  context.beginPath();
  context.moveTo(small + 25, 210);
  context.lineTo(small + 250, 110);
  context.lineTo(525,55);
  context.strokeStyle = "fireBrick";
  context.stroke();

  // horizontal axis top/bottom labels
  context.font = "14px sans-serif";
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("Bottom 5%", small + 25, square + 20);
  context.fillText("Top 5%", small + 475, square + 20);

  // horizontal plane divider
  //red arrow
  context.beginPath();
  var temp_height = 210
  context.moveTo(100, temp_height);
  context.lineTo(195, temp_height);
  context.moveTo(105, temp_height - 5);
  context.lineTo(100, temp_height);
  context.lineTo(105, temp_height + 5);
  context.lineWidth=3;
  context.strokeStyle = "fireBrick";
  context.stroke();
  //blue arrow
  context.beginPath();
  var temp_height_2 = 220
  context.moveTo(420, temp_height_2);
  context.lineTo(500, temp_height_2);
  context.moveTo(495, temp_height_2 - 5);
  context.lineTo(500, temp_height_2);
  context.lineTo(495, temp_height_2 + 5);
  context.lineWidth = 3;
  context.strokeStyle = "steelBlue";
  context.stroke();

  // mid-chart text
  context.font = "14px sans-serif";
  context.fillStyle = "fireBrick";
  context.textAlign = 'left';
  context.fillText("The very poor person in the US...", 200, temp_height);
  context.fillStyle = "steelBlue";
  context.fillText("... has a higher income than the very rich person in India", 120, temp_height + 20);

};