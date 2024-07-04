import React from "react";
import { Playlist } from "./playlist";
import { Media } from "./mediaplayer";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Media/>			
		</div>
	);
};

export default Home;
