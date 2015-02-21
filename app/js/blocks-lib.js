var blocksLibrary = new function () {

	function trim() {

	}

	function find() {

	}

	// функция которая не будет доступна извне, она является внутренней для библиотеки
	function select() {

	}


	// функции которые хотим сделать доступными пользователю
	return {
		trim: trim,
		find: find
	}

};