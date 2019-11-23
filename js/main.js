document.addEventListener('DOMContentLoaded', () => {
	const prevArrow = document.getElementById('prev-arrow');
	const nextArrow = document.getElementById('next-arrow');
	const carousSlide = document.querySelector('.carousel-slide');
	let carousCards = document.querySelectorAll('.carousel-container .card-container');	
	let size = carousCards[0].scrollWidth;
	let lastCard = carousSlide.lastElementChild;
	let lastClone = lastCard.cloneNode(true);

	carousSlide.prepend(lastClone);
	carousSlide.style.transform = 'translateX(-' + size + 'px)';

	//previous click
	prevArrow.addEventListener('click', () => {
		carousSlide.style.transition = 'transform .2s ease-in-out';
		carousSlide.style.transform = 'translateX(0px)';			
	})

	//next click  
	nextArrow.addEventListener('click', () => {
		carousCards = document.querySelectorAll('.carousel-container .card-container');
		size = carousCards[0].scrollWidth;
		carousSlide.style.transition = 'left .2s ease-in-out';
		carousSlide.style.left = '-'+ size + 'px';

	})

	carousSlide.addEventListener('transitionend', (e) => {
		// if user pressed previous arrow
		if(e.propertyName === 'transform') {
			lastCard = carousSlide.lastElementChild;
			carousSlide.style.transition = 'none';
			lastCard.remove()
			lastCard = carousSlide.lastElementChild;
			lastCardClone = lastCard.cloneNode(true);
			carousSlide.prepend(lastCardClone);
			carousSlide.style.transform = 'translateX(-' + size + 'px)';
		} 
		// if user pressed next arrow
		else if(e.propertyName === 'left') {
			carousSlide.style.transition = 'none';
			firstCard = carousSlide.firstElementChild;
			if(firstCard.isEqualNode(carousSlide.lastElementChild)) {
				firstCard.remove()
			}
			firstCard = carousSlide.firstElementChild;
			firstCardClone = firstCard.cloneNode(true);
			carousSlide.append(firstCardClone);
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