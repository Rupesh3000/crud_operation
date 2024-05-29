
import employModel from "../models/employSchema.js";

const editController = async (req,res) => {
    try {
        const records = await employModel.findById({"_id": req.params.id })
        
        if (records) {
            
            res.render("edit", {"records": records})
        } else {
            res.render("edit")
        }
    } catch (error) {
        console.log(error.message);
    }
}


const updateController = async (req, res) => {
    try {
        const updatedRecord = await employModel.findByIdAndUpdate(req.params.id, req.body)
        if (updatedRecord) {
            res.redirect('/')
        } else {
            res.redirect('read')
        }
    } catch (error) {
        console.log(error.message)
    }
}



const deleteController = async (req, res) => {
    try {
        const deleterecord = await employModel.findByIdAndDelete(req.params.id)
        if (deleterecord) {
            res.redirect('/')
        } else {
            res.redirect('/')
        }

    } catch (error) {

    }
}




export { editController, updateController ,deleteController}