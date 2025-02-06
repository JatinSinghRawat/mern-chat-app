import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res) => {
    try {
        const loggedInUserId = req.user._id
        
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");//find every user in database but 
                                                                                //not which don't have loggedInUserId 
                                                                                //it will show all user except the user(itself) on sidebar
        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.log("Error in getUserForSidebar: ", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}