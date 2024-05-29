import express from "express";
const app = express();
import route from "./routes/routes.js";
import path from "path";
import connectDB from "./connectDB/connectDB.js";
import bodyParser from "body-parser";

// connection for database 
connectDB();

//body paser
app.use(bodyParser.urlencoded({ extended: false }));

// setup for static files 
app.use(express.static(path.join(process.cwd(), "public")))

// setup for ejs template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// routes 
app.use("/", route);


app.listen(3000, ()=> {
    console.log("sever is running..");
});