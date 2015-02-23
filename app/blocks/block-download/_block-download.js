// Блок выгрузки картинок и сброса параметров block-download
$('.block-download__button-submit').click(function(){
    console.log('Кнопка Скачать нажата');
	var originalImage = document.getElementById('original-image');
	var watermarkImage = document.getElementById('watermark-image');
	var originalImagePath = originalImage.src;
	console.log('original path = ' + originalImagePath);
	var watermarkImagePath =  watermarkImage.src;
	console.log('watermark path = ' + watermarkImagePath);
	var x = watermarkImage.offsetLeft;
	var y = watermarkImage.offsetTop;
	$.ajax({
			type: 'GET', //тип запроса
			url: "php/create.php", //адрес скрипта
			data: {
				original: originalImagePath,
				watermark: watermarkImagePath,
				x: x,
				y: y
			}, //данные
			success: function(){
				location.replace('php/download.php');
			},
			error: function(textStatus){
				console.log(textStatus);
			}
		}
	);
});