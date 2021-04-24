const express = require ('express');
const http = require ('http');
const bodyParser = require ('body-parser');
const mysql = require ('mysql');
const app = express();
app.use (bodyParser.json());
const pool = mysql.createPool ({
    connectLimit : 10,
    host            : '98.10.161.9',
    user            : 'demi',
    password        : 'poggers123!',
    database        : 'poggers'   
})
app.get('/', (req, res) => {
    res.send (JSON.stringify({"ALEX": "AVIER"}))
})

const PORT = process.env.PORT;
const httpServer = http.createServer (app);
httpServer.listen(PORT, () =>{
    console.log ("a");
})