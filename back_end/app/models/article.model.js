module.exports = mongoose => {
    const Article = mongoose.model(
        "article",
        mongoose.Schema(
            {
                judul:String,
                penulis:String,
                kategori: {
                    type:String,
                    enum:["Olah Raga", "Game", "Food", "Vocation"]
                },
                tag: {
                    type:String,
                    enum:["Bola", "Mobile Legend", "Nasi Goreng", "Bali"]
                },
                konten:String
            },
            { timestamps:true }
        )
    );
    return Article;
}