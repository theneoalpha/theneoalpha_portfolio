const mongoose = require("mongoose");
const DB ="mongodb+srv://theneoalpha:VikashKaushik@cluster0.av3i3bq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})