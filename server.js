console.log("web servirni boshlash");
const express = require("express");
const http = require('http');

const app = express();

//1: Kirish koddlari
app.use(express.static("public")); 
app.use(express.json())
app.use(express.urlencoded({ externded: true}));

//2: Session bog'liq koddlar

//3  Views coddlar   
app.set("views", "views");
app.set("views engine", "ejs");

//4Routing kodlar
app.get("hello", function (req, res) {c
   res.end(`<h1 style ="background:red"> HELLO WORLD by bekzodoscor</h1>`);
});

app.get("gift", function (req, res) {c
    res.end(`<h1 style ="background:red"> Siz savgolar bulimidasiz</h1>`);
 });
const server = http.createServer(app);
let PORT= 3001;
server.listen(PORT, function () {
     console.log(`The server is running successfull on port: ${PORT}`);
});