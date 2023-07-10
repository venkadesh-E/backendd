import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
//import EmployeeModel from "./models/Employee.js";
import AuthRoute from "./Routes/AuthRoute.js"

const app = express();




// Middleware
 app.use(bodyParser.json({ limit: "30mb", extended: true }));
 app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
 app.use(cors())

dotenv.config();


const connect = () => {
    mongoose.connect(process.env.MON).then(() => {
        console.log("connected mongo")
    }).catch((err) => {
        throw err
    })
}
  

app.use("/auth",AuthRoute)



    app.listen(process.env.PORT, () => {
        connect()
        console.log(`${process.env.MON} is connected`)
    })