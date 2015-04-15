//Hook up the tweet display

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "18 October 2014 12:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

    $(".tweet").tweet({
        username: "UnSourireEspoir",
        count: 3,
        loading_text: "loading tweets..."
    });

});	
