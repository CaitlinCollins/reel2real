
const byId = async (event) => {
    event.preventDefault();
    //
    var url = window.location.href;
    const masterId = url.split('/')[3];
    console.log(masterId);

    // If search input exists, go to get route.
    if (masterId) {
        const response = await fetch(`/api/id/${masterId}`);
        if (response.ok) {
            let results = await response.json();

            console.log(results);

            var songs = results.tracks
            var str = ''
            songs.forEach(function(song) {
                str += '<li>' + song + '</li>'
            })

            

            var album = results.title
            var artist = "Artist: " + results.artists;
            var inventory = "Inventory: " + results.inventory + " in stock"
            var date = "Released in " + results.release_date
            
            var youtubeId = results.videoUrl
            

                var newRecord = document.createElement('div');
                newRecord.setAttribute("class", "card new-record");

                var newVideo = document.createElement('p')
                newVideo.innerHTML = '<iframe width="560" height="315" src="http://www.youtube.com/embed/' + youtubeId + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

                var newRecordName = document.createElement('h3');
                newRecordName.setAttribute("class", "record-name");
                newRecordName.innerHTML = album;

                var newArtist = document.createElement('h3')
                newArtist.setAttribute("class", 'price');
                newArtist.textContent = artist;

                var newDate = document.createElement('h3')
                newDate.setAttribute("class", 'genre')
                newDate.textContent = date;

                var newInventory = document.createElement('h3')
                newInventory.setAttribute("class", 'genre')
                newInventory.textContent = inventory;

                

                var newTrackList = document.createElement('ol')
                newInventory.setAttribute("class", 'track-list')
                newTrackList.innerHTML = str;
                
                var addButton = document.createElement('button');
                addButton.textContent = "Add to My Crate!";
                addButton.setAttribute("class", "crate-button");

                var backButton = document.createElement('button');
                backButton.textContent = "Back to search!";
                backButton.setAttribute("class", "crate-button");

                newRecord.appendChild(newVideo);
                newRecord.appendChild(newRecordName);
                newRecord.appendChild(newArtist);
                newRecord.appendChild(newTrackList);
                newRecord.appendChild(backButton);
                newRecord.appendChild(addButton);
                document.querySelector("#recordInfo").append(newRecord);

        };
    }
}

    // If everything is ok, refresh the page.
  

window.onload = byId