var blocksLibrary = {
	setValue: function setValue(x,y) {
		$('#x-value').attr('value', x);
		$('#y-value').attr('value', y);
	},
	reset: function reset() {
		$('.block-result__original').css('left', 0);
		$('.block-result__original').css('top', 0);
		$('.block-result__watermark').css('left', 0);
		$('.block-result__watermark').css('top', 0);
		blocksLibrary.setValue(0,0);
		$(".block-transparency__slider").slider( "option", "value", 0.5 );
	}
};