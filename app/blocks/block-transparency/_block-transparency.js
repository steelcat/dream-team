// block-transparency

(function() {    

  var app = {

    // Инициализация
    initialize : function () {
    	app.makeSlider();      
    },

    makeSlider : function(){
    	
      //настраиваем слайдер
		  $(".block-transparency__slider").slider({
        max: 1, //максимальное значение
        min: 0.01, //минимальное значение
        step: 0.01, //шаг изменения значения
        
        // изменяет значение opacity при движении ползунка
        slide: function(event, ui) {
           var value = $(".block-transparency__slider").slider( "option", "value" );//получаем текущее значение
           $('.block-result__watermark').css({opacity: value}); //устанавливаем свойство элемента
           $(".block-transparency__slider__round").removeClass("ui-state-focus ui-state-active ui-state-hover");
        },

        // изменяет значение opacity при отпускании ползунка
        change: function(event, ui) {          
          var value = $(".block-transparency__slider").slider( "option", "value" );//получаем текущее значение
          $('.block-result__watermark').css({opacity: value});//устанавливаем свойство элемента
        }
      });

      $(".block-transparency__slider").slider( "option", "value", 0.5 );

      $("#slider").slider( "option", "value", 0.5 );
     
    }

  }

  app.initialize();

}());