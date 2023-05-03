const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {type:String},
    url: {type: String },
    category: {type: String },
    image: {type: String },
    Favourites_count: {type: Number , default:0 },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date },
    deleted_at: { type: Date },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("news", schema);