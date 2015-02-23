// Блок выгрузки картинок и сброса параметров block-download
$('.block-download__button-submit').click(function(){
    console.log('Кнопка Скачать нажата');
	var watermarkImage = document.getElementById('watermark-image');
	var x = watermarkImage.offsetLeft;
	var y = watermarkImage.offsetTop;
	$.get(
		"php/download.php",
		{
			x: x,
			y: y
		}
	);
	window.open('../files/result.jpg','_blank');
});