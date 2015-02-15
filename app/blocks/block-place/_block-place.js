// Блок положения картинок block-place
$(function() {
    $( ".block-place__control__buttonset" ).selectable({
        stop: function(e, ui) {
            $(".ui-selected:first", this).each(function() {
                $(this).siblings().removeClass("ui-selected");
            });
        }
    });
});