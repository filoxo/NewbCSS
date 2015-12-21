'use strict';

/**
 * Created by cfiloteo on 12/20/15.
 */
// DOM ready function
function domReady(f) {
	/in/.test(document.readyState) ? setTimeout('domReady(' + f + ')', 9) : f();
}
domReady(function () {
	console.log('DOM is ready.');
});

/* Alerts */
domReady(function () {
	Array.prototype.map.call(document.getElementsByClassName('alert dismissable'), function (elem) {
		var closeBtn = document.createElement('span'),
		    closeBtnStyle = elem.classList.contains('solid') ? 'fa-times' : 'fa-times-circle';
		closeBtn.setAttribute('aria-label', 'Close alert');
		closeBtn.setAttribute('role', 'button');
		closeBtn.classList.add('close', 'fa', closeBtnStyle, 'fa-lg');

		closeBtn.addEventListener('click', function () {
			elem.classList.add('hide');
			setTimeout(function () {
				elem.parentElement.removeChild(elem);
			}, 500); //.5s transition
		});
		elem.appendChild(closeBtn);
	});
});