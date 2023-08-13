import mongoose from "mongoose";

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongodb.");
  } catch (error) {
    console.log("Connection failed.");
    console.log(error);
  }
};

export default connectMongodb;
