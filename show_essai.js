	var shows_template, show_template;

	var current_show = spectacles.shows[0];

	function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}
	
$(document).ready(function(){

	var source   = $("#shows-template").html();
	shows_template = Handlebars.compile(source);

	$("#show1-tab").click(function () {
		
		// displays the photos template
		showTemplate(shows_template, current_show);

		$(".list-group scrollable .active").removeClass("active");
		// then make photos tab active
		$("#show1-tab").addClass("active");
	});
});