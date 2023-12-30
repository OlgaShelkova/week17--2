// Задание 1
// Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
// Подсказка: имена классов пишем с большой буквы

//Ваш код
/*
//Создаём объекта на основе класса Worker
/*const worker = new Worker('Имя', 'Фамилия');*/
//Выводим созданный объект в консоль
/*console.log(worker);*/
/*class Worker {// Выводит объект Worker {name: "Имя", surname: "Фамилия"}
	constructor(name, surname) {
	this.name = name; // свойство name
	this.surname = surname; // свойство surname
	}
	}
	
	const worker = new Worker('Имя', 'Фамилия'); // создание объекта worker
	console.log(worker); // вывод объекта worker в консоль
	

//Задание 2
class Worker {
	constructor(name, surname) {// Выводит "Фамилия, Имя"
	this.name = name; // свойство name
	this.surname = surname; // свойство surname
	}
	
	fullName() {
	return `${this.surname}, ${this.name}`; // возвращает полное имя в формате "Имя, Фамилия"
	}
	}
	
	const worker2 = new Worker('Имя', 'Фамилия');//Создаём объект worker2 на основе класса Worker
	console.log(worker2.fullName());//Выводим полное имя объекта worker2 в консоль с помощью метода fullName
	

//Задание 3
//Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.

//Ваш код
class Car { // Определяем класс Car
	constructor(brand, model, year) { // Конструктор класса принимает параметры brand, model, year и инициализирует свойства объекта
	this.brand = brand; // Присваиваем переданное значение свойству brand
	this.model = model; // Присваиваем переданное значение свойству model
	this.year = year; // Присваиваем переданное значение свойству year
	}
	}
	
	const car = new Car('Toyota', 'Corolla', 2020); // Создаем новый объект car на основе класса Car и передаем значения 'Toyota', 'Corolla', 2020 в качестве аргументов
	console.log(car); //выводим полученный объект car в консоль
	
//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.

//Ваш код
class Car {
	constructor(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	}

	getAge() {
	  const currentYear = new Date().getFullYear();  // Получаем текущий год
	  return currentYear - this.year;  // Возвращаем разницу между текущим годом и годом выпуска машины
	}
}

	const car = new Car('Toyota', 'Corolla', 2020);
  	console.log(car.getAge());  // Выводим возраст машины в консоль

	const car2 = new Car('Ford', 'Focus', 2015);
  	console.log(car2.getAge());  // Выводим возраст машины car2 в консоль


//Задание 5
//Создайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.

//Ваш код
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}

const rectangle = new Rectangle(8, 4);
console.log(`Ширина прямоугольника равна - ${rectangle.width}`);   // Выводим ширину прямоугольника в консоль
console.log(`Высота прямоугольника равна - ${rectangle.height}`);  // Выводим высоту прямоугольника в консоль
//Задание 6
//Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle2 на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.

//Ваш код
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}
Rectangle.prototype.getArea = function() { // Добавляем метода getArea к прототипу класса Rectangle
	return this.width * this.height; // Возвращаем площадь прямоугольника
};

const rectangle2 = new Rectangle(5, 10); // Создание экземпляра класса Rectangle с шириной 5 и высотой 10
console.log(`Площадь прямоугольника равна - ${rectangle2.getArea()}`); // Выводим площадь прямоугольника в консоль с помощью метода getArea.
//Задание 7
//Создайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.

//Ваш код
class Circle {
	constructor(radius) {
    this.radius = radius; // Присвоение радиуса окружности
	}
}

const circle = new Circle(10);// Создание экземпляра класса Circle с радиусом 10

console.log(`Радиус окружности равен - ${circle.radius}`); // Вывод свойства radius объекта circle в консоль 

//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.
 // Метод для вычисления площади круга
class Circle {
	constructor(radius) {
    this.radius = radius; // Присвоение радиуса окружности
	}
}

Circle.prototype.calculateArea = function() { // Метод для вычисления площади круга
	return this.radius * this.radius * 3.14;
}

// Создание экземпляра класса Circle с радиусом 3
const circle2 = new Circle(3);

// Вызов метода calculateArea для вычисления площади круга и вывод результата в консоль
console.log(circle2.calculateArea()); // Ожидаемый результат: 28.26


//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе объект student и выведите его свойства в консоль.
class Student {
	constructor(name, age, grade) {
	this.name = name;
	this.age = age;
	this.grade = grade;
	}
}

let student = new Student('Иван', 18, 3);
console.log(`Имя: ${student.name}, Возраст: ${student.age}, Оценка: ${student.grade}`);

//Ваш код

//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.
class Student {
constructor(name, age, grade) {
	this.name = name;
	this.age = age;
	this.grade += 1;
	}
}

Student.prototype.increaseGrade = function increaseGrade(){
	this.grade += 1;
}

const student2 = new Student('Alex', 22, 4);
console.log(`Повышенная оценка студента ${student2.name} составила -  ${student2.increaseGrade()}`);

/*
//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе объект book и выведите его свойства в консоль.

class Book { // Определение класса Book
	constructor(title, author, year) { // Конструктор класса, принимающий три аргумента: title, author, year
		this.title = title; // Сохранение переданных значений в свойствах объекта
		this.author = author;
		this.year = year;
	}
}

let book = new Book('Мастер и Маргарита', 'Михаил Булгаков', 1967);
console.log(`Название книги: ${book.title}, автор: ${book.author}, год издания: ${book.year}`);

//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название и автора в консоль с помощью метода getTitleAndAuthor.

class Book { // Определение класса Book
	constructor(title, author, year) { // Конструктор класса, принимающий три аргумента: title, author, year
		this.title = title; // Сохранение переданных значений в свойствах объекта
		this.author = author;
		this.year = year;
	}
	
	getTitleAndAuthor() { // Метод, возвращающий название книги и имя автора в виде строки
	return `${this.title} - ${this.author}`;  
	}
}

let book = new Book('Мастер и Маргарита', 'Михаил Булгаков', 1967); // Создание экземпляра класса Book с заданными параметрами
console.log(`название книги: ${book.title}, автор: ${book.author}, год издания: ${book.year}`); // Вывод информации о книге в консоль

let book2 = new Book('Преступление и наказание', 'Федор Достоевский', 1866); // Создание второго экземпляра класса Book с другими параметрами
console.log(book2.getTitleAndAuthor()); // Вывод информации о второй книге в консоль с использованием метода getTitleAndAuthor

//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. Создайте на его основе объект account и выведите его свойства в консоль.

class BankAccount1{ // Создаем класс BankAccount
	constructor(accountNumber, balance){
		this.accountNumber = accountNumber;
		this.balance = balance;
	}
}
const account = new BankAccount1(39403, 64538);
console.log(account);

//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс на заданную сумму. Создайте объект account2 на основе класса BankAccount, пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.

class BankAccount { // Создаем класс BankAccount
    constructor(accountNumber, balance) { // Создаем конструктор класса, который принимает аргументы accountNumber и balance
        this.accountNumber = accountNumber; // Инициализируем свойства объекта accountNumber и balance значениями аргументов
        this.balance = balance;
    }
    
    deposit(sum) { // Создаем метод deposit, который принимает аргумент sum
        this.balance += sum; // Увеличиваем значение свойства balance на значение аргумента sum
    }
}

const account2 = new BankAccount(39403, 64538); // Создаем объект account2 класса BankAccount с заданными значениями accountNumber и balance
console.log("Before deposit:", account2.balance); // Выводим текущее значение свойства balance объекта account2
account2.deposit(1000); // Выводим текущее значение свойства balance объекта account2
console.log("After deposit:", account2.balance); // Выводим измененное значение свойства balance объекта account2

//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". Создайте объект account3 на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс, и выведите соответствующее сообщение в консоль.

class BankAccount { // Создаем класс BankAccount
	constructor(balance) { // Создаем конструктор класса, который принимает аргументы accountNumber и balance
		this.balance = balance;
	}

	withdraw(amount) {
		if (amount <= this.balance) {
			this.balance -= amount; // Уменьшаем баланс на заданную сумму
			return this.balance;
		} else {
			console.log('Недостаточно средств');//Выводите в консоль сообщение
		}
	}
}
//Создайте объект account3 на основе класса BankAccount
const account3 = new BankAccount(100);
account3.withdraw(150); 
//Попытайтесь снять сумму, превышающую баланс

//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.

//Ваш код
class Animal { // Создаем класс Animal
	constructor(name, sound) { // Создаем конструктор класса, который принимает аргументы name и sound
	this.name = name;
	this.sound = sound;
	}
	}
	
	const animal = new Animal("Lion", "Roar");
	console.log(animal.name); 
	console.log(animal.sound); 

	
//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте объект animal2 на основе класса Animal и вызовите метод makeSound.

//Ваш код
// Определение класса Animal
class Animal {
	constructor(name, sound) {// Конструктор класса, принимающий имя и звук животного
	  this.name = name; // Присваивание значения свойству name
	  this.sound = sound; // Присваивание значения свойству sound
	}

	makeSound() {// Метод makeSound, который выводит звук животного в консоль
	  console.log(this.sound); // Вывод звука животного в консоль
	}
}

  // Создание объекта animal2 на основе класса Animal
const animal2 = new Animal("Cat", "Meow");
animal2.makeSound(); // Вызов метода makeSound у объекта animal2

//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.

//Ваш код
// Определение класса Point
class Point {
	constructor(x, y) {// Конструктор класса, принимающий координаты x и y точки
	  this.x = x; // Присваивание значения свойству x
	  this.y = y; // Присваивание значения свойству y
	}
}

  // Создание объекта point на основе класса Point с координатами x=2 и y=5
const point = new Point(2, 5);
  // Вывод свойств объекта point в консоль
console.log("Координаты точки: x=" + point.x + ", y=" + point.y);

//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point2 на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}
// Создание объекта point2 на основе класса Point с координатами x=3 и y=4
const point2 = new Point(3, 4);
// Вывод расстояния объекта point2 до начала координат с помощью метода getDistance
console.log("Расстояние до начала координат: " + point2.getDistance()); 

//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calculator на основе класса Calculator, вызовите каждый из методов и выведите результаты в консоль.

//Ваш код
// Объявление класса Calculator
class Calculator {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    add(){// метод для сложения двух чисел
        return this.x + this.y;
    }
    subtract(){// метод для вычитания второго числа из первого
        return this.x - this.y;
    }
    multiply(){// метод для умножения двух чисел
        return this.x * this.y;
    }
    divide(){// метод для деления первого числа на второе
        if (this.y !== 0) {
            return this.x / this.y;
        } else {
            return "деление на ноль невозможно";
        }
    }
}

 // Создание объекта calculator на основе класса Calculator
const calculator = new Calculator(5, 2);
// Вызов каждого из методов и вывод результатов в консоль
console.log("результат сложения: " + calculator.add());
console.log("результат вычитания: " + calculator.subtract());
console.log("результат умножения: " + calculator.multiply());
console.log("результат деления: " + calculator.divide());


//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person и выведите его свойства в консоль.
class Person {
	constructor(name, age, city) { // конструктор класса Person с параметрами name, age и city
	this.name = name; // присваиваем свойству name значение из параметра name
	this.age = age; // присваиваем свойству age значение из параметра age
	this.city = city; // присваиваем свойству city значение из параметра city
	}
}
	
let person = new Person('John', 25, 'New York'); // создаем объект person на основе класса Person с заданными параметрами
console.log(person);



//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person2 на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.

//Ваш код
class Person { //Создаем класс Person.
	constructor(name, age, city) { // конструктор класса Person с параметрами name, age и city
	this.name = name;
	this.age = age;
	this.city = city;
	}
	
	changeCity(newCity) { // метод changeCity с одним параметром newCity
	this.city = newCity; // изменение значения свойства city на новое значение
	}
	}
	
	let person2 = new Person('Alice', 30, 'Los Angeles');
	person2.changeCity('New York'); // вызов метода changeCity с аргументом "New York"
	console.log(person2.city); // Вывод: New York - выводим новое значение свойства city объекта person2 в консоль

//Задание 23
//Создайте класс Employee. Класс должен содержать свойства name, position и salary. Создайте на его основе объект employee и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект employee и вывести его свойства.

//Ваш код
class Employee { //Создаем класс Employee
  constructor(name, position, salary) { // конструктор класса Employee с параметрами имени, должности и зарплаты
    this.name = name; 
    this.position = position; 
    this.salary = salary; 
	}
}

let employee = new Employee('John', 'Manager', 50000); // создание объекта employee с параметрами имени, должности и зарплаты
console.log(`Имя сотрудника - ${employee.name}, должность - ${employee.position}, зарплата - ${employee.salary}`);

//Задание 24
//Добавьте в класс Employee метод calculateBonus, который будет принимать процент бонуса и увеличивать зарплату сотрудника на соответствующую сумму. Создайте объект employee2 на основе класса Employee и вызовите метод calculateBonus с процентом 10. Выведите новую зарплату сотрудника в консоль.
//Подсказка: Используйте метод call или apply, чтобы вызвать метод calculateBonus для объекта employee2 и передать процент бонуса.

//Ваш код

class Employee { //Создаем класс Employee
	constructor(name, position, salary) { // конструктор класса Employee с параметрами имени, должности и зарплаты
		this.name = name;
		this.position = position;
		this.salary = salary;
	}

	calculateBonus(percent) { // метод для расчета бонуса
	  this.salary += this.salary * (percent / 100); // увеличиваем зарплату на процент бонуса
	}
}

let employee2 = new Employee("John", "Manager", 50000);
employee2.calculateBonus.call(employee2, 10); // вызываем метод calculateBonus для объекта employee2 с процентом бонуса 10
console.log(`Новая зарплата сотрудника: ${employee2.salary}`); // выводим новую зарплату сотрудника в консоль


//Задание 25
//Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте на его основе объект product и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект product и вывести его свойства.

//Ваш код
class Product { //Создаем класс Product
	constructor(name, price, quantity) { // конструктор класса Product с параметрами имени, цены и количества
    this.name = name;
    this.price = price;
    this.quantity = quantity;
	}
}

let product = new Product('Товар', 100, 5);
console.log(product.name, product.price, product.quantity);

//Задание 26
//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product2 на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.

//Ваш код
class Product { //Создаем класс Product
	constructor(name, price, quantity) { // конструктор класса Product с параметрами имени, цены и количества
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	calculateTotalPrice() { //Добавляем метод calculateTotalPrice для вычисления общей стоимости продукта
	  return this.price * this.quantity; // Общая стоимость = цена * количество
	}
}

let product = new Product('Товар', 100, 5);
console.log(product.name, product.price, product.quantity);

let product2 = new Product('Товар2', 10, 5);
console.log(product2.calculateTotalPrice());


//Задание 27
//Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, которые представляют длины сторон треугольника. Создайте на его основе объект triangle и выведите его свойства в консоль.

//Ваш код
class Triangle { //Создаем класс Triangle
	constructor(side1, side2, side3) {
	  this.side1 = side1; // Длина первой стороны
	  this.side2 = side2; // Длина второй стороны
	  this.side3 = side3; // Длина третьей стороны
	}
}

let triangle = new Triangle(3, 4, 5); // создание объекта triangle с параметрами сторон
console.log(`Длины сторон теругольника составляют - ${triangle.side1}, ${triangle.side2}, ${triangle.side3} см`);

//Задание 28
//Добавьте в класс Triangle метод calculatePerimeter, который будет возвращать периметр треугольника (сумма длин всех сторон). Создайте объект triangle2 на основе класса Triangle со сторонами 3, 4 и 5. Выведите периметр треугольника в консоль с помощью метода calculatePerimeter.

//Ваш код
class Triangle { //Создаем класс Triangle
	constructor(side1, side2, side3) {
	  this.side1 = side1; // Длина первой стороны
	  this.side2 = side2; // Длина второй стороны
	  this.side3 = side3; // Длина третьей стороны
	}
	calculatePerimeter() {
		return this.side1 + this.side2 + this.side3;
	}
}

let triangle2 = new Triangle(3, 4, 5); // создание объекта triangle с параметрами сторон
console.log(`Периметр теругольника равен - ${triangle2.calculatePerimeter()}`); // Вывод периметра треугольника

//Задание 29
//Создайте класс Square. Класс должен содержать свойство side, представляющее длину стороны квадрата. Создайте на его основе объект square и выведите его свойство в консоль.
class Square { //Создаем класс Square
	constructor(side) { 
    this.side = side; //свойство side, представляющее длину стороны квадрата
	}
}

let square = new Square(5); //Создаем объект square
console.log(square.side); // Вывод длины стороны квадрата в консоль


//Задание 30
//Добавьте в класс Square метод calculateArea, который будет вычислять и возвращать площадь квадрата (произведение длины стороны на саму себя). Создайте объект square2 на основе класса Square со стороной 5 и выведите его площадь квадрата в консоль с помощью метода calculateArea.

//Ваш код
class Square { //Создаем класс Square
	constructor(side) { // конструктор класса, принимающий сторону квадрата
    this.side = side; //свойство side, представляющее длину стороны квадрата
}

	calculateArea() {  // метод для вычисления площади квадрата
    return this.side * this.side; // возвращаем результат умножения длины стороны на саму себя
	}
}

let square2 = new Square(5); //Добавляем  объект square2, созданный на основе класса Square со стороной 5
console.log(`Площадь квадрата равна - ${square2.calculateArea()}`); // Вывод площади квадрата в консоль
*/