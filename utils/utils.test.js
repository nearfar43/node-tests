const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
	var res = utils.add(33, 11);	

	expect(res).toBe(44).toBeA('number');

	// if (res !== 44) {
	// 	throw new Error(`Expected 44, but got ${res}`);
	// }
});

//testing for async function
it('should async add two numbers', (done) => {
	utils.asyncAdd(4, 3, (sum) => {
		expect(sum).toBe(7).toBeA('number');
		done();
	});

});

it('should square a number', () => {
	var res = utils.square(3);

	expect(res).toBe(9).toBeA('number');
	// if (res !== 9) {
	// 	throw new Error(`Expected 9, but got ${res}`);
	// }
});

it('should aync square a number', (done) => {
	utils.asyncSquare(4, (square) => {
		expect(square).toBe(16).toBeA('number');
		done();
	});
});

it('should set firstName and lastName', () => {
	var user = {location: 'CA', age: 25};
	var res = utils.setName(user, 'Andrew Mead');

	expect(user).toEqual(res);

	expect(res).toInclude({
		firstName: 'Andrew',
		lastName: 'Mead'
	});
});


// it('should expect some value', () => {
// 	// expect(12).toNotBe(12);
	
// 	// using Equal to eval object
// 	// expect({name: 'Andrew'}).toEqual({name: 'Andrew'});

// 	// expect([2,3,4]).toInclude(2);

// 	expect({
// 		name: 'Andrew',
// 		age: 25,
// 		location: 'CA'
// 	}).toExclude({
// 		age: 23
// 	});
// });