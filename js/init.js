var updateViewport = function() {

	var vp 			= $(window);
	var vpHeight	= vp.height();
	var vpWidth		= vp.width();

	var parallaxItem = $(".parallax_item");
	var staticItem = $(".static_item");

	parallaxItem.css({
		width: vpWidth * 1.3,
		height: vpHeight * 1.1
	});

	staticItem.css({
		width: vpWidth,
		height: vpHeight
	});

	parallaxItem.find(".center_img img").centerImage();
	staticItem.find(".center_img img").centerImage();
};


$(document).ready(function() {

	updateViewport();

	$('#js-parallax').mousemove(function(e){
		/* Work out mouse position */
		var offset = $(this).offset();
		var xPos = e.pageX - offset.left;
		var yPos = e.pageY - offset.top;

		/* Get percentage positions */
		var mouseXPercent = Math.round(xPos / $(this).width() * 100);
		var mouseYPercent = Math.round(yPos / $(this).height() * 100);

		/* Position Each Layer */
		$(this).find('.mask').each(function() {
			var diffX = $('#js-parallax').width() - $(this).width();
			var diffY = $('#js-parallax').height() - $(this).height();

			var myX = diffX * (mouseXPercent / 100);
			var myY = diffY * (mouseYPercent / 100);

			var cssObj = {
				'left': myX + 'px',
				'top': myY + 'px'
			}

			$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});
		});	
	});
});

$(window).on("resize orientationchange", function() {

	updateViewport();

});