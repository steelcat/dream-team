// Блок социальных закладок block-share
(function ($){
	var app = {
		initialize: function () {
			app.setListners();
		},
		setListners: function () {
			$('.social-btns__toggler').on('click', app.toggleShareBox);
			$('.block-share__social-btns__btn__link').on('click', app.sharePage);
		},
		toggleShareBox: function () {
			$('.block-share__social-btns').stop(true, true).animate({width: 'toggle'}); // Показывает-скрывает кнопки
		},
		sharePage: function (e) {
			var link = $(this),
				win = window,
				title = $(document).prop('title'),
				desc = $('meta[name="description"]').attr('content'),
				url = win.location.href;
			// TODO: Здесь стоит применить switch
			if(link.hasClass('fb')){
				win.open( 'https://www.facebook.com/sharer/sharer.php?url=' + url, 'facebook', 'width=640, height=200');
			}
			if(link.hasClass('vk')){
				win.open( 'https://vk.com/share.php?url=' + url + '&title=' + title + '&description=' + desc, 'vkontakte', 'width=640, height=480' );
			}
			if(link.hasClass('tw')){
				win.open( 'https://twitter.com/intent/tweet?status=' + title + ' - ' + url, 'twitter', 'width=640, height=260' );
			}
			e.preventDefault();
		}
	};
	app.initialize();
})(jQuery);