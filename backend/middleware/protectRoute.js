import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        let token;

        // ✅ Extract token from `Authorization` header
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1]; // Get token after "Bearer"
        }

        // ❌ If no token, reject the request
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        // ✅ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ❌ If token is invalid
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        // ✅ Find the user in DB (excluding password)
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user; // Attach user to request
        next(); // ✅ Proceed to next middleware

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default protectRoute;
