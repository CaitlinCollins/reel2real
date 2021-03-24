const { Record } = require('../models');
const recordData =
[
    {
        "albumname": "RTJ4",
        "price": "10.99",
        "genre": "Hip-Hop",
        "img": "RTJ4.jpeg",
        "spotifyurl": "https://open.spotify.com/album/6cx4GVNs03Pu4ZczRnWiLd?si=EfugnwovSXKITUTAZKOefg"
    },
    {
        "albumname": "Random Acess Memories",
        "price": "9.99",
        "genre": "Electronic",
        "img": "RAM.jpeg",
        "spotifyurl": "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa?si=0z7_cwSYTNe9S21Y4srQmw"
    },
    {
        "albumname": "Make It Big",
        "price": "8.99",
        "genre": "Pop",
        "img": "wham.jpeg",
        "spotifyurl": "https://open.spotify.com/album/02f3y3NTsddjdUMoNiBppI?si=wuKnQ0wmQw2Y2gp7vf-xJg"
    },
    {
        "albumname": "Ride the Lightning",
        "price": "8.99",
        "genre": "Metal",
        "img": "ridethelightning.jpeg",
        "spotifyurl": "https://open.spotify.com/album/2omIeSJEGQeKHPOpiXgfkr?si=sFm6hpL-RN2fuUFj02ajRQ"
    },
    {
        "albumname": "A Night at the Opera",
        "price": "11.99",
        "genre": "Rock",
        "img": "queen.jpeg",
        "spotifyurl": "https://open.spotify.com/album/3KCJzwKOdBxDu6TKaFPqM9?si=llgXk-jLQ9K2qgbg0TnpGw"
    }
];
const seedRecords = () => User.bulkCreate(recordData);

module.exports = seedRecords;