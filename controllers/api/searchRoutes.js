//import api search logic in helper folder called utils
const fetch = require("node-fetch");
const getSearch = require("../../utils/search")

const router = require('express').Router();
const { User, Record } = require('../../models');

router.get('/', async (req, res) => {
  try {
    res.render('search');
    return;
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:userArtistSearch', async (req, res) => {
    try{
      // const records = getSearch(res).map((project) => project.get({plain: true}))
      // res.render('search', {})
      getSearch(res, req.params.userArtistSearch)
    } catch (err) {
      console.log(err);
    }
})

module.exports = router;
