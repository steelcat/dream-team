// Блок загрузки картинок block-upload
(function ($){
	var app = {
		initialize: function () {
			this.setListners();
		},
		setListners: function () {
			$('.block-upload__input-main, .block-upload__input-watermark').on('click', app.fileUploadFunc);
		},
		fileUploadFunc: function () {
			var input = $(this);
			if(input.hasClass('block-upload__input-main')){
				// Значит это
				// Исходное изображение
				input.fileupload({
					dataType: 'json',
					done: function (e, data) {
						$('.block-upload__input-main-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
						$('.block-result__original').css( 'background-image', 'url(files/' + (data.files[0].name) + ')' );
					}
				});
			} else {
				// Иначе это
				// Водяной знак
				input.fileupload({
					dataType: 'json',
					done: function (e, data) {
						$('.block-upload__input-watermark-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
						$('.block-result__watermark').css( 'background-image', 'url(files/' + (data.files[0].name) + ')' );
					}
				});
			};
		},
	};
	app.initialize();
})(jQuery);