const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://vyomgoel:<password>@cluster0.daqjw.mongodb.net/test";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Conected to mongoose sucessfully");
  });
};

module.exports = connectToMongo;
