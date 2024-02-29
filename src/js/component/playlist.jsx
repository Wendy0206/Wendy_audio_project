import React from "react";
import {useState, useEffect } from "react";


//include images into your bundle

//create your first component
export const Playlist = () => {
	const[currentSong, setCurrentSong]=useState(0);
	const[playStatus, setPlayStatus]=useState('fa-solid fa-play fa-2xl');
	var audioTest;
let playlistSong=	[
		{
			title: "South Park",
			id: "south-park",
			author: "Kyle",
			url:
				"https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
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
		}
	];

useEffect(()=>{


},[]);


function play_function (id){
if(audioTest.paused){
	setPlayStatus('fa-solid fa-play fa-2xl');
	
	//audioTest= new Audio(playlistSong[currentSong].url);
   audioTest.play();
}
else{
	setPlayStatus('fa-solid fa-pause fa-2xl');
	setCurrentSong(id);
	audioTest= new Audio(playlistSong[currentSong].url);
   audioTest.play();
}


	 }

	 

		 function previous_function (){
			setCurrentSong(currentSong-1);
				audioTest= new Audio(playlistSong[currentSong].url);
				audioTest.play();
				 }

		 function next_function (id){
			setCurrentSong(currentSong+1);
			 audioTest= new Audio(playlistSong[currentSong].url);
			audioTest.play();
			 }

			


return (
		<div className="container">

			<div className="head_div">
				<h1>My Playlist</h1>
				<hr/>
			</div>

			<div className="playlist_div">


      <div class="track-title"> 
        <span class="playlist-track" href="#" data-play-track="1" onClick={()=> play_function(0)}><h4>{playlistSong[0].title}</h4></span>
		<p>{playlistSong[0].author}</p>
      </div>
	

      <div class="track-title">
	  <span class="playlist-track" href="#" data-play-track="1" onClick={()=> play_function(1)}><h4>{playlistSong[1].title}</h4></span>
	  <p>{playlistSong[1].author}</p>
      </div>

      <div class="track-title">
	  <span class="playlist-track" href="#" data-play-track="1" onClick={()=> play_function(2)}><h4>{playlistSong[2].title}</h4></span>
	  <p>{playlistSong[2].author}</p>
      </div>

	  <audio  title="Track 1" >
	 
	  </audio>
			</div>

			



			<div className="audio_div">
<div class="ui-seekbar">
<input type="range" class="ui-slider" min="1" max="1200" value="0"/>
</div>

<div class="ui-controls">
<span><i class="fa-solid fa-backward fa-2xl" onClick={()=> previous_function()}></i></span>

<span><i className={playStatus} onClick={()=> play_function()}></i></span>
<span><i class="fa-solid fa-forward fa-2xl" onClick={()=> next_function()}></i></span>
<span><i class="fas fa-random fa-2xl"></i></span>
<span><i class="fas fa-redo fa-2xl"></i></span>
</div>

	</div> 

	
		</div>
	);
};

