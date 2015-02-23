(function() {
	// Подключаем прослушку для всех блоков
	(function () {
		$('.block-upload__input-original').on('click', blockUpload.fileUploadOriginal);
		$('.block-upload__input-watermark').on('click', blockUpload.fileUploadWatermark);
	})();
})();