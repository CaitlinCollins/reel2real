const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchRoutes = require('./searchRoutes');
const idRoutes = require('./idRoutes')
const userCrateRoutes = require('./userCrateRoutes')


router.use('/id', idRoutes)
router.use('/users', userRoutes);
router.use('/search', searchRoutes);
router.use('/user-crates', userCrateRoutes)

module.exports = router;
