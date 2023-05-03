const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    user_id: {type:String},
    product_id: {type: String },
    type: {type: String},
    heart_status: {type: String, enum:["0","1"],default:"0"},
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

module.exports = mongoose.model("favourites", schema);