// Блок показа картинок block-result
(function ($){
	var app = {
		initialize: function () {
			this.setListners();
			this.dragWatermark();
		},
		setListners: function () {

		},
		dragWatermark: function () {
			$('.block-result__watermark-image').draggable({ containment: ".block-result__watermark", scroll: false });
		}
	};
	app.initialize();
})(jQuery);