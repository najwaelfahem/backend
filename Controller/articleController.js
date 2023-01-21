const Article = require('../Model/articleModel');

module.exports={
    getarticle:(req,res)=>{

       const article = Article.find()
        .then(articles=>res.status(200).json(articles))
        .catch(error=>{res.status(500).json(error)})
        // res.json({data:article})
    },
    getarticleid:(req,res)=>{
        console.log(req.params)
        const article = Article.findById(req.params.id)
        .then(article=>res.status(200).json(article))
        .catch(error=>{res.status(500).json(error)})
        
    },
    addArticle:(req,res)=>{
        const{
            title,
            image,
            description,
            status
        }=req.body;
        console.log(req.body)
        const article = new Article({
            title:title,
            image:image,
            description:description,
            status:status
        });
       
        article.save().then(article=>res.json(article))
    //    res.json("added")
    },
    deleteArticle:(req,res)=>{
        Article.findById(req.params.id)
        .then(article=>article.remove().then(()=>res.json({success:true})))
        .catch(error=>{res.status(404).json({success:false})})
    },
    updateArticle: (req, res) => {
        Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, article) => {
              if (err) return res.status(500).send(err);
              return res.send(article);
          }
        );
      }

}