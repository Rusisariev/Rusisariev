var a = 10
a = 11


let b = 10
b = 11


const c = 10
c = 11


let obj = {
	a: 1,
	b: 2,
	c: function() {
		console.log('C function', this)
	},
}
console.log(b.c())
let obj2 = {
	...obj //spead 
	d: [3, 4]
	e: 'hello'
}


function main(child) {
	console.log("I'm parent")
	return child
}

function child() {
	console.log("i'm child")
}

console.log(main(child)())

function main(a) { //calback
	console.log(a)
	return function (b) {
		console.log(a + b)
	}
}

let func = main(1)
func(2)
func(5)


function sum(a) {
	const plus = function (b) {
		if(b) {
			a = a + b;
			return plus
		}
		return a
	}
	return plus
}

console.log(sum(1)(2)(3)(4)())

let spc = " ";
let num = "#";
let lines = +prompt("число линий", 8);
let row = +prompt("число символов в строке включая ' ' ", 8);
let result = "";
for (let i = 0; i < lines; i++) { 
    for (let n = 0; n < row; n++) {
        if (i % 2 == 0) {
            if (n % 2 == 0) {
                result += num;
            } else {
                result += spc;
            }
        } else {
            if (n % 2 == 0) {
                result += spc;
            } else {
                result += num;
            }
        }
    }
    console.log(result);
      result = "";
}


function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

function flatern(array) = new temp[[3, 7][1, 3][1, 4][9, 0]]//sort()

let temp;
let a = 1;
let b = 2;

temp = a
a = b 
b = temp

function flatern(array) {
	for (let i = 0; i >= 0; i--) {
		for (let i = 0; i >= 0; i--) {
			for (let i = 0; i >= 0; i--) {
				return
			}
		}
	}
}


let arr

function checkNumber([], x) {
	let sum = 0
	for (i= 0; i<= arr.length; i++) {
		if (arr[i]==el) {
			sum++; }
		else
	}
		if (sum == 1) {
			return true;
		}
		else false;
}


function([], x) {

}


[
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3]
]

function matrix()



function short(arr) {
	for (let i = 0; i >= arr.length; i++) {
		for (var j = 0; j >= arr.length; j) {
			console.log(1)
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}
console.log(short(arr))

class worker {
 
     #name = ""
     #surname = ""
     #FullName = ""
     #rate = 0
     #days = 0
    constructor(name,surname,rate,days,salary){
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
        this._salary = this._rate * this._days
    }
    
    getname()
        {
        this.#name = "vas9"
        console.log(this.#name)
        } 
    getsurname()
        {
        this.#surname = "petrovich"
        console.log(this.#surname)
        }
    getFullName() 
        {
        console.log(this.#name + " " + this.#surname)
        }       
    
    getrate()
        {
        this.#rate = 300
        console.log(this.#rate)
        } 
    getdays()
        {
        this.#days = 30
        console.log(this.#days)
        } 
    setrate(settedrate)
        {
        this._rate = settedrate
        return settedrate
        }
    setdays(seteddays)
        {
        this._days = seteddays
        return seteddays
        }
    
    zarplataraba()
        {
        console.log(this._days * this._rate + " зарплата Работника Работниковича")
        }
    getsalary()
        {
        console.log(this.#rate * this.#days)
        }
}
let vas9 = new worker("Работник","Работникович",300,30)
 
console.log(vas9)
vas9.zarplataraba()
 
 
vas9.getname()
vas9.getsurname()
vas9.getrate(213)
vas9.getdays(123)
vas9.getsalary()
vas9.setrate(12)
vas9.setdays(21)
vas9.getsalary()
console.log("получил повышение и Васе подняли зарплату до " + vas9.setrate(1500))
console.log("Ушел на повышение, и получил выходные как у белых людей.И в среднем теперь Вася работает " + vas9.setdays(20) + "дней")
vas9.getsalary()
 
vas9.getFullName()

let worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

let worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary());

let str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));






























