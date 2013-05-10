$(function() {
	
	$(".tree li").each(function() {
		var handleSpan = $("<span></span>");
		handleSpan.addClass("handle");
		handleSpan.prependTo(this);
		
		if ($(this).has("ul").size() > 0) {
			handleSpan.addClass("collapsed");
			handleSpan.click(function() {
				var clicked = $(this);
				clicked.toggleClass("collapsed expanded");
				clicked.siblings("ul").toggle();
			});			
		}		
	});
});
