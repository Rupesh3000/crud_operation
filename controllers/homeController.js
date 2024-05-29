import e from "express"
import employModel from "../models/employSchema.js"

const homeController = async (req, res) => {
    res.render("index")
}
const createController = async (req, res) => {
    const record = await employModel({
        name: req.body.name,
        post: req.body.post,
        joining: req.body.joining,
        email: req.body.email,
        contact:req.body.contact,
    });

    if (record) {
        await record.save();
        console.log("data is saved");
    } else {
        console.log("data is not");
    }
    res.render("index");

}

export {homeController , createController}