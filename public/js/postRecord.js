const newRecord = async (event) => {
    event.preventDefault();
    var recordDivs = document.getElementsByClassName('new-record');
        console.log(recordDivs.length);
    var check = function() {
      if (recordDivs.length===0) {
      setTimeout(check, 1000);
      console.log(recordDivs.length);
      } else {
        console.log(recordDivs.length);
        let filteredRecords = [];
        
        
        for (i = 0; i < recordDivs.length; i++){
          let image = recordDivs[i].querySelector('.record-image').src;
          let recordName = recordDivs[i].querySelector('.record-name').textContent;
          let newGenre = recordDivs[i].querySelector('.genre').textContent;
          let priceTag = recordDivs[i].querySelector('.price').textContent.split('$')[1];
          const newRecord = {
            imageUrl: image,
            record_name: recordName,
            price: priceTag,
            genre: newGenre
          }
          console.log(newRecord);
          filteredRecords.push(newRecord);
        }
      }
    }
    check();
    const addToCrate = async (record_name, genre, price, imageUrl) => {
      const response = await fetch('/api/user-crates', {
        method: 'POST',
        body: JSON.stringify({ 
          record_name, 
          genre,
        price,
        imageUrl,
    }),
        headers: { 
          'Content-Type': 'application/json' 
        },
      });

      if (response.ok) {
        // document.location.replace('/crates');
        console.log("added to cart")
      } else {
        console.log('Failed to create new post');
      }
    };
}

var dataNum = document.querySelector(`[data-id="${i}"]`);
          console.log(dataNum);
          document.querySelector(`[data-id="${i}"]`).addEventListener('click', addToCrate(newRecord.record_name, newRecord.genre, newRecord.price, newRecord.imageUrl));