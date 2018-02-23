;(function () {
	var modalCallOpen 	= document.querySelector('.where__courier-modal-open'),
			modalCallWindow = document.querySelector('.modal-call'),
			modalCallClose  = document.querySelector('.modal-call__close');
	
	modalCallOpen.addEventListener('click', function (evt) {
		evt.preventDefault();
		if (modalCallWindow.classList.contains('modal-call--closed')) {
			modalCallWindow.classList.remove('modal-call--closed');
		}
		console.log('click');
	});

	modalCallClose.addEventListener('click', function (evt) {
		evt.preventDefault();
		modalCallWindow.classList.add('modal-call--closed');
	});
})();