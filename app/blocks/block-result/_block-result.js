// Блок показа картинок block-result

(function ($){
	var app = {
		initialize: function () {
			this.dragWatermark();
			this.setListners();
		},
		setListners: function () {
			$( '.block-result__watermark-image' ).on( "drag", app.setPos );
		},
		dragWatermark: function () {
			$('.block-result__watermark-image').draggable({ containment: ".block-result__watermark", scroll: false });
		},
		setPos: function () {
			var watermarkImage = document.getElementById('watermark-image');
			var x = watermarkImage.offsetLeft;
			var y = watermarkImage.offsetTop;
			blocksLibrary.setValue(x,y);
		}
	};
	app.initialize();
})(jQuery);