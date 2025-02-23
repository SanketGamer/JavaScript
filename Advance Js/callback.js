//callback function

//simple function
//in there we just repeat the code that which is not good thats why something we use called callback->means the functional argument to call another function. 
function sq(a){
  return a*a;
}
function cube(a){
    return a*a*a;
 }
function Sumofsq(a,b){
let s1=sq(a);
  let s2=sq(b);
 return s1+s2;
}
function Sumofcube(a,b){
let s1=cube(a);
  let s2=cube(b);
 return s1+s2;
}
const ans=Sumofsq(1,2);
const ans1=Sumofcube(1,2)
console.log(ans,ans1)

//callback this is the cleaner way to write the code
function sq(a){
  return a*a;
}
function Sumofsquare(a,b,cb){
  let s1=cb(a);
  let s2=cb(b);
  return s1+s2;
}
const res=Sumofsquare(1,2,sq)
console.log(res)

//callbackhell->it just a nested function that really hard to manage.thats why we use something call Promise/async&await
function myOwnSetTimeout(fn,duration){
  setTimeout(fn,duration);
}
myOwnSetTimeout(function(){
  console.log("log the 1st thing");
  myOwnSetTimeout(function(){
      console.log("log the 2nd thing")
  },3000)
},2000)
