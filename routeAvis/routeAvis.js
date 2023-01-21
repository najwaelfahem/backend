const express= require('express');
const router=express.Router();
const{getAvis,addAvis,deleteAvis}=require('../controllerAvis/avisController.js');
router.get('/allavis',getAvis);
router.post('/Avis',addAvis);
router.delete('/Avis/:id',deleteAvis)
module.exports = router;