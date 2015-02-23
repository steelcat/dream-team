// Блок выгрузки картинок и сброса параметров block-download
$('.block-download__button-submit').click(function(){
    console.log('Кнопка Скачать нажата');
	var originalImage = document.getElementById('watermark-image');
	var watermarkImage = document.getElementById('watermark-image');
	console.log(originalImage.url);
	//var originalImagePath =
	var x = watermarkImage.offsetLeft;
	var y = watermarkImage.offsetTop;
	$.ajax({
			type: 'GET', //тип запроса
			url: "php/create.php", //адрес скрипта
			data: {
				x: x,
				y: y
			}, //данные
			success: function(){
				location.replace('php/download.php');
				//open('php/download.php');
			},
			error: function(textStatus){
				console.log(textStatus);
			}
		}
	);
});