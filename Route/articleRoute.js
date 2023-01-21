const express = require('express');
const router = express.Router();
const {getarticle,addArticle,deleteArticle,updateArticle,getarticleid} = require('../Controller/articleController.js');

router.get('/',getarticle);
router.post('/add',addArticle);
router.delete('/delete/:id',deleteArticle);
router.post('/update/:id',updateArticle);
router.get('/getbyid/:id',getarticleid);

module.exports = router;