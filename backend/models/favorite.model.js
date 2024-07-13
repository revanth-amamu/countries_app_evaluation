const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: true },
    currency: { type: String, required: true },
    countryCode: { type: String, required: true },
    capital: { type: String, required: true },
    languages: { type: String, required: true },
    flag: { type: String, required: true }
}, {
    versionKey: false
});

const FavoriteModel = mongoose.model("favorite", favoriteSchema);

module.exports = {
    FavoriteModel
}