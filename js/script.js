/*
Необходимо создать структуру из JavaScript классов, описывающих работу фермы. Решение, в свою очередь, необходимо выполнить двумя способами и предоставить его в двух отдельных JavaScript (*.js) файлах:
– на ES6 стандарте (класс через синтаксический сахар и ключевое слово class, большим плюсом будет реализации на TypeScript);
– на ES5 стандарте (класс через функциональный подход и прототипы).

Объект класса Farm принимает в методе process() объект-наследник класса Animal, вызывает у него метод produce() и возвращает полученное значение. Объекты-наследники класса Animal реализовывают свою версию метода produce(), чтобы возвращать продукт в соответствии с типом животного. Объекты-наследники класса Food в методе eat() просто выводят на консоль информацию о себе в виде строки (eating egg/milk).

Ожидается, что после выполнения следующего кода:

const farm = new Farm();
farm.process(new Chicken()).eat();
farm.process(new Cow()).eat();

В консоли будет выведено только две строки:

eating egg
eating milk

*/

function Farm() { }
function Animal() { }
function Chicken() {
    Animal.apply(this, arguments);
}
function Cow() {
    Animal.apply(this, arguments);
}
function Food() { }
function Egg() {
    Food.apply(this, arguments);
}
function Milk() {
    Food.apply(this, arguments);
}

Chicken.prototype = Object.create(Animal.prototype);
Chicken.prototype.constructor = Chicken;
Cow.prototype = Object.create(Animal.prototype);
Cow.prototype.constructor = Cow;

Egg.prototype = Object.create(Food.prototype);
Egg.prototype.constructor = Egg;
Milk.prototype = Object.create(Food.prototype);
Milk.prototype.constructor = Milk;

Farm.prototype.process = function (animal) {
    return animal.produce();
};

Chicken.prototype.produce = function () {
    return new Egg();
};

Cow.prototype.produce = function () {
    return new Milk();
};

Egg.prototype.eat = function () {
    return console.log('eating egg');
}

Milk.prototype.eat = function () {
    return console.log('eating milk');
}


var farm = new Farm();
farm.process(new Chicken()).eat();
farm.process(new Cow()).eat();