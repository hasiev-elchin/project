var s_btn = document.querySelector('.s_btn');

jQuery('.sound-button').bind("click", function(event) {
	if (jQuery(this).hasClass('on')) {
		//если данная мелодия уже проигрывается
		//снимаем флаг ON
		jQuery(this).removeClass('on');
		//останавливаем проигрыватель
		jQuery('#my-hidden-player').get(0).pause();
	} else {
		//если данная мелодия не проигрывается в текущий момент
		//выключаем все остальные кнопки
		jQuery('.sound-button').removeClass('on');
		//добавляем класс ON
		jQuery(this).addClass('on');
		var pl = jQuery('#my-hidden-player').get(0);
		//останавливаем текущую мелодию
		pl.pause();
		//устанавливаем новый источник
		pl.src = jQuery(this).attr('data-src');
		//включаем проигрывание
		pl.play();
		$('#my-hidden-player').on('ended', function() {
   			jQuery('.sound-button').removeClass('on');
		});
	}
});
