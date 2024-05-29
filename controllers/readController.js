
import employModel from "../models/employSchema.js";

const readController = async (req, res) => {
    try {
        const records = await employModel.find({})
        if (records) {
            res.render("read", { "records": records })
        } else {
            res.render("read");
        }
    } catch (error) {
        console.log(error.massage);
    }
}

export { readController };
