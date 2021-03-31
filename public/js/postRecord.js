const addToCrate = async (record_name, genre, price, imageUrl, masterId) => {
  const response = await fetch('/api/user-crates', {
    method: 'POST',
    body: JSON.stringify({ 
      record_name, 
      genre,
    price,
    imageUrl,
    masterId
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

function postOneRecord(event) {
  event.preventDefault();
  console.log(event.target.parentElement.children);
  let image = event.target.parentElement.children[0].src;
  let master = event.target.parentElement.children[1].id;
  let recordName = event.target.parentElement.children[1].innerText;
  let newGenre = event.target.parentElement.children[2].innerText;
  let priceTag = event.target.parentElement.children[3].innerText.split('$')[1];
  const record = {
    imageUrl: image,
    record_name: recordName,
    price: priceTag,
    genre: newGenre,
    masterId: master
  }
  console.log(record);
  addToCrate(record.record_name, record.genre, record.price, record.imageUrl, record.masterId);
  alert(record.record_name + " added to crate.")
  // console.log(this);
}