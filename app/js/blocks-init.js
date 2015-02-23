(function() {
	// Подключаем прослушку для всех блоков
	(function () {
		blockResult.dragWatermark(); // Инициализируем перетаскивание водяного знака
		$('.block-upload__input-original').on('click', blockUpload.fileUploadOriginal); // Слушаем кнопку загрузки оригнала
		$('.block-upload__input-watermark').on('click', blockUpload.fileUploadWatermark); // Слушаем кнопку загрузки водяного знака
		$('.block-download__button-submit').on('click', blockDownload.init); // Слушаем кнопку скаичвания итоговой картинки
		$( '.block-result__watermark-image' ).on( 'drag', blockResult.setPos ); // Слушаем событие перетаскивания водяного знака
	})();
})();