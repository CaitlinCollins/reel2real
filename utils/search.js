// var Discogs = require('disconnect').Client;
const fetch = require("node-fetch");

async function getSearch(routeResponse, artistSearch) {
	var apiKey = process.env.API_KEY;
	var apiSecret = process.env.API_SECRET;
	var genre = "jazz";
	var artist = "Stanley Clarke";



	// var queryUrl = `https://api.discogs.com/database/search?key=${apiKey}&secret=${apiSecret}&genre=${genre}&artist=${artist}&per_page=15&page=1`;
	// var imageQueryURL = "https://api.discogs.com/masters/{id}?key=nvWMvkXWSygfbACCOVQc&secret=mDVWMOCUTByoFszZgQyjUBnYcYbjnkYB"


    var queryUrl = `https://api.discogs.com/database/search?key=${apiKey}&secret=${apiSecret}&artist=${artistSearch}&per_page=15&page=1`; 

	let response = await fetch(queryUrl);
	let data = await response.json();
	let recordsArray = data.results;

	const filteredRecords = [];
	for (i = 0; i < recordsArray.length; i++) {
		const newRecord = {
			record_name: recordsArray[i].title,
			genre: recordsArray[i].genre[0],
			price: 10.0,
			masterId: recordsArray[i].master_id,
			imageUrl: recordsArray[i].cover_image,
			resourceUrl: recordsArray[i].resource_url,
		};
		filteredRecords.push(newRecord);
	}
	// console.log(filteredRecords);
	return routeResponse.json(filteredRecords);
}

module.exports = getSearch;
