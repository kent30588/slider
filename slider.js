let sliderFactory = {
	getNewSlider: function () {
		let newSlider = {
			array: [],
			corrent: 0,
			prevImag: null, 
			nextImag: null, 
			slideImages: null,

			start: function (elSel) {
				let el = document.querySelector('.' + elSel);
				this.prevImag = el.querySelector('.prev-imag');
				this.nextImag = el.querySelector('.next-imag');
				this.slideImages = el.querySelector('.slide-images');

				this.prevImag.addEventListener('click',  () => {
					this.showPrevImag();
				});

				this.nextImag.addEventListener('click', () => {
					this.showNextImag();
				});

				this.array.push('https://media.istockphoto.com/photos/red-generic-coupe-car-isolated-on-white-background-3d-illustration-picture-id1191094307?k=20&m=1191094307&s=612x612&w=0&h=Pbgc1GmDV85JfGjMhbB3B4K2k-a0mFeAfx-RKDihxrM=');
				this.array.push('https://www.quattrodaily.com/wp-content/uploads/2019/07/audi-r8-lms-gt2-1-of-31.jpg');
				this.array.push('https://car-images.bauersecure.com/pagefiles/88574/best_sportscar_514.jpg');
				this.array.push('https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6064af8e13292f4369b15ae6%2F2021-Toyota-Supra%2F960x0.jpg%3Ffit%3Dscale');

				this.slideImages.src = this.array[0];
				this.prevImag.disabled = true;
			},

			showPrevImag: function () {
				this.corrent--;
				this.slideImages.src = this.array[this.corrent];
				this.nextImag.disabled = false;
				if (this.corrent === 0) {
					this.prevImag.disabled = true;
				}
			},

			showNextImag: function () {
				this.corrent++;
				this.slideImages.src = this.array[this.corrent];
				this.prevImag.disabled = false;
				if (this.corrent === this.array.length - 1) {
					this.nextImag.disabled = true;
				}
			},	
		}
		return newSlider;
	}
}

