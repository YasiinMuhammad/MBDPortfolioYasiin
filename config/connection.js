const mongoose = require("mongoose");

mongoose.set('useUnifiedTopology', true);

module.exports = function (databaseURL) {
  mongoose.connect(databaseURL, { useNewUrlParser: true, useCreateIndex: true }, () => console.log("connection to mongodb"));
  mongoose.Promise = Promise;
}

mongoose.connection.once('open', function () {
  // console.log('Connection made bam');
}).on('error', function (error) {
  // console.log('Connection error', error);
});
