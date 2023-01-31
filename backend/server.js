const app = require("./app")
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");
// Handling Uncaught  Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`Stutting down the server due to uncaught Exception`);
    process.exit(1);

})

//config

dotenv.config({ path: "backend/config/config.env" });
//Connecting  to data base

connectDatabase();

const server= app.listen(4000, () => {
    // console.log("server is work");
    console.log(`server is working on http://localhost:3000`);
});


// Unhandled Promise Rrjecction
process.on("unhandledRejection",err=>{
    console.log(`Error :${err.message}`);
    console.log(`Stutting down the server due to unhandled promise Reject`);
    server.close(()=>{
        process.exit(1);
    })
});

