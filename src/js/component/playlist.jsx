import React from "react";
import { useState, useEffect, useRef } from "react";


//create your first component
export const Playlist = () => {
	const [currentSong, setCurrentSong] = useState(0);
	const [playStatus, setPlayStatus] = useState('fa-solid fa-play fa-2xl');
	const [playT, setPlayT] = useState(false);
	const [volumeT, setVolumeT] = useState(0.5);
	const [volumeE, setVolumeE] = useState('fa-solid fa-volume-low fa-xl');
	const [songP, setSongP] = useState(0);
	const [stepS, setStepS] = useState(0);


	//	const[songArr, setSongArr]=useState([0,1,2]);
	let interval;
	let delay = 1000;
	let startPress = null;
	let playlistSong = [
		{
			title: "South Park",
			id: "south-park",
			author: "Kyle",
			url:
				" https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
		},
		{
			title: "Thunder Cats",
			id: "thundercats",
			author: "Moonra",
			url:
				"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
		},
		{
			title: "X-Men",
			id: "x-men",
			author: "Profesor",
			url:
				"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
		},

		{
			title: "Time over",
			id: "x-men",
			author: "Chris",
			url:
				"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
		},
		{
			title: "Thunder",
			id: "thundercats",
			author: "One Direction",
			url:
				"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
		}
	];

	var audioTest = 0;
	// useEffect(() => {
	// 	return () => stopCounter(); // when App is unmounted we should stop counter
	//   }, []);

	useEffect(() => {
		if (playT == true) {

			interval = setInterval(() => {

			
				setSongP(songP + stepS);
			
				// console.log('this part runs second ' + Math.floor(audioTest.duration/100));



			}, 1000);
			return () => clearInterval(interval);
		}

		else {
			setSongP(0);
		}

	}, [playT,songP]);



	function play_function(id) {

		if (id == null) {
			if (playT == false) {

				setPlayStatus('fa-solid fa-pause fa-2xl');
				console.log(audioTest);
				audioTest.src = playlistSong[currentSong].url;
				audioTest.play();
				setStepS(Math.floor(audioTest.duration/100));
				setPlayT(true);
			}

			else {

				setPlayStatus('fa-solid fa-play fa-2xl');
				audioTest.pause();
				setPlayT(false);


			}
		}

		else {

			if (playT == false) {

				setPlayStatus('fa-solid fa-pause fa-2xl');
				setCurrentSong(id);
				audioTest.src = playlistSong[currentSong].url;
				audioTest.play();
				setStepS(Math.floor(audioTest.duration/100));
				setPlayT(true);
			}

			else {

				setPlayStatus('fa-solid fa-play fa-2xl');
				audioTest.currentTime = 0;
				audioTest.play();
				setPlayT(false);


			}



		}

	}

	function previous_function() {

		setCurrentSong(currentSong - 1);
		audioTest.src = playlistSong[currentSong].url;
		audioTest.play();

	}

	function next_function(id) {

		setCurrentSong(currentSong + 1);
		audioTest.src = playlistSong[currentSong].url;
		audioTest.play();
	}


	// function sendDuration () {
	// 	setStepS(Math.floor(audioTest.duration/100));
	// 	alert('this song is'+stepS+'long');

	// }


	function counterDown() {
		startPress = Date.now();
	}

	function counterUp() {
		if (Date.now() - startPress > delay) {
			setVolumeE('fa-solid fa-volume-xmark fa-xl');

			audioTest.muted = true;
		}
		else {

			setVolumeT(volumeT - 0.1);
			audioTest.volume = volumeT;
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
			setVolumeT(volumeT + 0.1);
			audioTest.volume = volumeT;
			setVolumeE('fa-solid fa-volume-low fa-xl');
		}

	}


	return (
		<div className="container">

			<div className="head_div">
				<h1>My Playlist</h1>
				<hr />
			</div>

			<div className="playlist_div">

				{
					playlistSong.map((element, index) => 
						<div class="track-title">
							<span class="playlist-track" href="#" data-play-track="1" onClick={() => play_function(0)}><h4>{playlistSong[index].title}</h4></span>
							<p>{playlistSong[index].author}</p>
						</div>
					)
				}


				<audio ref={(e) => audioTest = e} preload="metadata" id="testTone" />

			</div>



			<div className="audio_div">


				<div class="ui-controls">
					<input type="range" class="ui-slider" min="1" max="100" value={songP} step={stepS} />
					<span onClick={() => previous_function()}><i class="fa-solid fa-backward fa-xl" ></i></span>

					<span onClick={() => play_function()}><i className={playStatus} ></i></span>
					<span onClick={() => next_function()}><i class="fa-solid fa-forward fa-xl"></i></span>
					<span onClick={() => random_function()}><i class="fas fa-random fa-xl"></i></span>
					<span><i class="fa-solid fa-repeat fa-xl"></i></span>
					<span onMouseDown={() => counterDown()} onMouseUp={() => counterUp()} >
						<i title='press or press and hold for 2 seconds to mute' className={volumeE}></i></span>

					<span onClick={() => volume_up()} ><i class="fa-solid fa-volume-high fa-xl"> </i></span>
				</div>

			</div>


		</div>
	);
};

