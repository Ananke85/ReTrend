const { Schema } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  photo: { type: String, default: "https://res.cloudinary.com/dg63r2ufi/image/upload/v1716546609/reTrend/avatar_lffupl.png" },
  adress: { type: String },
  birthday: { type: Date },
  gender: { type: String },
});

module.exports = userSchema;
