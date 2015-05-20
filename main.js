google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['In-Country Income Distribution', 'Global Income Distribution'],
      [ 2.5,      3750],
      [ 50,      51939],
      [ 97.5,     186000],
    ]);

    var options = {
      title: 'International Income Comparison',
      hAxis: {title: 'In-Country Income Distribution', minValue: 0, maxValue: 15},
      vAxis: {title: 'Income in USD (at purchasing power parity)', minValue: 0, maxValue: 15},
      legend: 'none',
      colors: ['#087037'],
      pointSize: 35,
      pointShape: 'star',
      animation: {
        duration: 200,
        easing: 'inAndOut',
    }
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}