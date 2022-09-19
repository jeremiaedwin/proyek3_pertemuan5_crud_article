const db = require("../models")
const Article = db.article

// Create and save an article
exports.create = (req, res) => {
    if (!req.body.judul) {
        res.status(400).send({message: "Title can not be empty!"})
        return
    }

    const _article = Article ({
        judul:req.body.judul,
        penulis:req.body.penulis,
        kategori:req.body.kategori,
        tag:req.body.tag,
        konten:req.body.konten
    })

    _article.save(_article).then(data=>{
        res.send(data);
    })

    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}

exports.findAll = (req, res)=> {
    const article = req.query._id
    var condition = article? { article: { $regex: new RegExp(_id), $options: "i" } } : {};
    Article.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving transaksi."
        });
    });
};