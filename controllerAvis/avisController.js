const { json } = require('body-parser');
const Avis=require('../modelAvis/modelAvis.js');
module.exports={
getAvis:(req,res)=>{
    const avis = Avis.find()
    .then(avis=>res.status(200).json(avis))
    .catch(error=>{res.status(500).json(error)})
    // res.json({data:avis})
},
addAvis:(req,res)=>{
    const{
        createdAt,
        rate,
        comment,
        createdBy
    }=req.body;
    console.log(req.body)
    const avis = new Avis({
        createdAt:createdAt,
        rate:rate,
        comment:comment,
        createdBy:createdBy
    });
    avis.save().then(avis=>res.json(avis))
    // res.json("+++")

},
deleteAvis:(req,res)=>{
    Avis.findById(req.params.id)
    .then(avis=>avis.remove().then(()=>res.json({success:true})))
    .catch(error=>{res.status(404)})
        // .json({success:false})})
}





}