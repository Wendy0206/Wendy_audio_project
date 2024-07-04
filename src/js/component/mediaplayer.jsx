import React from "react";
import { useState, useEffect, useRef } from "react";



//create your first component
export const Media = () => {
	const currentOne = useRef(0);
	const [playStatus, setPlayStatus] = useState('fa-solid fa-play fa-2xl');
	const playT = useRef(false);
	const [volumeT, setVolumeT] = useState(0.5);
	const [volumeE, setVolumeE] = useState('fa-solid fa-volume-low fa-xl');
	const [songP, setSongP] = useState(0);
	const [stepS, setStepS] = useState(0);


	let interval;
	let delay = 1000;
	let startPress = null;
	let playlistSong = [
		{
			title: "Thunder Cats",
			author: "Moonra",
			url:
				"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
		},{
			title: "South Park",
			author: "Kyle",
			url:
				" https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
		},
		{
			title: "X-Men",
			author: "Profesor",
			url:
				"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
		}
	];

	var audioTest = new Audio;

	

	useEffect(() => {
		if (playT.current == true && songP<100) {

			interval = setInterval(() => {	
					setSongP(songP + 1);
					
			}, stepS);
			return () => clearInterval(interval);
		}

		else if( songP==100) {
			setSongP(0);
			let next= currentSong.current+1;
			next= currentSong.current==playlistSong.length-1? 0 : next;
			audioTest.src = playlistSong[next].url;
		audioTest.play();
			clearInterval(interval);
		}

	}, [stepS, songP]);




	function play_function(id) {
		// check if user click on the play button
		if (id == -1) {
			if (playT.current == false) {
				setPlayStatus('fa-solid fa-pause fa-2xl');
				audioTest.src = playlistSong[currentSong.current].url;
				audioTest.play();
				playT.current = true;
			}

			else {
				setPlayStatus('fa-solid fa-play fa-2xl');
				audioTest.pause();
				currentSong.current;
				playT.current = false;
			}
		}

		// else user click on a song directly
		else {

			if (playT.current == false) {
				playT.current = true;
				setPlayStatus('fa-solid fa-pause fa-2xl');
				audioTest.src = playlistSong[id].url;
				audioTest.play();
				currentSong.current = id;
			}

			else {
				setPlayStatus('fa-solid fa-play fa-2xl');
				//	audioTest.currentTime = 0;
				audioTest.play();
				playT.current = false;
			}

		}

	}

	function switch_function(pos) {
		if (currentSong.current === playlistSong.length - 1 && pos == 1) { pos = -currentSong.current }
		currentSong.current = currentSong.current + pos;
		audioTest.src = playlistSong[currentSong.current].url;
		setSongP(0);
		audioTest.play();
	}



	function counterDown() {
		startPress = Date.now();
	}

	function counterUp() {
		if (Date.now() - startPress > delay) {
			setVolumeE('fa-solid fa-volume-xmark fa-xl');

			audioTest.muted = true;
		}
		else {
			if (volumeT > 0) {
				setVolumeT(volumeT - 0.1);
				audioTest.volume = volumeT;
			}

		}


	}


	function random_function() {

	}


	function volume_up() {
		if (volumeT == 0) {
			setVolumeT(0.5);
			audioTest.volume = volumeT;
		}
		else {
			if (volumeT < 1.0) {
				setVolumeT(volumeT + 0.1);
				audioTest.volume = volumeT;
				setVolumeE('fa-solid fa-volume-low fa-xl');
			}

		}

	}

	
const get_duration=(e)=>{
	setStepS(Math.floor((e.target.duration * 1000) / 100));
	let test= Math.floor((e.target.duration * 1000) / 100);
	console.log(' This is the step at which we are going to move : '+test);
}

	return (
		<>

<main class="player">
        <div class="header">
            <a href="#" class="button">
                <i class="fas fa-bars" aria-hidden="true"></i>
                <span class="sr-only">menu bar</span>
            </a>
            <p>Now Playing</p>
            <a href="#" class="button">
                <i class="fas fa-search" aria-hidden="true"></i>
                <span class="sr-only">Search</span>
            </a>
        </div> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuBNBcOFFjXIkz4EkF_AyxysJil8Vldwb-Q&usqp=CAU" alt="album art" class="art"/> 
        <div class="info">
            <h1>{playlistSong[currentOne.current].title}</h1>
            <p>{playlistSong[currentOne.current].author}</p>
        </div>
        <div class="prog">
            <div class="prog-time">
                <p class="left">0:00</p>
                <p class="right">2:06</p>
            </div>
            <div class="prog-bar">
                <div class="prog-bar-inner"></div>
            </div>
        </div>  
        <ul class="buttons">
            <a href="#" class="button button-sm">
                <i class="fas fa-random fa-sm" aria-hidden="true"></i>
                <span class="sr-only">Shuffle</span>
            </a>
            <a href="#" class="button button-md">
                <i class="fas fa-step-backward" aria-hidden="true"></i>
                <span class="sr-only" onClick={() => switch_function(-1)}></span>
            </a>
            <a href="#" class="button button-lg">
                <i class="fas fa-pause fa-lg" aria-hidden="true" ></i>
                <span class="sr-only" onClick={() => play_function(-1)}>{playStatus}</span>
            </a>
            <a href="#" class="button button-md">
                <i class="fas fa-step-forward"></i>
                <span class="sr-only" onClick={() => switch_function(1)}></span>
            </a>
            <a href="#" class="button button-sm">
                <i class="fas fa-circle-notch fa-sm" aria-hidden="true"></i>
                <span class="sr-only">Repeat Song</span>
            </a>
        </ul>   
        <div class="bar"></div> 
    </main>
		</>
	);
};

