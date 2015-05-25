//see charts.js for chart-drawing functions

draw_graph_paper( "first_image_graph_paper", 1440.5, 300.5 );
draw_graph_paper( "second_image_graph_paper", 1440.5, 300.5 );
draw_graph_paper( "median_chart_graph_paper", 1440.5, 600.5 );
draw_graph_paper( "main_chart_graph_paper", 1440.5, 600.5 );

draw_common_chart( "median_chart" );

draw_common_chart( "main_chart" );
draw_main_chart();


// fade in

$(function() {
    $(window).scroll( function() {
        $('.hideme').each( function(i) {
            var middle_of_object = $(this).offset().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > middle_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    
    });   
});
