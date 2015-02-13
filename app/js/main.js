;(function ($){
	// File-upload
	$('.block-upload__input').fileupload({
		dataType: 'json',
		done: function (e, data) {
			$('.file-upload-imitation').text(data.files[0].name);
			console.log(data.files);
		}
	});
})(jQuery);