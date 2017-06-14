$(function() {
	$('.navbar-toggle').on('click',function(){
		$('.navbar-collapse').slideToggle();
	});
	positionMap();
});

function positionMap(){
	var positionContentBoxHeight=$('.position_content_box').height();
	$('.position_map').css('top',positionContentBoxHeight);
	$('.position_content').css('height',positionContentBoxHeight+$('.position_map').height());
}