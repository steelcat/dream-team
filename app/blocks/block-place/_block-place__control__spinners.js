// block-place__control

(function() {

	var app = {
		// Инициализация
		initialize : function () {
			console.log('Подключен контроль блока переключения положений.');
			app.listen(); //Слушаем
		},

		listen: function(){
			console.log('Прослушка place__control__spinners запущена');
			$(".up-button").on('click', { asx: "up"}, app.setPos); //TODO реализовать обработку зажатой мыши
			$(".down-button").on('click', { asx: "down" }, app.setPos);
		},

		setPos: function(event){
			var patch = $(this).parent().parent().find(".block-place__control__spinners-item-txt");
			var value = parseInt(patch.attr("value"));
			if(event.data.asx==='up'){value++;} else {value--;}
			if(value<0){value = 0;} else if(value>300){value = 300;}
			patch.attr("value",value);
			var asix = patch.attr("name"); //Узнаем в какой ветке находимся
			if(asix === "y-value") {
				$(".block-result__watermark img").css("top", value + "px");
			} else {
				$(".block-result__watermark img").css("left", value + "px");
			}
		}
	};

  app.initialize();

}());