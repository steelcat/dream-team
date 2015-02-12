;(function ($){
	// File-upload
	$('.file-upload').fileupload({
		dataType: 'json',
		done: function (e, data) {
			$.each(data.result.files, function (index, file) {
				$('.file-upload-imitation').text(file.name).appendTo('.file-name');
			});
		}
	});
})(jQuery);