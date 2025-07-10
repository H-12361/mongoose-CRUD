
const mongoose = require('mongoose');

main().then(( )=>{
    console.log("connection is successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

//create model or collection
const User = mongoose.model("User",userSchema); 

//update one result not show here you  want to show  updated result show here then use new:true
// example in given below see 1.1;
// User.updateOne({name:"jadu"},{age:34})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

//1.1
User.findOneAndUpdate({name:"jadu"},{age:34},{new:true})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
});




// //find method
// User.find({age:{$gt:20}}) 
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);

// });












// //insert manay
// User.insertMany([
//   {name:"Tony",email:"tony@gmail.com",age:20},
//   {name:"jadu",email:"jadu@gmial.com",age:30}
// ]).then((res)=>{
//   console.log(res);
// })





// const User1 = new User({name:"Harshit",email:"harshit@gmail.com",age:23});
// const User2 = new User({name: "yuvraj",email:"yuvi@gmail.com",age:19});
// const User3= new User({name:"Sashikant",email:"shahi@gmial.com",age:24});

// User1.save();
// User2.save();
// User3.save();