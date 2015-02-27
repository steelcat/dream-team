// Блок положения картинок block-place

var blockPlace = {
	// Инициализация
	timeout: 0,
	//TODO подумать, как менять при перезагрузке ватермарка
	changed: true,//изначально false,а если загружен другой watermark -- true

	width: 0,
	height: 0,

	init : function () {
		console.log('Подключен контроль блока переключения положений.');
		blockPlace.gridControl(); // Подключаем сетку в квадрате
		blockPlace.listen(); //Слушаем события блока
	},
	listen: function(){
		console.log('Прослушка place__control__spinners запущена');
		$( ".block-place__control__buttonset" ).on( "selectableselected", blockPlace.setGridPos);
		$(".up-button").on('mousedown', { asx: "up" }, blockPlace.setPos);
		$(".down-button").on('mousedown', { asx: "down" }, blockPlace.setPos);
		$(document).on('mouseup', blockPlace.setPosStop);
		if(blockPlace.changed){//проверка на новые картинки
			blockPlace.getImageParam();//Получаем размеры картинки
			blockPlace.getMaxMinPos();//Получаем лимиты для перемещения watermark`a
		}
	},
	gridControl: function(event) {
		$(".block-place__control__buttonset").selectable({
			stop: function(e, ui) {
				$(".ui-selected:first", this).each(function() {
					$(this).siblings().removeClass("ui-selected");
				});
			}
		});
	},
	setGridPos: function (event,ui) {
		console.log('Выбран квадрат сетки положения = '+ ui.selected.id);
		switch (ui.selected.id) {
			case 'top-left': x = 0; y = 0; break;
			case 'top': x = 0; y = Math.round(blockPlace.maxWidth/2); break;
			case 'top-right':  x = 0; y = blockPlace.maxWidth; break;

			case 'center-left': x = Math.round(blockPlace.maxHeight/2); y = 0; break;
			case 'center': x = Math.round(blockPlace.maxHeight/2); y = Math.round(blockPlace.maxWidth/2); break;
			case 'center-right': x = Math.round(blockPlace.maxHeight/2); y = blockPlace.maxWidth; break;

			case 'bottom-left': x = blockPlace.maxHeight; y = 0; break;
			case 'bottom': x = blockPlace.maxHeight; y = Math.round(blockPlace.maxWidth/2); break;
			case 'bottom-right': x = blockPlace.maxHeight; y = blockPlace.maxWidth; break;
			default: break;
		}
		$(".block-result__watermark").css("top", x + "px").css("left", y + "px");
		blocksLibrary.setValue(x,y);
	},
	setPos: function(event){
		var _this = this;
		blockPlace.timeout = setInterval(function(){
			var patch = $(_this).parent().parent().find(".block-place__control__spinners-item-txt");
			var value = patch.attr("value");
			if(event.data.asx==='up'){value++;} else {value--;}
			if(value<0){value = 0;}

			var asix = patch.attr("name"); //Узнаем ось

			if(asix === "y-value") {
				if(value>blockPlace.maxHeight){value = blockPlace.maxHeight;}
				$(".block-result__watermark").css("top", value + "px");
			} else {
				if(value>blockPlace.maxWidth){value = blockPlace.maxWidth;}
				$(".block-result__watermark").css("left", value + "px");
			}
			patch.attr("value",value);//Присваиваем значение в клетках
		}, 10);//TODO уменьшить скорость смены позиции.
	},
	setPosStop: function(){
		clearInterval(blockPlace.timeout);
	},
	getImageParam: function(){
		blockPlace.width = $(".block-result__watermark-image").width();
		blockPlace.height = $(".block-result__watermark-image").height();
	},
	getMaxMinPos: function(){
		blockPlace.maxWidth = 651 - blockPlace.width;
		blockPlace.maxHeight = 534 - blockPlace.height;
	}
};