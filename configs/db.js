const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      mongoose.connect(process.env.MONGO_URL);
      console.log("connect to db successfully");
    }
  } catch (err) {
    console.log("db connections erorr: ", err);
  }
};

export default connectToDb;
