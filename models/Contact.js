const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    // pattern: /email/g,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.Contact || mongoose.model("Contact", schema);

export default model;
