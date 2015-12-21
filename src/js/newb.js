/**
 * Created by cfiloteo on 12/20/15.
 */
// DOM ready function
function domReady(f){/in/.test(document.readyState)?setTimeout(`domReady(${f})`,9):f()}
domReady(()=>{ console.log('DOM is ready.') });

/* Alerts */
domReady(()=>{
	Array.prototype.map.call(document.getElementsByClassName('alert dismissable'), elem => {
		let closeBtn = document.createElement('span'),
				closeBtnStyle = elem.classList.contains('solid') ? 'fa-times' : 'fa-times-circle';
		closeBtn.setAttribute('aria-label', 'Close alert');
		closeBtn.setAttribute('role', 'button');
		closeBtn.classList.add('close' ,'fa', closeBtnStyle, 'fa-lg');

		closeBtn.addEventListener('click', () => {
			elem.classList.add('hide');
			setTimeout(() => { elem.parentElement.removeChild(elem) }, 500); //.5s transition
		});
		elem.appendChild(closeBtn);
	});
});
