const router = require('express').Router();
const { User, Record } = require('../../models');
// const albumInfo = require('../../../Spotify Test/spot')
// console.log(getR)

router.get('/', async (req, res) => {
  try {
    const recordData = await Record.findAll({
      order: [['record_name', 'ASC']],
    });

    const records = recordData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      records,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;