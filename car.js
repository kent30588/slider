function Car(name) {
	this.name = name;
	this.isTurnOn = false;
	this.speed = 0;
	this.engine = {
		v: 1.6,
		horsesPower: 120,
		isTurnOn: false
	};
};

Car.prototype.start = function () {
		this.isTurnOn = true;
		this.speed = 120;
		this.engine.isTurnOn = true;
		console.log(this.name, this.speed);
};


let bmw = new Car('BMW');
let audi = new Car('AUDI');
bmw.start();
audi.start();

const solider = {
	health: 400,
	armor: 100,
	hello: function () {
		console.log('Hello');
	}
}

const john = Object.create(solider);

john.hello();