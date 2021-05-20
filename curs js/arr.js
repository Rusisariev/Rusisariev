// let arr = [1, 2, 0]



// let for each value = arr.forEach((a, b) => {
// 	console.log('Foreach Item', a)
// 	return a
// })

// let map value = arr.map((item) => {
// 	console.log(item)
// 	return item
// })

// arr.filter((item) => {
// 	return item !-- 0
// })


// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.

let arr = ["I", "go", "home"];

delete arr[1]; // удалить "go"

alert( arr[1] ); // undefined

// теперь arr = ["I",  , "home"];
console.log( arr.length ); // 3

arr.splice([index, deleteCount, elem1, elemN])

let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

console.log( arr ); // осталось ["Я", "JavaScript"]

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");

console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 2 первых элемента
let removed = arr.splice(0, 2);

console.log( removed ); // "Я", "изучаю" <-- массив из удалённых элементов

