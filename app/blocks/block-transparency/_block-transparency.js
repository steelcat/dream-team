// block-transparency

(function() {    

  var app = {

    // Инициализация
    initialize : function () {
    	app.makeView();    	  	
    },

    makeView : function(){
    	
      //настраиваем слайдер
		  $(".block-transparency__slider").slider({
        max: 1, //максимальное значение
        min: 0.01, //минимальное значение
        step: 0.01, //шаг изменения значения
        
        // изменяет значение opacity при движении ползунка
        slide: function(event, ui) {
           var value = $(".block-transparency__slider").slider( "option", "value" );//получаем текущее значение
           $('.block-result__watermark').css({opacity: value}); //устанавливаем свойство элемента
        },

        // изменяет значение opacity при отпускании ползунка
        change: function(event, ui) {          
          var value = $(".block-transparency__slider").slider( "option", "value" );//получаем текущее значение
          $('.block-result__watermark').css({opacity: value});//устанавливаем свойство элемента
        }
      });

      //устанавливаем свойство элемента 0,9 после загрузки старницы
      $(".block-transparency__slider").slider( "option", "value", 0.9 );
    }

  }

  app.initialize();

}());