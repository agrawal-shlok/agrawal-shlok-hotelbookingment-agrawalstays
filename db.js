const mongoose = require ("mongoose")

var mongourl = 'mongodb+srv://shlokagrawal1405:shlok12@cluster0.rpwks.mongodb.net/AgrawalStayshotelManage'

mongoose.connect(mongourl , {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', () => {
    console.log("monogodb connection failed")
})

connection.on('connected' , () =>{
    console.log("connected successfully")
})


module.exports = mongoose