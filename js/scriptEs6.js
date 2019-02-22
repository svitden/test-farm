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

class Farm {
    process (animal) {
        return animal.produce();
    }
}

class Animal {}

class Chicken extends Animal {
    constructor() {
        super();
    }

    produce () {
        return new Egg();
    }
}

class Cow extends Animal {
    constructor() {
        super();
    }

    produce() {
        return new Milk();
    }
}

class Food { }
class Egg extends Food {
    constructor() {
        super();
    }

    eat() {
        return console.log('eating egg');
    }
}
class Milk extends Food {
    constructor() {
        super();
    }

    eat() {
        return console.log('eating milk');
    }
}


const farm = new Farm();
farm.process(new Chicken()).eat();
farm.process(new Cow()).eat();