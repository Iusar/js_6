let nextButt = document.querySelector(".slider__arrow_next");
let prevButt = document.querySelector(".slider__arrow_prev");
const itemsList =document.getElementsByClassName("slider__item")

nextButt.addEventListener('click', () => {
	changeActiveItem(1)
});

prevButt.addEventListener('click', () => {
	changeActiveItem(-1)
});


function changeActiveItem(listingDirection) {
	let oldIndex = Array.from(itemsList).findIndex(currentItem => currentItem.className == "slider__item slider__item_active");
	let newIndex = oldIndex + listingDirection;
		newIndex = newIndex > itemsList.length - 1 ? 0 : newIndex;
	    newIndex = newIndex < 0  ? itemsList.length - 1 : newIndex;

	itemsList[newIndex].className = "slider__item slider__item_active"
	itemsList[oldIndex].className = "slider__item"
	}

