// Блок показа картинок block-result

var blockResult = {
	dragWatermark: function () {
		$('.block-result__watermark').draggable({ containment: ".block-result__original", scroll: false });
	},
	setPos: function () {
		var watermarkImage = document.getElementById('watermark-image-container'),
			x = watermarkImage.offsetLeft,
			y = watermarkImage.offsetTop;
		blocksLibrary.setValue(x,y);
	}
};