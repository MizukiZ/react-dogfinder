const mongoose = require("./init");

const Breed = mongoose.model("Breed", {
  name: {
    type: String,
    required: true
  },
  image: String,
  description: String
});

module.exports = Breed;
