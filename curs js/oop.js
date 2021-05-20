class worker {
	constructor(name, surname, rate, days) {
		this._name = name
		this._surname = surname
		this._rate = rate
		this._days = days
	}

	get name(){
		return this._name
	}

	get surname(){
		return this._surname
	}

	get rate(){
		return this._rate
	}

	get days(){
		return this._days
	}

	get fullname(){
		return this._name + " " + this._surname
	}

	get salary() {
		return this._rate * this._days + " зарплата Работника"
	}

}

let ivan = new worker('ivan', 'ivanov', 300, 30);

console.log(ivan.fullname);
console.log(ivan.rate);
console.log(ivan.days);
console.log(ivan.salary);

// а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
// б) Создать класс Категория, имеющий переменные имя и массив товаров.
// Создать несколько объектов класса Категория. 
// в) Создать класс Basket, содержащий массив купленных товаров. 
// г) Создать класс User, содержащий логин, пароль и объект класса Basket.
// Создать объект класса User. (Интернет магазин)

class Product {
	constructor(name, price, rating) {
		this._name = name
		this._price = price
		this._rating = rating
	}
}

class Category {
	constructor(name) {

	}
}

let goods = new Category

class basket {
	constructor() {

	}
}

class user {
	constructor() {

	}
}



// Определить класс Reader, хранящий такую информацию о пользователе библиотеки: ФИО,
// номер читательского билета, факультет, дата рождения, телефон. Методы takeBook(), returnBook().
// Разработать программу, в которой создается массив объектов данного класса.
// Перегрузить методы takeBook(), returnBook():
// - takeBook, который будет принимать переменное количество объектов
// класса Book (создать новый класс, содержащий имя и автора книги).
// Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".
// Аналогичным образом перегрузить метод returnBook().
// Выводит на консоль сообщение "Петров В. В. вернул книги: Приключения, Словарь, Энциклопедия".

class Reader {
	constructor(nameUsername, numberBilet, faculty, DateofBirth, phone) {

	}
	takeBook() {

	}
	returnBook() {
		
	}
}

setTimeout(() => {
	resolve('success')
})