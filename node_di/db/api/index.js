const express = require('express');
const factory = require('../factory')
const router = express.Router();

router.post('/searchPainting', factory.searchPainting);
router.get('/getArtist', factory.getArtist);
router.get('/getPainting', factory.getPainting);

module.exports = router;

