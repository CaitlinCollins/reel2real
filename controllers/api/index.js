const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchRoutes = require('./searchRoutes');
const idRoutes = require('./idRoutes')

router.use('/id', idRoutes)
router.use('/users', userRoutes);
router.use('/search', searchRoutes);



module.exports = router;
