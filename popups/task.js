let id_modal_main = document.querySelector('#modal_main');
let cl_show_success = document.querySelector('.show-success');
let id_modal_success = document.querySelector('#modal_success');


id_modal_main.className = 'modal modal_active';


cl_show_success.onclick = function () {
	id_modal_main.className = 'modal'
	id_modal_success.className = 'modal modal_active';
}

id_modal_main.onclick = function () {
	id_modal_main.className = 'modal'
}

id_modal_success.onclick = function () {
	id_modal_success.className = 'modal';
	id_modal_main.className = 'modal';
}