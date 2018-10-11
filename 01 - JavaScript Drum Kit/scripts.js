/********************************************
 * Call functions on Window Event Listener
********************************************/
function playSound(e) {
	// console.log(e.keyCode);
	
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	// console.log(audio);
	
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	// console.log(key);
	
	// stop the function from running all together
	if (!audio) return;
	
	// Rewinds audio file to start
	audio.currentTime = 0;
	
	// Plays audio file
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	// console.log(e);
	
	// skip if it's not a transform
	if(e.propertyName !== 'transform') return;
	
	// console.log(e.propertyName);
	
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);