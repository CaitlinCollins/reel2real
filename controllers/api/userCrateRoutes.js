const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Record } = require('../../models');

router.get('/', withAuth, async (req, res) => {
    try {
    const postData = await Record.findAll({
      attributes: ['id',
    'record_name',
    'genre',
    'price',
    'imageUrl'],
    include: [{
      model: User,
      attributes: ['id',
      'username']
    }]
    })
    res.json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
  })

router.post('/', withAuth, async (req, res) => {
    try {
      const newRecord = await Record.create({
          record_name: req.body.record_name,
          genre: req.body.genre,
          price: req.body.price,
          imageUrl: req.body.imageUrl,
          user_id: req.session.user_id
      });
  
      res.status(200).json(newRecord);
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
  }
 });
 module.exports = router;