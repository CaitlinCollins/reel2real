const router = require('express').Router();
const { User, Record } = require('../models');

router.get('/',  async (req, res) => {
    try {
        res.render('search', {
            loggedIn: req.session.loggedIn,
          });
    }catch (err){
        res.status(500).json(err);
      }
});
module.exports = router;