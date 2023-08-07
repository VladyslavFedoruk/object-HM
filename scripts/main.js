/*
1. Створити сутність "Людина".

Властивості:
імʼя;
вік.

Методи:
конструктор, який приймає два параметри: імʼя та вік;
метод, який виводить у консоль інформацію про людину.
*/

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    userInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}

const testUser_1 = new Human("Владислав", 22);
testUser_1.userInfo();

const testUser_2 = new Human("Иван", 13);
testUser_2.userInfo();

const testUser_3 = new Human("Анна", 34);
testUser_3.userInfo();


/*
2. Створити сутність "Автомобіль".

Властивості:
марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
власник.

Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина 
*/

class Car {
    constructor(mark, model, launch, numberplate) {
        this.mark = mark;
        this.model = model;
        this.launch = launch;
        this.numberplate = numberplate;
        this.owner = 0;
    }

    showcar() {
        console.log(`Марка: ${this.mark}, Модель: ${this.model}, Год: ${this.launch}, Номерной знак: ${this.numberplate}`);
    }

    verification(owner) {
        if (owner.age >= 18) {
            this.owner = Human;
            console.log("Юзер старше 18 лет");
        } else {
            console.log("Владелец младше 18 лет");
        }
    }

}

const testCar_1 = new Car("Audi", "RS", 2022, "KE0737NT");
const testCar_2 = new Car("Lexus", "LX", 2023, "AE0000LX");
testCar_1.showcar();
testCar_2.showcar();

testCar_1.verification(testUser_1);
testCar_2.verification(testUser_2);