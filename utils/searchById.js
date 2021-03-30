// var Discogs = require('disconnect').Client;
const fetch = require("node-fetch");

async function getRecordById(routeResponse, masterId) {
	var apiKey = process.env.API_KEY;
	var apiSecret = process.env.API_SECRET;
	// var genre = "jazz";
	// var artist = "Stanley Clarke";

	console.log("HELLO!")



	// var queryUrl = `https://api.discogs.com/database/search?key=${apiKey}&secret=${apiSecret}&genre=${genre}&artist=${artist}&per_page=15&page=1`;
	// var imageQueryURL = "https://api.discogs.com/masters/{id}?key=nvWMvkXWSygfbACCOVQc&secret=mDVWMOCUTByoFszZgQyjUBnYcYbjnkYB"


    var queryUrl = `https://api.discogs.com/masters/${masterId}`

	// ?key=${apiKey}&secret=${apiSecret}`; 

	let response = await fetch(queryUrl);
	let data = await response.json();
	var songs = data.tracklist;
	console.log(songs);
	console.log(songs.length);
	let filteredTrackList = [];
	function getTracks(tracks){
		for (i=0; i<tracks.length; i++) {
			if (tracks[i].position === ''){
				console.log("no Title")
			} else {
				let track = tracks[i].title;
				console.log(track);
				filteredTrackList.push(track);
			}
			
		}
		return filteredTrackList;
	}
	let youtubeUrl = data.videos[0].uri
	let youtubeId = youtubeUrl.split('=');
	getTracks(songs);
	const recordData = {
			inventory: data.num_for_sale,
			release_date: data.year,
			artists: data.artists[0].name,
			title: data.title,
			tracks: filteredTrackList,
			videoUrl: youtubeId[1]
		};
	console.log(recordData);
	return routeResponse.json(recordData);
}

module.exports = getRecordById;