
const express=require('express');
const app=express();
const router=require('./routes/book-routes');
const mongoose=require('mongoose');
const cors=require('cors');
app.use(express.json());
app.use('/books',router);
app.use(cors());

mongoose.connect('mongodb+srv://admin:8PRYWaL8T1x1oHr3@cluster0.pxmvn.mongodb.net/bookStore?retryWrites=true&w=majority').then(()=>{
    console.log('connected to database');
}
).catch(()=>{
    console.log('error connecting to database');
});

//middleware




app.listen(3000,()=>{
    console.log('server started at port 3000');
})
//8PRYWaL8T1x1oHr3