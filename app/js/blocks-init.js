// Подключаем методы и прослушку для всех блоков
$(document).ready(function() {
	blockResult.dragWatermark(); // Инициализируем перетаскивание водяного знака
	blockTransparency.makeSlider(); // Инициализируем слайдер прозрачности
	blockPlace.init();
	blockPlace.gridControl(); // Подключаем сетку в квадрате
	blockPlace.listen(); //Слушаем события блока
	$('.block-upload__input-original').on('click', blockUpload.fileUploadOriginal); // Слушаем кнопку загрузки оригнала
	$('.block-upload__input-watermark').on('click', blockUpload.fileUploadWatermark); // Слушаем кнопку загрузки водяного знака
	$('.block-download__button-reset').on('click', blocksLibrary.reset); // Слушаем кнопку сброса параметров наложения водяого знака
	$('.block-download__button-submit').on('click', blockDownload.init); // Слушаем кнопку скаичвания итоговой картинки
	$( '.block-result__watermark' ).on( 'drag', blockResult.setPos ); // Слушаем событие перетаскивания водяного знака
});