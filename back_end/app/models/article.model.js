module.exports = mongoose => {
    const Article = mongoose.model(
        "article",
        mongoose.Schema(
            {
                judul:String,
                penulis:String,
                kategori:String,
                tag: String,
                konten:String
            },
            { timestamps:true }
        )
    );
    return Article;
}