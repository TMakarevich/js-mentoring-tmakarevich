/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
	let c = a + b;
	return c;
}

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
	return object.firstName + ' ' + object.lastName;
}

/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	if (n % 2 != 0) {
		return true;
	} else return false;
}

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {
	let min = wordArray[0].length;
	let minWord = wordArray[0];

	for (i = 1; i < wordArray.length; i++) {
		if (wordArray[i].length < min) {
			min = wordArray[i].length;
			minWord = wordArray[i];
		}
	}
	return minWord;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
	let letter = 'o';
	return 'g' + letter.repeat(n) + 'gle';
}

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName = null, lastName = null, age = null) {
	let user = {
		firstName,
		lastName,
		age,
	};
	return user;
}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
	let totalPath = 0;
	for (i = 0; i < path.length; i++) {
		totalPath = totalPath + path[i].distance;
	}
	return totalPath;
}

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num 
 * @param {percentage} num 
 */

function discountFunction(amount) {
	return function (percentage) {
		return percentage - percentage * amount / 100;
	};
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		for (let type in myObject) {
			console.log(type);
		}
	},
	call() {
		return 'My name is' + ' ' + this.name + ' ' + this.lastName + ' ' + 'and I am ' + this.age + ' years old. My best friend is ' + this.friends[2];
	}

};

module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};