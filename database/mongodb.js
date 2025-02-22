import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI) {
    throw new Error("Please define the NONGODB_URI variable inside .env.<development/prduction>.local");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log(`Connected to database in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Error connecting to database.");

        process.exit(1);
    }
}


export default connectToDatabase;