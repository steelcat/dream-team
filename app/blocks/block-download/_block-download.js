// Блок выгрузки картинок и сброса параметров block-download
var blockDownload = {
	init: function() {
		var originalImage = document.getElementById('original-image');
		var watermarkImage = document.getElementById('watermark-image');
		var originalImagePath = originalImage.src;
		console.log('original path = ' + originalImagePath);
		var watermarkImagePath =  watermarkImage.src;
		console.log('watermark path = ' + watermarkImagePath);
		var x = watermarkImage.offsetLeft;
		var y = watermarkImage.offsetTop;
		var opacity = $(".block-result__watermark").css("opacity");
		console.log('opacity = ' + opacity);
		$.ajax({
				type: 'GET', //тип запроса
				url: "php/create.php", //адрес скрипта
				data: {
					original: originalImagePath,
					watermark: watermarkImagePath,
					x: x,
					y: y,
					opacity: opacity
				}, //данные
				success: function(){
					location.replace('php/download.php');
				},
				error: function(textStatus){
					console.log(textStatus);
				}
		});
	}
};