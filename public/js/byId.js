
const byId = async () => {
    //
    var url = window.location.href;
    const masterId = url.split('/')[4];
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
            var artist = " - " + results.artists;
            var inventory = "Inventory: " + results.inventory + " in stock!"
            var date = "Released in " + results.release_date
            
            var youtubeId = results.videoUrl

                var newRecord = document.createElement('div');
                newRecord.setAttribute("class", "card record-by-id");

                var newVideo = document.createElement('p')
                newVideo.innerHTML = '<iframe width="560" height="315" src="http://www.youtube.com/embed/' + youtubeId + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                
                newVideo.setAttribute("class", "video-embed")

                var newRecordName = document.createElement('h3');
                newRecordName.setAttribute("class", "record-name");
                newRecordName.innerHTML = album + artist;

                // var newArtist = document.createElement('h3')
                // newArtist.setAttribute("class", 'price');
                // newArtist.textContent = date;

                var newDate = document.createElement('h3')
                newDate.setAttribute("class", 'price')
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
                backButton.setAttribute("class", "back-button");
                backButton.innerHTML = '<a href = "/api/search">Back to search!</a>'
        
                newRecord.appendChild(newVideo);
                newRecord.appendChild(newRecordName);
                newRecord.appendChild(newDate);
                newRecord.appendChild(newTrackList);
                newRecord.appendChild(newInventory);
                newRecord.appendChild(backButton);
                // Ice-boxing this button
                // newRecord.appendChild(addButton);
                document.querySelector("#recordInfo").append(newRecord);


        };
    }
}

    // If everything is ok, refresh the page.
  

byId();

