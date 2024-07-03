import React from "react";
import { useState, useEffect, useRef } from "react";


//create your first component
export const Playlist = () => {
	const currentSong = useRef(0);
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

	const getSongs = () => {

		var client_id = 'cfc0b81bea4641cbb51c4e9a3d2ecaa8';
		var client_secret = '7c4058cf53d745a39017ec617e368ecf';
		
		var authOptions = {
		  url: 'https://accounts.spotify.com/api/token',
		  headers: {
			'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
		  },
		  form: {
			grant_type: 'client_credentials'
		  },
		  json: true
		};
		
		request.post(authOptions, function(error, response, body) {
		  if (!error && response.statusCode === 200) {
			var token = body.access_token;
			console.log('this is the token we get fro mthe token : '+ token);
		  }
		});

	}

	useEffect(() => {
		
//getSongs();
	}, []);	

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

	// 	if (volumeT == 0) {
	// 		setVolumeT(0.5);
	// 	}
	// 	else {
	// 		if(volumeT<1){
	// 			setVolumeT(volumeT + 0.1);
	// 			setVolumeE('fa-solid fa-volume-low fa-xl');
	// 		}
	// 	}
	// }else{

	// 	if(volumeT<1 && volumeT>0){
	// 		setVolumeT(volumeT - 0.1);
	// 		setVolumeE('fa-solid fa-volume-low fa-xl');
	// 	}
	// }
	// audioTest.volume = volumeT;
const get_duration=(e)=>{
	setStepS(Math.floor((e.target.duration * 1000) / 100));
	let test= Math.floor((e.target.duration * 1000) / 100);
	console.log(' This is the step at which we are going to move : '+test);
}

	return (
		<div className="container">

			<div className="head_div">
				<h1>My Playlist</h1>
				<hr />
			</div>

			<div className="playlist_div">
				{
					playlistSong.map((el, index) =>
						<div className="track-title" key={index}>
							<span className="playlist-track" href="#" data-play-track="1" onClick={() => play_function(index)}><h4>{playlistSong[index].title}</h4></span>
							<p>{playlistSong[index].author}</p>
						</div>
					)
				}
				<audio ref={(e) => audioTest = e} preload="metadata" id="testTone" onLoadedMetadata={(e)=>get_duration(e)} />

			</div>

			<div className="audio_div">
				<div className="ui-controls">
					<input type="range" className="ui-slider" min="1" max="100" value={songP} step={1} />
					<span onClick={() => switch_function(-1)}><i className="fa-solid fa-backward fa-xl" ></i></span>
					<span onClick={() => play_function(-1)}><i className={playStatus} ></i></span>
					<span onClick={() => switch_function(1)}><i className="fa-solid fa-forward fa-xl"></i></span>
					<span onClick={() => random_function()}><i className="fas fa-random fa-xl"></i></span>
					<span><i className="fa-solid fa-repeat fa-xl"></i></span>
					<span onMouseDown={() => counterDown()} onMouseUp={() => counterUp()} >
						<i title='press or press and hold for 2 seconds to mute' className={volumeE}></i></span>
					<span onClick={() => volume_up()} ><i className="fa-solid fa-volume-high fa-xl"> </i></span>
				</div>

			</div>

		</div>
	);
};

