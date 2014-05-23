// jQuery Range Slider plugin, v0.1
// Created by Ilya I
// Licensed under the MIT licence

(function($) {
	$.fn.rangeSlider = function(options) {
		var config = $.extend({
			min: 0,
			max: 100
		}, options || {});
		
		var range = this.find("input[type='range']");
		var number = this.find("input[type='number']");
		
		number.val(range.val());
		
		range.mousemove(function() {
			number.val(range.val());
		});
		
		number.keypress(function(event) {
			var chr = String.fromCharCode(event.which);
			if (!/^\d+$/.test(chr) || Number(number.val() + chr) > config.max) {
				event.preventDefault();
			}
		}).keyup(function() {
			range.val(number.val() || 0);
		}).change(function() {
			range.val(number.val() || 0);
		});
	};
})(jQuery);
