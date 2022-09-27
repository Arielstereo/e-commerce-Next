import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.URI_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnection;
