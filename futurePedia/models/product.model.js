const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {type:String},
    url: {type: String },
    category: {type: String },
    short_discription: {type: String },
    discription: {type: String },
    features: {type: String },
    pricing_category: {type: String },
    price: {type: String },
    Favourites_count: {type: Number , default:0 },
    association: {type: Boolean ,enum: [true, false]},
    image: {type: String },
    status: { type: String, enum: ["Validate",'Active', 'Inactive'], default: 'Active' },
    created_at: { type: Date, default: Date.now },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("product", schema);