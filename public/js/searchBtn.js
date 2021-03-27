const search = async (event) => {
    event.preventDefault();
    
    // Trim and get the value of the search input.
    const artist = document.querySelector('#search-artist').value.trim();

    // If search input exists, go to get route.
    if (artist) {
        const response = await fetch(`/api/search/${artist}`, 
        {
            method: 'GET',
            body: JSON.stringify(artist),
            headers: {'Content-type': 'application/json'},
        }
        )};

    // If everything is ok, refresh the page.
    if (response.ok) {
        console.log(response);
    }
    else {
        console.log('Search failed.')
    }
};

document.querySelector('#searchBtn').addEventListener('click', search);