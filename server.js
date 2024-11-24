const http = require('http'); // http bu bizning core modulimiz
//const app = require ('./app') //app.js da export qilgan modulimizni ozimizga chaqiryapmiz | pastga ko'chirdik databasega errorsiz ulanganan keyn chaqirilishi uchun
const mongodb = require('mongodb');
let db;
//mongoDB connect
//MOngoDBga ulanib keyin serverni ishga tushirish kerak
const connectionString = 'mongodb+srv://Oscar:5qZBvVmhpjc5ACpn@cluster0.fjnqv.mongodb.net/reja';



mongodb.connect(connectionString,
               {useNewUrlParser: true, 
                useUnifiedTopology: true,

    }, (err,client) => {  //MongoDbga ulansa mongodb ni cleintini yani instancini olib beradi yani error mavjud bolmasa pass qiladi.
      if(err) console.log("Error: ON MongoDb connection" );
      else {
        console.log("Connected to MongoDB successfully!");
        //console.log(client); //Mongodb clientni korsa boladi 
        module.exports = client;// kelajakda clientni kop ishlatamiz shuning uchun biz clientni server.js fayldan export qilib olishimiz kerak. cleintni ichida db degan object bor shuning uchun ham clientni export qilib olamiz 
        /*biz uchun taxlab berilgan database connection object 
        client bu qaytgan narsani olib beradi yani error mavjud 
        bolmasa mongodbdan kelgan narsani olib beradi */
        const app = require ('./app') //app.js da export qilgan modulimizni ozimizga chaqiryapmiz va shu run bolyapti 
        // serverni yaratamiz va unga app ni yuklaymiz
        const server = http.createServer(app); // tuzgan app.jsni require qilyapti serverni 3000 chi portda ishga tushuryapmiz
        let PORT = 3000;
        server.listen(PORT, function() { //va 3000 chi portda listen bolyapti 
            console.log(`The server is running successfully on port: ${PORT},  http://localhost:${PORT}`);
        });    
      }
    });//ikkita narsani true holatda pass qilish kerak



 
