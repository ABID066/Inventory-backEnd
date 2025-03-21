
const app = require("./app")
const dotenv = require("dotenv")

dotenv.config({ path: "./config.env" })

app.listen(process.env.RUNNING_PORT, function (){
    console.log("Runnig at "+process.env.RUNNING_PORT);
});
