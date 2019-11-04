const mongoose = require("mongoose");
const { env, envConfig } = require("../config");
const mongoConnectionUri = envConfig[env].connection;

mongoose.connect(mongoConnectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
