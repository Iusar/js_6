const menuItems = Array.from(document.querySelectorAll('.menu__link'));

menuItems.forEach(currentItem => {
	currentItem.onclick = function () {
		const parentMenu = currentItem.parentElement;

		if (parentMenu.querySelector('.menu_sub') === null) {
			return true
		}
		if (parentMenu.querySelector('.menu_sub').className === 'menu menu_sub') {
			parentMenu.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parentMenu.querySelector('.menu_sub').className = 'menu menu_sub'
		}
		if (parentMenu.closest('.menu_main')) {
			return false
		}
	}
});


