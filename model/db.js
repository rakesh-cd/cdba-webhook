const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin:apple123@cluster0.w3pd5.mongodb.net/webhook-cdba?retryWrites=true&w=majority'
, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("its connected")
})

