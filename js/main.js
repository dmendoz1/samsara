document.addEventListener('DOMContentLoaded', () => {
	const prevArrow = document.getElementById('prev-arrow');
	const nextArrow = document.getElementById('next-arrow');
	const carousSlide = document.querySelector('.carousel-slide');
	let carousCards = document.querySelectorAll('.carousel-container .card-container');	
	let size = carousCards[0].scrollWidth;
	let lastCardClone = carousSlide.lastElementChild.cloneNode(true);
	let firstCardClone = carousSlide.firstElementChild.cloneNode(true);
	carousSlide.prepend(lastCardClone);
	carousSlide.append(firstCardClone);
	carousSlide.style.transform = 'translateX(-' + (size * 1.77) + 'px)';

	//previous click
	prevArrow.addEventListener('click', () => {
		carousSlide.style.transition = 'transform .2s ease-in-out';
		carousSlide.style.transform = 'translateX(-' + (size - (size/4.3)) + 'px';	
	})

	//next click  
	nextArrow.addEventListener('click', () => {
		carousCards = document.querySelectorAll('.carousel-container .card-container');
		size = carousCards[0].scrollWidth;
		carousSlide.style.transition = 'left .2s ease-in-out';
		carousSlide.style.left = '-' + (size - 10)  + 'px';

	})

	carousSlide.addEventListener('transitionend', (e) => {
		// if user pressed previous arrow
		if(e.propertyName === 'transform') {
			lastCard = carousSlide.lastElementChild;
			carousSlide.style.transition = 'none';
			lastCard.remove();
			lastCard = carousSlide.lastElementChild;
			oneBeforeLastClone = lastCard.previousElementSibling.cloneNode(true);
			carousSlide.prepend(oneBeforeLastClone);
			carousSlide.style.transform = 'translateX(-' + (size*2 - (size/4.3)) + 'px';
		} 
		// if user pressed next arrow
		else if(e.propertyName === 'left') {
			carousSlide.style.transition = 'none';
			firstCard = carousSlide.firstElementChild;
			firstCard.remove()
			secondCard = carousSlide.firstElementChild.nextElementSibling;
			secondCardClone = secondCard.cloneNode(true);
			carousSlide.append(secondCardClone);
			carousSlide.style.left = '0px';

		}
	});

	//accordion

	let accordionOptions = document.getElementsByClassName('accordion-header');
	[].forEach.call(accordionOptions, function(option,index){
	    option.onclick = function() {
	      let content = this.nextElementSibling;
	      if(content.style.maxHeight) {
	      	content.style.maxHeight = null;
	      	this.setAttribute('aria-expanded', false);
	      } else {
	      	content.style.maxHeight = content.scrollHeight + 'px';
	      	this.setAttribute('aria-expanded', true);	      	
	      }
	 	}
	});

})
