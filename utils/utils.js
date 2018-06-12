var add = (a, b) => a + b;

var asyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 1000);

};

var square = (x) => x * x;

function asyncSquare (x, callback) {
	setTimeout(() => {
		callback(x * x);
	}, 1000);

};

var setName = (user, fullName) => {
	var names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];
	return user;
};

module.exports = {
	add,
	square,
	setName,
	asyncAdd,
	asyncSquare
};

//module.exports.add = (a, b) => a + b;