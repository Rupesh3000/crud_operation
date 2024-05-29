import mongoose from "mongoose";
const connectDB = async () => {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/crud_node");

    if (connect) {
        console.log("connection successfull...");
    } else {
        console.log("connection failed...");
    }
}

export default connectDB;