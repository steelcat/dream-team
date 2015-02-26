// Блок загрузки картинок block-upload

var blockUpload = {
	ModalSizeError: function() { //TODO Сделать вывод ошибок в виде всплыыающих подсказок, отказаться от модальных окон
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
	fileUploadOriginal: function () { // Загрузка оригинальной картинки
		var input = $(this);
		// Значит это
		// Исходное изображение
		input.fileupload({
			dataType: 'json',
			done: function (e, data) {
				var img = new Image();
				img.src = 'files/' + (data.result.files[0].url);
				console.log(data.result.files[0]);
				if (data.result.files[0].error) {
					console.log(data.result.files[0].error);
				}//TODO При большой длине названия файла оно может вылезти за пределы блока, сделать ограничение длины названия
				$('.block-upload__input-original-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
				$('.block-result__original').html('<img id="original-image" class="block-result__original-image" src="files/' + (data.result.files[0].url) + '">');
				$('.block-result__original').css('background', 'none');
				img.onload = function() {
					$('.block-result__original').css('height', img.height);
					$('.block-result__original').css('width', img.width);
				}
			}
		});
	},
	fileUploadWatermark: function () { // Загрузка водяного знака
		var input = $(this);
		input.fileupload({
			dataType: 'json',
			done: function (e, data) {
				var img = new Image();
				img.src = 'files/' + (data.result.files[0].url);
				console.log(data.result.files[0]);
				if (data.result.files[0].error) {
					console.log(data.result.files[0].error);
				}//TODO При большой длине названия файла оно может вылезти за пределы блока, сделать ограничение длины названия
				$('.block-upload__input-watermark-imitation').text(data.files[0].name); // добавит название файла в блок имитирующий input
				$('.block-result__watermark').html('<img id="watermark-image" class="block-result__watermark-image" src="files/' + (data.result.files[0].url) + '">');
				img.onload = function() {
					$('.block-result__watermark').css('height', img.height);
					$('.block-result__watermark').css('width', img.width);
				}
				blockResult.dragWatermark();
			}
		});
	}
};