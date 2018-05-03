'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//how you encapsulate a bunch of code. With Classes we start with a capital letter
var SecretCode = function SecretCode(secretCode, callback) {
	_classCallCheck(this, SecretCode);

	var keysPressed = '';

	window.addEventListener('keyup', function () {

		keysPressed += event.key;
		console.log(keysPressed);

		while (keysPressed.length > 100) {
			keysPressed = keysPressed.substr(1);
		}

		if (keysPressed.includes(secretCode)) {
			callback();
			keysPressed = '';
		}
	});
};
//# sourceMappingURL=secret-code.js.map
