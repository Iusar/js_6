let nextButt = document.querySelector(".slider__arrow_next");
let prevButt = document.querySelector(".slider__arrow_prev");
const itemsList =(document.getElementsByClassName("slider__item"))

nextButt.addEventListener('click', () => {
	changeActiveItem(1)
});

prevButt.addEventListener('click', () => {
	changeActiveItem(-1)
});


function changeActiveItem(direction) {
	for (let item = 0; itemsList.length >= item; item++) {
		if (itemsList[item].className == "slider__item slider__item_active") {
			console.log(itemsList[item].className, item, newIndex(itemsList.length, item, direction))
			itemsList[newIndex(itemsList.length - 1, item, direction)].className = "slider__item slider__item_active"
			itemsList[item].className = "slider__item"
			break
		}
	}
}


function newIndex (maxIndex, oldIndex, direction)  {
	if (oldIndex === maxIndex &&  direction === 1) {return 0}
	else if(oldIndex === 0 && direction === -1) {return maxIndex}
	else {return oldIndex + direction}
}
