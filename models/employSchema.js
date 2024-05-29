import mongoose from "mongoose";

const employSchema = new mongoose.Schema({
    "name": {
        type: String,
        require: true
    },
    "post": {
        type: String,
        require: true
    },
    "joining": {
        type: String,
        require: true
    },
    "email": {
        type: String,
        require: true
    },
    "contact": {
        type: Number,
        require: true
    }
});


const employModel = new mongoose.model("employ", employSchema);

export default employModel;