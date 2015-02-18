// Блок загрузки картинок block-upload
(function ($){
	var app = {
		initialize: function () {
			this.setListners();
			this.ModalSizeError();
		},
		setListners: function () {
			$('.block-upload__input-main, .block-upload__input-watermark').on('click', app.fileUploadFunc);
		},
		ModalSizeError: function() {
			$('.block-upload-size-error').dialog({
				autoOpen: false,
				modal: true,
				buttons: {
					Ok: function() {
						$( this ).dialog( "закрыть" );
					}
				}
			});
		},
		fileUploadFunc: function () {
			var input = $(this);
			if(input.hasClass('block-upload__input-main')){
				// Значит это
				// Исходное изображение
				input.fileupload({
					dataType: 'json',
					done: function (e, data) {
						console.log(data.result.files[0]);
						if (data.result.files[0].error) {
							console.log('Размер картинки больше 3 Мб')
						}
						$('.block-upload__input-main-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
						$('.block-result__original').css( 'background-image', 'url(files/' + (data.result.files[0].url) + ')' );
					}
				});
			} else {
				// Иначе это
				// Водяной знак
				input.fileupload({
					dataType: 'json',
					done: function (e, data) {
						console.log(data.result.files[0]);
						if (data.result.files[0].error) {
							console.log('Размер картинки больше 3 Мб')
						}
						$('.block-upload__input-watermark-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
						$('.block-result__watermark').html('<img src="files/' + (data.result.files[0].url) + '">');
					}
				});
			};
		}
	};
	app.initialize();
})(jQuery);