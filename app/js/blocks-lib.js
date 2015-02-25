var blocksLibrary = {
	setValue: function setValue(x,y) {
		$('#x-value').attr('value', x);
		$('#y-value').attr('value', y);
	},
	getImgSize: function getImgSize(imgSrc) {
		var newImg = new Image();
			newImg.onload = function() {
				var height = newImg.height;
				var width = newImg.width;
				console.log('The image size is '+width+'*'+height);
			};
		newImg.src = imgSrc; // this must be done AFTER setting onload
	}
};