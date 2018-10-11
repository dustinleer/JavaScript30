window.addEventListener('keydown', function(e) {
	// console.log(e.keyCode);
	
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	
	// console.log(audio);
	
	// stop the function from running all together
	if (!audio) return;

	// Rewinds audio file to start
	audio.currentTime = 0;

	// Plays audio file
	audio.play();

});
