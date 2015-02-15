// Блок загрузки картинок block-upload
;(function ($){
	$('.block-upload__input').fileupload({
		dataType: 'json',
		done: function (e, data) {
			//$('.main-img-upload-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
		}
	});
})(jQuery);