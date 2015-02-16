// Блок выгрузки картинок и сброса параметров block-download
$('.block-download__button-submit').click(function(){
    console.log('Кнопка Скачать нажата');
    $.get('php/download.php');
});