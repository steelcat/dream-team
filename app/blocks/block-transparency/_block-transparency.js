// block-transparency

(function() {    

  var app = {

    // Инициализация
    initialize : function () {
    	app.makeSlider();
      app.makeOnListners();  	
    },

    makeOnListners : function(){
      $('.block-transparency__slider__round').on('mouseover', app.onMouseOverSlider);
    },

    onMouseOverSlider : function(){
      $(".block-transparency__slider__round").removeClass("ui-state-focus ui-state-active ui-state-hover");
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
      
      //устанавливаем свойство элемента 0,9 после загрузки старницы
<<<<<<< HEAD
      $(".block-transparency__slider").slider( "option", "value", 0.9 );
=======
      $("#slider").slider( "option", "value", 0.9 );

      //удаляем классы используемые jquery с направляющей ползунка
      $("#slider").removeClass("ui-slider-horizontal ui-widget ui-widget-content ui-corner-all")

      //добавлем свой класс для этого элемента
      $("#slider").addClass("block-transparency__slider__line");

      //добавляем свой класс для ползунка
      $(".ui-slider-handle").addClass("block-transparency__slider__round");

      //удаляем с ползунка классы jquery
      $(".ui-slider-handle").removeClass("ui-slider-handle ui-state-default ui-corner-all");
>>>>>>> feature/block-transparency-js
    }

  }

  app.initialize();

}());