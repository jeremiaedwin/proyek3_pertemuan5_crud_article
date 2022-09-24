module.exports = app => {
    const article =  require("../controllers/article.controllers.js")

    var router = require("express").Router();

    // create a new article
    router.post("/", article.create);

    // get all articles
    router.get("/", article.findAll)

    // Retrieve a single article with id
    router.get("/:id", article.findOne);

    // Update a article with id
    router.put("/:id", article.update);

    // Delete a article with id
    router.delete("/:id", article.delete);

    app.use("/api/article", router);
}   