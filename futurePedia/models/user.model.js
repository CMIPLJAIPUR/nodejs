const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    full_name: {type:String},
    social_platForm_Name: {type: String },
    password: {type: String },
    email: {type: String },
    social_id: {type: String },
    token: {type: String },
    role_id: { type: String, enum: ['Admin', 'User'], default: 'User' },
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

module.exports = mongoose.model("user", schema);