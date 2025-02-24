//asynchronous operation is Promise
//Promise-> Promise just a Syntactical sugar.it is a class that javaScript Provides you.

//Syntax
//example 1:file reading.
const fs=require("fs");
function SanketReadfile(){
  return new Promise(function(resolve){
    fs.readFile("a.txt","utf-8",function(err,data){
      resolve(data)
    })
  })
}
function onData(data){
  console.log(data)
}
SanketReadfile().then(onData)

//example 2:unsing setTimeout
function SaketTime(duration){
  let p=new Promise(function(resolve){
    setTimeout(function(){
      resolve()
    },duration)
  })
  return p;
}
function time(){
  console.log("hi there")
}
const duration=2000
SaketTime(duration).then(time)


//How to call promisified async function(.then())=>
function solve(a,b,cb){
    let val1=a*a;
    let val2=b*b;
    cb(val1+val2);
}
solve(1,2,function(value){//non promisified function
    console.log(value);
})
solve(1,2).then(function(value){//promisified calling
console.log(value)
})
