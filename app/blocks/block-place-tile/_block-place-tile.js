// Блок "Замостить
(function($){
	var app = {
		initialize: function () {
			$('.block-place__tile').buttonset();				// jQuery Ui Button Set
			this.setListners();
		},
		setListners: function () {
			$('.block-place__tile__tiled__btn, .block-place__tile__untiled__btn').on('click', app.tileMark);
		},
		tileMark: function () {
			var watermark = $('#watermark-image-container'),	// Блок вотермарка
				watermarkImg = $('#watermark-image'),			// Вотермарк
				watermarkImgSrc = watermarkImg.attr('src'),		// Путь к вотермарку
				watermarkWidth = watermarkImg.width(),			// Ширина вотермарка
				watermarkHeight = watermarkImg.height(),		// Высота вотермарка
				resultWidth = 651,								// Ширина блока с результатом 
				resultHeight = 534;								// Высота блока с результатом 

			if( !$(this).hasClass('active-btn') ){
				// Если кнопка "Замостить" -----------
				if ( $(this).hasClass('block-place__tile__tiled__btn') ){

					$(this).addClass('active-btn').siblings('label').removeClass('active-btn');

					console.log('Замостить нажата!');
					watermark.draggable('destroy');
					watermark.draggable({ containment: 'body', scroll: false })
					var columns = Math.ceil(resultWidth / watermarkWidth),		// Кол-во колонок в сетке
						rows = Math.ceil(resultHeight / watermarkHeight),		// Кол-во рядов в сетке
						cells = columns * rows;									// Кол-во клеток в сетке

					console.log(columns + ' колонок');
					console.log(rows + ' рядов');
					console.log(cells + ' клеток');

					watermark.addClass('watermark-tiled').width(columns * watermarkWidth);

					var store = [],			// Хранилище для кучи картинок
					watermarkHtml = $(watermark).html();

					for ( var i = 0; i < (cells - 1); i++ ){
						store.push([watermarkHtml]);	// Пихаем в хранилище кучу вотермарков
					};
					watermark.append(store.join(''));	// Добавляем разом
				}

				// Если кнопка "Незамостить" -----------
				if ( $(this).hasClass('block-place__tile__untiled__btn') ){
					$(this).addClass('active-btn').siblings('label').removeClass('active-btn');
					
					watermark.draggable('destroy');
					watermark.draggable({ containment: '.block-result__original', scroll: false })
					watermark.html('').append(watermarkImg);	// Оставляем только 1
					watermark.addClass('watermark-tiled').width(watermarkWidth);
				};

		}
	}
};

app.initialize();

})(jQuery);