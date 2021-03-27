const router = require('express').Router();
const { User, Record } = require('../models');

router.get('/', async (req, res) => {
  try {
    const recordData = await Record.findAll({
      order: [['record_name', 'ASC']],
    });

    const records = recordData.map((project) => project.get({ plain: true }));

    res.render('crates', {
      records,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;