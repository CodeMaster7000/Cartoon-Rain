rainDrop(50, randomInt(0, 200));
rain(150, 150);
function rain(num, speed) {
		if (num > 0) {
			setTimeout(function () {
				$('#drop_' + randomInt(1, 250)).addClass('animate');
				num--;
				rain(num, speed);
			}, speed);
		}
	};
	function rainDrop(num, position) {
		if (num > 0) {
			var drop = '<div class="drop rain" id="drop_' + num + '"></div>';
			$('.cloud').append(drop);
			$('#drop_' + num).css('left', position);
			num--;
			rainDrop(num, randomInt(0, 200));
		}
	};
function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
