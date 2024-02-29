import React from "react";
import {useState, useEffect } from "react";


//include images into your bundle

//create your first component
export const Playlist = () => {
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
alert('test');
let audiotest= (playlistSong[id].url);
 }

// function func1 (){
    
// }
// function func1 (){
    
// }


return (
		<div className="container">

			<div className="head_div">
				<h1>My Playlist</h1>
				<hr/>
			</div>

			<div className="playlist_div">


      <div class="track-title"> 
        <span class="playlist-track" href="#" data-play-track="1" onClick={()=> play_function(1)}><h4>{playlistSong[0].title}</h4></span>
		<p>{playlistSong[0].author}</p>
      </div>

    <div class="play-list-row" data-track-row="2">
      
			</div>
			

      <div class="track-title">
	  <span class="playlist-track" href="#" data-play-track="1" onClick={()=> play_function(2)}><h4>{playlistSong[1].title}</h4></span>
	  <p>{playlistSong[1].author}</p>
      </div>

    <div class="play-list-row" data-track-row="2">
      
			</div>

      <div class="track-title">
	  <span class="playlist-track" href="#" data-play-track="1" onClick={()=> play_function(3)}><h4>{playlistSong[2].title}</h4></span>
	  <p>{playlistSong[2].author}</p>
      </div>

    <div class="play-list-row" data-track-row="2">
      
			</div>


			</div>

			




			<div className="audio_div">
			<div class="text-center p-8 rounded" style={{backgroundColor : "rgba(0, 0, 0, 0.05)"}}>
			<audio controls   title="Track 1" >
    			<source src={playlistSong[0].url} data-track-number="1" />
    			<source src={playlistSong[0].url} data-track-number="2" />
                <source src={playlistSong[0].url} data-track-number="3" />
    			<source src={playlistSong[0].url} data-track-number="4" />
                <source src={playlistSong[0].url} data-track-number="5" />
    			                      
                Your browser does not support HTML5 audio.
                </audio>
             </div>
		
				</div>
		</div>
	);
};


