document.onkeydown = clavier;

function clavier(event) {
	let freezer = document.querySelector("#freezer");
	originalSrc = freezer.src;

	if (event.keyCode == 40) {
		freezer.style.top = freezer.offsetTop + 200 + "px";
	} else if (event.keyCode == 38) {
		freezer.style.top = freezer.offsetTop - 200 + "px";
	} else if (event.keyCode == 37) {
		freezer.style.left = freezer.offsetLeft - 200 + "px";
	} else if (event.keyCode == 39) {
		freezer.style.left = freezer.offsetLeft + 200 + "px";
	} else if (event.keyCode == 83) {
		audio.play();
		audio.currentTime = 0.6;
		document.querySelector("#freezer").src = "images/jeux/b.gif";
		setTimeout(reset, 1400);
	} else if (event.keyCode == 65) {
		document.querySelector("#freezer").src = "images/jeux/e.gif";
		setTimeout(reset, 1400);
	} else if (event.keyCode == 90) {
		document.querySelector("#freezer").src = "images/jeux/f.gif";
		setTimeout(reset, 2500);
	} else if (event.keyCode == 66) {
		document.querySelector("#freezer").src = "images/jeux/g.gif";
		setTimeout(reset, 1500);
	}
}
function reset() {
	document.querySelector("#freezer").src = "images/jeux/a.gif";
}

function playAudio() {
	let audio = document.getElementById("audio");
	audio.play();
	audio.volume = 0.9;
}
