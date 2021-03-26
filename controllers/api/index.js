const router = require('express').Router();
const userRoutes = require('./userRoutes');
const crateRoutes = require('./crateRoutes');

router.use('/users', userRoutes);
router.use('/crate', crateRoutes);


module.exports = router;
