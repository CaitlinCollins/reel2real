const router = require('express').Router();
const { User, } = require('../models');
const withAuth = require('../utils/auth');

router.get(['/', '/home'], async (req, res) => {
  console.log("user status ---------------------------", req.session.logged_in)
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ['password'] },
    //   order: [['name', 'ASC']],
    // });

    // const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/search',  async (req, res) => {
  try {
      res.render('search', {
          logged_in: req.session.logged_in,
        });
  }catch (err){
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signup', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }
  res.render('signup');

});

module.exports = router;
