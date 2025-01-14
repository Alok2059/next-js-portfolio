import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://connectalokkumarsingh:7KDqbSInGdGyXTuv@cluster0.tgf4f.mongodb.net/"
    );
    console.log("connection established")
  } catch (error) {
    console.log(error);
  }
}
