
const mongoose = require('mongoose');

main().then(( )=>{
    console.log("connection is successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/store');
}


const bookSchema = new mongoose.Schema({
   
//    good way to decleared schema
title:{
    type:String,
    require:true,//compulsory  filed

} ,   
author:{
        type:String,
    },
 price:{
   type:String,
 },   
});

// creating model 
//note: wihtout creating model we can see your terminal 
const Book =  mongoose.model("Book",bookSchema);


// inserting data into model
let book1 =new Book({
    title:"RD Sharma",
    author:"navneet kasheri",
    price:500 ,
});
 
//save  into database
book1
.save()
.then((res)=>{
console.log(res);
})
.catch((err)=>{
    console.log(err);
})
