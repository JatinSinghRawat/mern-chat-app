import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';

export const sendMessage = async(req,res) => {
    try {
        const {message}  = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id  

        
        let conversation= await Conversation.findOne({
            participants: {$all:[senderId, receiverId]},//find all the conversation with this senderId and receiverId
        })
        
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
    })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save(); this will run first
        // await newMessage.save(); this will run later

        // this will run parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        console.log("Receiver Socket ID:", receiverSocketId);
        if(receiverId){
            //io.to(<socket_id>).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message);
        res.status(500).json({error:"Internal server error"})
    }
};

export const getMessage = async(req,res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all : [senderId, userToChatId]},
        }).populate("messages");// This will help us to find the message content not only the message id

        if(!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessage controller: ",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}