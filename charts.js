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
  //finally, fill in the lines
  context.strokeStyle = "#000";
  context.stroke();

    //vertical axis line
  context.beginPath();
  context.moveTo(small - 5, small + 250.5);
  context.lineTo(square, small + 250.5);
   context.strokeStyle = "#000";
  context.stroke();

  // axis labels
  context.font = "18px sans-serif";
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("Income in USD (thousands)", small + 250, 595);
  context.textAlign = 'left';
  context.fillText("Position in National Income Distribution", 10, 40);

    // vertical axis labels
  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.font = "14px sans-serif";
  context.fillText("National", 20, small + 245);
  context.fillText("Average", 20, small + 260);

  // horizontal axis median label
  context.font = "14px sans-serif";
 for (var x = 100; x < 550; x += 50) {
  context.textBaseline = "middle";
  context.fillText( "$" + (x/5 - 10) + "k", x, 560);
  }

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

function draw_median_data() {
  var chart_canvas = document.getElementById( "median_data" );
  var context = chart_canvas.getContext("2d");
  //India median
  context.beginPath();
  context.arc(50 + 5*5, 50 + 5*50, 10, 0 , 2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  //US median
  context.beginPath();
  context.arc(50 + 53*5, 50 + 5*50, 10, 0, 2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();
};

function draw_main_chart() {
  var chart_canvas = document.getElementById( "main_chart" );
  var context = chart_canvas.getContext("2d");

  var square = 550;
  var small = 50;

  // vertical axis labels

  context.fillStyle= "#000";
  context.textAlign = 'center';
  context.fillText("Top 5%", 20, small + 5*5);
  context.fillText("Bottom 5%", 20, small + 5*95);

};

function draw_other_data() {
  var chart_canvas = document.getElementById( "main_data" );
  var context = chart_canvas.getContext("2d");
  //India median
  context.beginPath();
  context.arc(50 + 5*5, 50 + 5*50, 10, 0 , 2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  //US median
  context.beginPath();
  context.arc(50 + 53*5, 50 + 5*50, 10, 0, 2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

  //India poorest
  context.beginPath();
  context.arc(50 + 1*5, 50 + 5*95,10,0,2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  //India richest
  context.beginPath();
  context.arc(50 + 9*5, 50 + 5*5, 10, 0, 2*Math.PI);
  context.fillStyle = "steelBlue";
  context.fill();

  //India line

  context.beginPath();
  context.moveTo(50 + 1*5, 50 + 5*95);
  context.lineTo(50 + 5*5, 50 + 5*50);
  context.lineTo(50 + 9*5, 50 + 5*5);
  context.strokeStyle = "steelBlue";
  context.stroke();

   //US poorest
  context.beginPath();
  var us_poorest_x = 50 + 10*5
  context.arc(us_poorest_x, 50 + 5*95, 10, 0, 2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

   //US richest
  context.beginPath();
  var us_richest_x = 50 + 100*5
  context.arc(us_richest_x, 50 + 5*5, 10, 0, 2*Math.PI);
  context.fillStyle = "fireBrick";
  context.fill();

  // US line

  context.beginPath();
  context.moveTo(us_poorest_x, 50 + 5*95);
  context.lineTo(50 + 53*5, 50 + 5*50);
  context.lineTo(us_richest_x, 50 + 5*5);
  context.strokeStyle = "fireBrick";
  context.stroke();
};