const router = require('express').Router();
const { User, Record } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {

    res.render('crates', {
      
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/crates', withAuth, async (req, res) => {
  try {
    const crateData = await Record.findAll(
      {
      include: [
        {
          model: User,
          attributes: [
            'id',
          ],
        },
      ],
        where: {
          user_id: req.session.user_id,
        }
      });
    
    const user_crate = crateData.map((user_crate) => 
    user_post.get( { plain: true })
    );
    res.render('crates', {
      user_posts,
      loggedIn: req.session.loggedIn,
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;