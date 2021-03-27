//import api search logic in helper folder called utils
const fetch = require("node-fetch");
const getSearch = require("../utils/search")



const router = require('express').Router();
const { User, Record } = require('../models');

router.get('/',  async (req, res) => {
    try {
        res.render('search', {
            logged_in: req.session.logged_in,
          });
    }catch (err){
        res.status(500).json(err);
      }
});

router.get('/results', async (req, res) => {
    try{
      getSearch(res)
    } catch (err) {
      console.log(err);
    }
})

module.exports = router;
