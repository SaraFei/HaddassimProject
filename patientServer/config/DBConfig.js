import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        let connect = mongoose.connect(process.env.DB_CONNECTION||"mongodb+srv://s8581333:CjQC1zYckzSUUg5E@nodeproject.aoyd1j0.mongodb.net/");
        console.log("success", (await connect).connection.host);
    }
    catch (err) {
        console.log("cannot connect to mongoose");
        console.log(err);
        process.exit(1);
    }
}