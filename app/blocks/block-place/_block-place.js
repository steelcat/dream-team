// Блок положения картинок block-place

var blockPlace = {
	// Инициализация
	timeout: 0,
	width: 0,
	height: 0,

	init : function () {
		blockPlace.getImageParam();//Получаем размеры картинки
		blockPlace.getMaxMinPos();//Получаем лимиты для перемещения watermark`a
		blockPlace.gridControl(); // Подключаем сетку в квадрате
		blockPlace.listen(); //Слушаем события блока
	},
	listen: function(){
		$( ".block-place__control__buttonset" ).on( "selectableselected", blockPlace.setGridPos);
		$(".up-button").on('mousedown', { asx: "up" }, blockPlace.setPos);
		$(".down-button").on('mousedown', { asx: "down" }, blockPlace.setPos);
		$(document).on('mouseup', blockPlace.setPosStop);
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
		var xPosition = parseInt($(".block-result__watermark").css("left").replace("px",""));
		var yPosition = parseInt($(".block-result__watermark").css("top").replace("px",""));
		var _this = this;
		console.log(xPosition);
		blockPlace.timeout = setInterval(function() {
			var xyButtons = $(_this).parent().attr('id');
			var change = 0;
			console.log(event.data.asx);
			if (event.data.asx==='up') {
				change = 1;
			} else {
				change = -1;
			}
			console.log(xyButtons);
			if (xyButtons==='x-buttons') {
				xPosition = xPosition + change;
			}
			if (xyButtons==='y-buttons') {
				yPosition = yPosition + change;
			}
			console.log(xPosition);
			if (xPosition>blockPlace.maxWidth) { xPosition = blockPlace.maxWidth};
			if (yPosition>blockPlace.maxHeight) { yPosition = blockPlace.maxHeight};
			$(".block-result__watermark").css("left", xPosition+"px");
			$(".block-result__watermark").css("top", yPosition+"px");
			blocksLibrary.setValue(xPosition,yPosition);
		}, 50);
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