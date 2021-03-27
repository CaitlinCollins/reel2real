const { Record } = require('../models');
const recordData =
[
    {
        "record_name": "RTJ4",
        "genre": "Hip-Hop",
        "price": "10.99",
        "masterId": "383838",
        "imageUrl": "RTJ4.jpeg",
        "resourceUrl": "https://open.discogs.com/album/6cx4GVNs03Pu4ZczRnWiLd?si=EfugnwovSXKITUTAZKOefg"
    },
    {
        "record_name": "Random Acess Memories",
        "genre": "Electronic",
        "price": "9.99",
        "masterId": "4123423",
        "imageUrl": "RAM.jpeg",
        "resourceUrl": "https://open.discogs.com/album/4m2880jivSbbyEGAKfITCa?si=0z7_cwSYTNe9S21Y4srQmw"
    },
    {
        "record_name": "Make It Big",
        "genre": "Pop",
        "price": "8.99",
        "masterId": "194900",
        "imageUrl": "wham.jpeg",
        "resourceUrl": "https://open.discogs.com/album/02f3y3NTsddjdUMoNiBppI?si=wuKnQ0wmQw2Y2gp7vf-xJg"
    },
    {
        "record_name": "Ride the Lightning",
        "genre": "Metal",
        "price": "8.99",
        "masterId": "1010220",
        "imageUrl": "ridethelightning.jpeg",
        "resourceUrl": "https://open.discogs.com/album/2omIeSJEGQeKHPOpiXgfkr?si=sFm6hpL-RN2fuUFj02ajRQ"
    },
    {
        "record_name": "A Night at the Opera",
        "genre": "Rock",
        "price": "11.99",
        "masterId": "1221122",
        "imageUrl": "queen.jpeg",
        "resourceUrl": "https://open.discogs.com/album/3KCJzwKOdBxDu6TKaFPqM9?si=llgXk-jLQ9K2qgbg0TnpGw"
    }
];
const seedRecords = () => Record.bulkCreate(recordData);

module.exports = seedRecords;