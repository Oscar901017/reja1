console.log("Web serverni boshlash");
const express = require('express');
const app = express(); // express instance yani bu orqali biz express objectni ishlatamiz


//MongoDB choqirish
const db = require("./server").db();
const new_mongodb = require("mongodb");

// 1 **KIRISH** expressga kirib kelgan codelar yoziladi
app.use(express.static("public")); // har qanday browserdan kirib kelayotgan zaproslar uchun public folder ochiq degani yani faqat public folderni clientlarga ochib beryapmiz
app.use(express.json()); // kirib kelyotgan json formatdagi datani obj holatga o'girib beradi, bu bizga kirib kelayotgan object formatdagi datani json formatga otkazib beradi
app.use(express.urlencoded({extended: true})); // buni yozmasak html formdan post qilingan malumotlarni express serverimiz ignore qiladi yani serverga kiritmaydi; HTML form post shaklida kevotgan requestlar qabul qivolamiza

// 2: Session code
// 2: Views code 
app.set("views", "views"); // yani views folderni ichidan o'qiydi
app.set("view engine", "ejs"); // view engine ejs ligini ko'rsatib beryabmiz, ejs orqali back endni ichida front end yasaymiz

// 4: Routing code
app.post('/create-item' , (req,res) => {
console.log("user entered /create-itemgit"); //tepadagi /create-item api ga kirganini aytayapti
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection('plans').insertOne({reja: new_reja }, (err, data) => {
        console.log(data.ops); 
        res.json(data.ops[0]);    
        
        // if (err) {
        //     console.log("Error:", err);
        //     res.end("Something went wrong");
        // } else {
        //     res.end("succesfully added");
        // }
    });
});
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    //console.log(id);
    db.collection("plans").deleteOne( 
        {_id: new_mongodb.ObjectId(id) }, 
        function(err,data) {
            res.json({state: "success"});
        }
    )
   //res.end("done");
});

app.get('/', function(req, res) {
    //console.log("STEP2: FronEnd => Backend");
    console.log("user entered /"); //tepadagi / api ga kirganini aytayapti
    //console.log("STEP3: Backend => Database");
    db.collection('plans').find().toArray((err, data) => {
        if (err) {
            console.log("Error:", err);
            res.status(500).send("Something went wrong");
        } else {
            // console.log(data); 
            //console.log("STEP4: Database => Backend");
            res.render('reja', {items: data});  // Pass the data to 'reja.ejs'
            //console.log("STEP5: DONE")
        }
    });
});

module.exports = app; //app ni export qilyapmiz
