const router = require('express').Router();
const { User, Record } = require('../models');
const withAuth = require('../utils/auth');


// router.get('/', async (req, res) => {
//   try {

//     res.render('crates', {
      
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/', withAuth, async (req, res) => {
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
    
    const user_crates = crateData.map((user_crate) => 
    user_crate.get( { plain: true })
    );
    res.render('crates', {
      user_crates,
      logged_in: req.session.logged_in,
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});
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