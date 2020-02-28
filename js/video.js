var video;


function getVid(){
	video = document.querySelector("#myVideo");
	document.querySelector(".play").innerHTML='<img src="playicon.png" style="width: 40px">';
	document.querySelector(".pause").innerHTML='<img src="pauseicon.jpg" style="width: 40px">';
}

function playVid() {
	video.play();

	vol = document.querySelector("#volume").innerHTML=video.volume*100 + "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {

	video.playbackRate -= .2*video.playbackRate;
	console.log("Speed is "+video.playbackRate );
}

function increaseSpeed() {
	video.playbackRate += .25*video.playbackRate;
	console.log("Speed is "+video.playbackRate );
}


function skipAhead() {

	video.currentTime = video.currentTime + 60;

	console.log("Current location is "+ video.currentTime);

	if (video.currentTime >= 366) {
		video.currentTime = 0;
		video.playbackRate = 1
	}
}


function mute() {

  		if (video.muted){

				muteTitle = document.querySelector("#mute").innerHTML="Mute";
				video.muted = false;
				console.log("Changed to Unmuted");

			}

			else {
				muteTitle = document.querySelector("#mute").innerHTML="Unmute";
				video.muted = true;
				console.log("Changed to Muted");
			}

}

function changeVolume() {
	vol = document.querySelector("#volumeSlider").value;
	console.log("Volume is "+ vol + "%");
	vol = document.querySelector("#volume").innerHTML=vol + "%";

}


function gray() {
	console.log("In grayscale")
	video.classList.add("grayscale");
}

function color() {

	console.log("In color")
	video.classList.remove("grayscale");
}
