// Блок показа картинок block-result

var blockResult = {
	dragWatermark: function () {
		$('.block-result__watermark').draggable({ containment: ".block-result__original", scroll: false });
	},
	setPos: function () {
		var watermarkImage = document.getElementById('watermark-image-container'),
			x = watermarkImage.offsetTop,
			y = watermarkImage.offsetLeft;
		blocksLibrary.setValue(x,y);
	}
};