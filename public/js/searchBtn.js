const search = async (event) => {
    event.preventDefault();
    
    // Trim and get the value of the search input.
    const artist = document.querySelector('#search-artist').value.trim();

    // var postBody = {
    //     record_name: record_name,
    //     genre: genre,
    //     price: price,
    //     masterId: masterId,
    //     imageUrl: imageUrl,
    //     resourceUrl: resourceUrl,
    // }
    // If search input exists, go to get route.
    if (artist) {
        const response = await fetch('/search/results', 
        {
            method: 'GET',
            body: JSON.stringify(artist),
            headers: {'Content-type': 'application/json'},
        }
        )};

    // If everything is ok, refresh the page.
    if (response.ok) {
        window.location.reload();
    }
    else {
        console.log('Search failed.')
    }
};

document.querySelector('#searchBtn').addEventListener('click', search);