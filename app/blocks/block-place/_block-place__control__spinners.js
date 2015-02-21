// block-place__control

(function() {

	var app = {
		// Инициализация
		timeout: 0,
		//TODO подумать, как менять при перезагрузки ватермарка
		changed: true,//изначально false,а если загружен другой watermark -- true

		width: 0,
		height: 0,

		initialize : function () {
			console.log('Подключен контроль блока переключения положений.');
			app.listen(); //Слушаем
		},

		listen: function(){
			console.log('Прослушка place__control__spinners запущена');
			$(".up-button").on('mousedown', { asx: "up" }, app.setPos);
			$(".down-button").on('mousedown', { asx: "down" }, app.setPos);
			$(document).on('mouseup', app.setPosStop);
			if(app.changed){//проверка на новые картинки
				app.getImageParam();//Получаем размеры картинки
				app.getMaxMinPos();//Получаем лимиты для перемещения watermark`a
			}
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
					$(".block-result__watermark img").css("top", value + "px");
				} else {
					if(value>app.maxWidth){value = app.maxWidth;}
					$(".block-result__watermark img").css("left", value + "px");
				}
				patch.attr("value",value);//Присваиваем значение в клетках
			}, 10);//TODO уменьшить скорость смены позиции.
		},
		setPosStop: function(){
			clearInterval(app.timeout);
		},
		getImageParam: function(){
			app.width = $(".block-result__watermark img").width();
			app.height = $(".block-result__watermark img").height();
		},
		getMaxMinPos: function(){
			app.maxWidth = 651 - app.width;
			app.maxHeight = 534 - app.height;
		}

	};

  app.initialize();

}());