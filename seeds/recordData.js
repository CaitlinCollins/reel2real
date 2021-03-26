const { Record } = require('../models');
const recordData =
[
    {
        "record_name": "RTJ4",
        "price": "10.99",
        "genre": "Hip-Hop",
        "imageUrl": "RTJ4.jpeg",
        "spotifyUrl": "https://open.spotify.com/album/6cx4GVNs03Pu4ZczRnWiLd?si=EfugnwovSXKITUTAZKOefg"
    },
    {
        "record_name": "Random Acess Memories",
        "price": "9.99",
        "genre": "Electronic",
        "imageUrl": "RAM.jpeg",
        "spotifyUrl": "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa?si=0z7_cwSYTNe9S21Y4srQmw"
    },
    {
        "record_name": "Make It Big",
        "price": "8.99",
        "genre": "Pop",
        "imageUrl": "wham.jpeg",
        "spotifyUrl": "https://open.spotify.com/album/02f3y3NTsddjdUMoNiBppI?si=wuKnQ0wmQw2Y2gp7vf-xJg"
    },
    {
        "record_name": "Ride the Lightning",
        "price": "8.99",
        "genre": "Metal",
        "imageUrl": "ridethelightning.jpeg",
        "spotifyUrl": "https://open.spotify.com/album/2omIeSJEGQeKHPOpiXgfkr?si=sFm6hpL-RN2fuUFj02ajRQ"
    },
    {
        "record_name": "A Night at the Opera",
        "price": "11.99",
        "genre": "Rock",
        "imageUrl": "queen.jpeg",
        "spotifyUrl": "https://open.spotify.com/album/3KCJzwKOdBxDu6TKaFPqM9?si=llgXk-jLQ9K2qgbg0TnpGw"
    }
];
const seedRecords = () => Record.bulkCreate(recordData);

module.exports = seedRecords;