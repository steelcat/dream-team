// Блок выгрузки картинок и сброса параметров block-download
var blockDownload = {
	init: function() {
		var originalImage = document.getElementById('original-image');
		var watermarkImage = document.getElementById('watermark-image');
		var originalImagePath = originalImage.src;
		var watermarkImagePath =  watermarkImage.src;
		var x = $(".block-result__watermark").css("left");
		var y = $(".block-result__watermark").css("top");
		var opacity = $(".block-result__watermark").css("opacity");
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