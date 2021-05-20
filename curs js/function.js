function checkAge(age) {
	if (age =25) {

	}
}
function sum(num1 = 0, num2 = 0) {
	return num1 + num2
}
let sum_of_numbers =sum(1, 2)

{
	let age = 30
		function getAge() {
			let age = 25
			return age
	}
}
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);  // простое
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
