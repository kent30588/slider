function Dog(name) {
	this.myName = name;
	this.voise = function () {
		console.log('Hey, my name is ' + this.myName)
	}
}

let laika = new Dog('laika');
let buldog = new Dog('buldog');
let bobik = new Dog('bobik');

buldog.voise();
laika.voise();
bobik.voise();




//let slider1 = sliderFactory.getNewSlider();
//let slider2 = sliderFactory.getNewSlider();

//slider1.start('slider1');
//slider2.start('slider2');

