let idModalMain = document.querySelector('#modal_main');
let clShowSuccess = document.querySelector('.show-success');
let idModalSuccess = document.querySelector('#modal_success');


idModalMain.className = 'modal modal_active';


clShowSuccess.onclick = function () {
	idModalMain.className = 'modal'
	idModalSuccess.className = 'modal modal_active';
}

idModalMain.onclick = function () {
	idModalMain.className = 'modal'
}

idModalSuccess.onclick = function () {
	idModalSuccess.className = 'modal';
	idModalMain.className = 'modal';
}