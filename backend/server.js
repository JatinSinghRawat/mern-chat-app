import express from "express";
import dotenv from "dotenv";// to get the PORT value or others from .env file
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import connecToMongoDB from "./db/connectToMongoDb.js";
import {app, server} from './socket/socket.js'

const PORT = process.env.PORT || 5000;



dotenv.config();// to get the PORT value or others from .env file
 
app.use(express.json());//allows us to extract req.body from auth.controller.js(to parse the incoming request with JSON payload(from req.body))
app.use(cookieParser());//to parse the incoming cookies from req.body
app.use(cors({
  origin: 'http://localhost:3000',
  methods:['GET','POST','PUT','DELETE'],
  allowedHeaders:['Content-Type','Authorization'],
  credentials:true
}))

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


// app.get("/", (req,res) => {
//   //root route https://localhost:5000/
//   res.send("HelloME");
// });


server.listen(PORT, () => {
  connecToMongoDB(); 
  console.log(`Sever is running on port ${PORT}`);
});
