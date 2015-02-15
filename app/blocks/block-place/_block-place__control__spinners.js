// block-place__control

(function() {

	var app = {
		// Инициализация
		timeout: 0,
		initialize : function () {
			console.log('Подключен контроль блока переключения положений.');
			app.listen(); //Слушаем
		},

		listen: function(){
			console.log('Прослушка place__control__spinners запущена');
			$(".up-button").on('mousedown', { asx: "up" }, app.setPos);
			$(".down-button").on('mousedown', { asx: "down" }, app.setPos);
			$(document).on('mouseup', app.setPosStop);
		},

		setPos: function(event){
			var _this = this;
			app.timeout = setInterval(function(){
				var patch = $(_this).parent().parent().find(".block-place__control__spinners-item-txt");
				var value = patch.attr("value");
				if(event.data.asx==='up'){value++;} else {value--;}
				if(value<0){value = 0;} else if(value>300){value = 300;}//TODO продумать лимиты по горизонтали и вертикали, сейчас 300 и там и там
				patch.attr("value",value);
				var asix = patch.attr("name"); //Узнаем в какой ветке находимся
				if(asix === "y-value") {
					$(".block-result__watermark img").css("top", value + "px");
				} else {
					$(".block-result__watermark img").css("left", value + "px");
				}
			}, 50)
		},
		setPosStop: function(){
			clearInterval(app.timeout);
		}

	};

  app.initialize();

}());