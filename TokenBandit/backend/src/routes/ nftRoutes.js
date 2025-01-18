const express = require('express');
const nftController = require('../controllers/nftController');

const router = express.Router();

router.post('/mint', nftController.mintNFT);

module.exports = router;
