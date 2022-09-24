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

exports.findOne = (req,res) => {
    const id = req.params.id
    Article.findById(id).then(data => {
        if(!data)
            res.status(404).send({message: "Not found article id " + id})
        else res.send(data)
    })
    .catch(err => {
        res.status(500).send({message:"error retrieving Article with id=" + id })
    })
}

// update the articel by id
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Data to update cannot by empty!"
        })
    }

    const id = req.params.id;
    Article.findByIdAndUpdate(id, req.body, {useFindAndModify:false}).then(data=>{
        if(!data){
            res.status(404).send({
                message: `Cannot update Article with id=${id}. Maybe Article was not found!`
            });
        } else res.send({ message: "Article was updated successfully." });
    })
}

// delete article
exports.delete = (req, res) => {
    const id = req.params.id
    Article.findByIdAndRemove(id).then(data => {
        if(!data) {
            res.status(404).send({
                message: `Article with id=${id} not found`
            })
        } else {
            res.send({
                message: "Article was deleted successfully"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message:"could not delete article"
        })
    })
}