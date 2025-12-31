
const User = require('../modules/userModel')

exports.AddData = async (req, res) => {
    try {
        const {name , email , age} = req.body;

        const users = await User.create({
            name , 
            email , 
            age
        })

        await users.save()

         return res.status(200).json({
            message : "User Created Successfully",
            data : users
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Something went wrong",
            error : error.message
        })
    }
}


exports.GetData = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            message : "User Fetched Successfully",
            data : users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Something went wrong",
            error : error.message
        })
    }
}


exports.GetDataById = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        return res.status(200).json({
            message : "User Fetched Successfully",
            data : users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Something went wrong",
            error : error.message
        })
    }
}

exports.UpdateData = async (req, res) => {
    try {
        const users = await User.findByIdAndUpdate(req.params.id , req.body);
        return res.status(200).json({
            message : "User Updated Successfully",
            data : users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Something went wrong",
            error : error.message
        })
    }
}

exports.DeleteData = async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "User Deleted Successfully",
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }   
};