
const search = async (event) => {
    event.preventDefault();
    document.querySelector("#recordList").innerHTML="";
    // Trim and get the value of the search input.
    const artist = document.querySelector('#search-artist').value.trim();
    console.log(artist);

    // If search input exists, go to get route.
    if (artist) {
        
        const response = await fetch(`/api/search/${artist}`);
        

        if (response.ok) {
            let results = await response.json();
            console.log(results);
            

            function renderDivs(i, results){

                var name = results[i].record_name;
                var genre = "Genre: " + results[i].genre;
                var price = "Price: $" + results[i].price + ".00";
                var imageSrc = results[i].imageUrl;
                var mainUrl = results[i].resourceUrl;

                var newRecord = document.createElement('div');
                newRecord.setAttribute("class", "card new-record");

                var newImage = document.createElement('img');
                newImage.setAttribute("src", imageSrc);
                newImage.setAttribute("class", "record-image");
                newImage.setAttribute("id", "recordImage" + i);
                newImage.setAttribute("alt", results.record_name);

                var newRecordName = document.createElement('h3');
                newRecordName.setAttribute("class", "record-name");
                newRecordName.setAttribute("id", 'record-title-' + i)
                newRecordName.innerHTML = '<a class= "record-name" href = ' + mainUrl + '>' + name + '</a>';

                var newGenre = document.createElement('h3')
                newGenre.setAttribute("class", 'genre')
                newGenre.setAttribute("id", 'genre-id-' + i)
                newGenre.textContent = genre;

                var newPrice = document.createElement('h3')
                newPrice.setAttribute("class", 'price');
                newPrice.textContent = price;
                

                newImage.setAttribute("alt", name);
                // var newRecordName = document.querySelector('#recordName').innerHTML = '<a href = "' + mainUrl + '">' + name + '</a>'

                // var newGenre =document.querySelector('#recordGenre').textContent = genre;
                // var newPrice = document.querySelector('#recordPrice').textContent = price;
                
                var addButton = document.createElement('button');
                addButton.textContent = "Add to My Crate";
                addButton.setAttribute("class", "crate-button");
                addButton.setAttribute("id", "crate-button-" + i);

                newRecord.id = "record-index-" + i;
                newRecord.appendChild(newImage);
                newRecord.appendChild(newRecordName);
                newRecord.appendChild(newGenre);
                newRecord.appendChild(newPrice);
                newRecord.appendChild(addButton);
                document.querySelector("#recordList").append(newRecord);

                console.log(name + genre + price + imageSrc + mainUrl);
                
                }

            for (i=0; i<results.length; i++) {

                renderDivs(i, results);
                
                
            }
            
        }
        else {
            console.log('Search failed.')
        }
    };
}

    // If everything is ok, refresh the page.
  

document.querySelector('#searchBtn').addEventListener('click', search);


// 