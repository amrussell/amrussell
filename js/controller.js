$(function() {
	$.get("navbar.mst",function(template) {
		var subs = {
			"brand": "Garager",
			"navbuttons": [
				{"btnName":"Browse"},
				{"btnName":"Sign In"}
			]
		};
		var rendered = Mustache.render(template,subs);
		$("#navbar").html(rendered);
	});

	
});
