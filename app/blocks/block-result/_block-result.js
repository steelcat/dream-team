// Блок показа картинок block-result

var blockResult = {
	dragWatermark: function () {
		$('.block-result__watermark-image').draggable({ containment: ".block-result__watermark", scroll: false });
	},
	setPos: function () {
		var watermarkImage = document.getElementById('watermark-image'),
			x = watermarkImage.offsetLeft,
			y = watermarkImage.offsetTop;
		blocksLibrary.setValue(x,y);
	}
};