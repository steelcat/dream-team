// Блок положения картинок block-place

(function() {

	var app = {
		// Инициализация
		timeout: 0,
		//TODO подумать, как менять при перезагрузке ватермарка
		changed: true,//изначально false,а если загружен другой watermark -- true

		width: 0,
		height: 0,

		initialize : function () {
			console.log('Подключен контроль блока переключения положений.');
			app.gridControl(); // Подключаем сетку в квадрате
			app.listen(); //Слушаем события блока
		},
		listen: function(){
			console.log('Прослушка place__control__spinners запущена');
			$( ".block-place__control__buttonset" ).on( "selectableselected", app.setGridPos);
			$(".up-button").on('mousedown', { asx: "up" }, app.setPos);
			$(".down-button").on('mousedown', { asx: "down" }, app.setPos);
			$(document).on('mouseup', app.setPosStop);
			if(app.changed){//проверка на новые картинки
				app.getImageParam();//Получаем размеры картинки
				app.getMaxMinPos();//Получаем лимиты для перемещения watermark`a
			}
		},
		gridControl: function(event) {
			$(".block-place__control__buttonset").selectable({
				stop: function(e, ui) {
					$(".ui-selected:first", this).each(function() {
						$(this).siblings().removeClass("ui-selected");
					});
				}
			})
		},
		setGridPos: function (event,ui) {
			console.log('Выбран квадрат сетки положения = '+ ui.selected.id);
			switch (ui.selected.id) {
				case 'top-left': x = 0; y = 0; break;
				case 'top': x = 0; y = Math.round(app.maxWidth/2); break;
				case 'top-right':  x = 0; y = app.maxWidth; break;

				case 'center-left': x = Math.round(app.maxHeight/2); y = 0; break;
				case 'center': x = Math.round(app.maxHeight/2); y = Math.round(app.maxWidth/2); break;
				case 'center-right': x = Math.round(app.maxHeight/2); y = app.maxWidth; break;

				case 'bottom-left': x = app.maxHeight; y = 0; break;
				case 'bottom': x = app.maxHeight; y = Math.round(app.maxWidth/2); break;
				case 'bottom-right': x = app.maxHeight; y = app.maxWidth; break;
				default: break
			}
			$(".block-result__watermark-image").css("top", x + "px").css("left", y + "px");
			blocksLibrary.setValue(x,y);
		},
		setPos: function(event){
			var _this = this;
			app.timeout = setInterval(function(){
				var patch = $(_this).parent().parent().find(".block-place__control__spinners-item-txt");
				var value = patch.attr("value");
				if(event.data.asx==='up'){value++;} else {value--;}
				if(value<0){value = 0;}

				var asix = patch.attr("name"); //Узнаем ось

				if(asix === "y-value") {
					if(value>app.maxHeight){value = app.maxHeight;}
					$(".block-result__watermark-image").css("top", value + "px");
				} else {
					if(value>app.maxWidth){value = app.maxWidth;}
					$(".block-result__watermark-image").css("left", value + "px");
				}
				patch.attr("value",value);//Присваиваем значение в клетках
			}, 10);//TODO уменьшить скорость смены позиции.
		},
		setPosStop: function(){
			clearInterval(app.timeout);
		},
		getImageParam: function(){
			app.width = $(".block-result__watermark-image").width();
			app.height = $(".block-result__watermark-image").height();
		},
		getMaxMinPos: function(){
			app.maxWidth = 651 - app.width;
			app.maxHeight = 534 - app.height;
		}

	};

	app.initialize();

}());