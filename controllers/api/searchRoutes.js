//import api search logic in helper folder called utils
const fetch = require("node-fetch");
const getSearch = require("../../utils/search")


const router = require('express').Router();
const { User, Record } = require('../../models');
const withAuth = require("../../utils/auth");

router.get('/', withAuth, async (req, res) => {
  try {
    res.render('search', {
      logged_in: req.session.logged_in,
    });
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

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
