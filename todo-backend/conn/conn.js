// Storing A Mongoose Module in local Variabel
const mongoose = require("mongoose");
// Storing a link of Databese in a variable
const mydbLink = "mongodb+srv://user:user@cluster0.hj9cnlt.mongodb.net/";

// this is async function for database connection 

const conn = async (req, res) => {
//  This is try catch block if the database does not connect then this block will send us a error that we define in catch block 
    try {
        await mongoose
        .connect("mongodb+srv://user:user@cluster0.hj9cnlt.mongodb.net/")
        .then(() => {
          console.log("connected");
        });
    } catch (error) {
        res.status(400).json({
            messege:"Page not Found"
        })
    }
};

conn();