//import api search logic in helper folder called utils
const fetch = require("node-fetch");
const getRecordById = require("../../utils/searchById")


const router = require('express').Router();
router.get('/:masterId', async (req, res) => {
  try{
    getRecordById(res, req.params.masterId)
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;


