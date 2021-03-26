const router = require('express').Router();
const userRoutes = require('./userRoutes');
const crateRoutes = require('./crateRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/users', userRoutes);
router.use('/crate', crateRoutes);
router.use('/search', searchRoutes);

module.exports = router;
