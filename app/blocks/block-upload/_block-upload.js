// Блок загрузки картинок block-upload
(function ($){
	// Исходное изображение
	$('.block-upload__input-main').fileupload({
		dataType: 'json',
		done: function (e, data) {
			$('.block-upload__input-main-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
		}
	});
	// Водяной знак
	$('.block-upload__input-watermark').fileupload({
		dataType: 'json',
		done: function (e, data) {
			$('.block-upload__input-watermark-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
		}
	});
})(jQuery);