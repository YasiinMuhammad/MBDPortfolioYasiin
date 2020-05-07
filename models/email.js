const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  
  name: {
    type: String,
    required: "Please enter your name"
  },

  subjectLine: {
    type: String,
    required: "subject"
  },

  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  body: {
    type: String,
    create_date: {
      type: Date,
      default: Date.now,
  },
  required: "Please enter your text into body"
  }

});

var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}