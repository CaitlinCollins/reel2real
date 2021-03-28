const search = async (event) => {
    event.preventDefault();
    
    // Trim and get the value of the search input.
    const artist = document.querySelector('#search-artist').value.trim();
    console.log(artist);

    // If search input exists, go to get route.
    if (artist) {
        const response = await fetch(`/api/search/${artist}`);
        

        if (response.ok) {
            let results = await response.json();
            console.log(results);
            return results;
        }
        else {
            console.log('Search failed.')
        }
    };
}

    // If everything is ok, refresh the page.
  

document.querySelector('#searchBtn').addEventListener('click', search);

// 