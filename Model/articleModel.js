 const mongoose = require("mongoose");
let articleSchema = mongoose.Schema({
    title: String,
    image: String,
    description: String,
    status:Boolean

  });
  const Article = mongoose.model("article", articleSchema);
  module.exports =Article;