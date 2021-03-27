const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const crateRoutes = require('./crateRoutes');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/crates', crateRoutes);



module.exports = router;
