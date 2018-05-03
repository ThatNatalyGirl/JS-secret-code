

//how you encapsulate a bunch of code. With Classes we start with a capital letter
class SecretCode {
	constructor(secretCode, callback) {
		
		let keysPressed = '';

		window.addEventListener('keyup', function(){

			keysPressed += event.key;
			console.log(keysPressed);

			while(keysPressed.length > 100){
				keysPressed = keysPressed.substr(1);				
			}

			if (keysPressed.includes(secretCode)){
				callback();
				keysPressed = ''
			}
		})
	
	}
}