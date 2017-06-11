$(function() {
	$('.navbar-toggle').on('click',function(){
		$('.navbar-collapse').slideToggle();
	});

	var map;
	window.initMap = function() {
		var position = {lat: 22.626440, lng: 120.285644};
		map = new google.maps.Map(document.querySelector('.position_map'), {
			center: position,
			zoom: 16
		});

		var marker = new google.maps.Marker({
			position: position,
			map: map
		});
	}

	window.set_language = function(lang) {
		$.post( "set_language", {  lang: lang }, function(res){
			window.location = "./"
		});
	}
});
