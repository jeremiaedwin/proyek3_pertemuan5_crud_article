module.exports = app => {
    const article =  require("../controllers/article.controllers.js")

    var router = require("express").Router();

    // create a new article
    router.post("/", article.create);

    // get all articles
    router.get("/", article.findAll)

    app.use("/api/article", router);
}   