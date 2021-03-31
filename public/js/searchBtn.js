
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
            // console.log(results);
            // console.log(results.length);
            if (results.length === 0) {
                document.querySelector("#recordList").textContent = "No results found for this search. Please try again."
              }  
            

            function renderDivs(i, results) {

                var name = results[i].record_name;
                var genre = "Genre: " + results[i].genre;
                var price = "Price: $" + results[i].price;
                var imageSrc = results[i].imageUrl;
                var mainUrl = results[i].resourceUrl;
                var masterId = results[i].masterId;

                var newRecord = document.createElement('div');
                newRecord.setAttribute("class", "card new-record");
               

                var newImage = document.createElement('img');
                newImage.setAttribute("src", imageSrc);
                newImage.setAttribute("class", "record-image");
                newImage.setAttribute("id", "recordImage" + i);
                newImage.setAttribute("alt", name);

                var newRecordName = document.createElement('h3');
                newRecordName.setAttribute("class", "record-name");
                newRecordName.setAttribute("id", masterId)
                newRecordName.textContent = name;

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
                addButton.textContent = "Add to My Crate!";
                addButton.setAttribute("class", "crate-button");
                addButton.setAttribute("id", "crate-button-" + i);
                addButton.setAttribute("data-id", i);
                addButton.addEventListener('click', postOneRecord);

                var moreInfoBtn = document.createElement('button');
                moreInfoBtn.setAttribute("class", "more-button");
                moreInfoBtn.setAttribute("id", "more-button-" + i);
                
                moreInfoBtn.innerHTML = '<a href = "/record/' + masterId + '" title = "' + name + '">Tell Me More!</a>'

                newRecord.id = "record-index-" + i;
                newRecord.appendChild(newImage);
                newRecord.appendChild(newRecordName);
                newRecord.appendChild(newGenre);
                newRecord.appendChild(newPrice);
                newRecord.appendChild(moreInfoBtn);
                newRecord.appendChild(addButton);
                document.querySelector("#recordList").append(newRecord);
               
                
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