//There are 3 types of async nature-> callback,Promise,Async&await
//they are nothing just a syntactical sugar (to avoid repeatation of code)

//Syntax
//callback
function SanketGamer(cb){
    cb("hi there")
  }
  async function main(){
    SanketGamer(function(val){
    console.log(val);
    })
  }
  main();
//
function sq(a) {
    return a * a;
  }
  function SanketGamer(a, b, cb) {
    let sq1 = cb(a);
    let sq2 = cb(b);
    return sq1 + sq2;
  }
  async function main() {
    let ans = SanketGamer(2, 3, sq);
    console.log(ans);
  }
  main();

//Promise
function sanketasyncFile(duration){
  let p=new Promise(function(resolve){
    setTimeout(function(){
      resolve();
    },duration)
  });
  return p;
}
//Promise chaining
const ans=sanketasyncFile(2000);
ans.then(function(){
  console.log("timeout is end");
  )}.then(function(){
  console.log("timeout 2nd time");
  )}

//async&await
function sanketasyncFile(duration){
    let p=new Promise(function(resolve){
      setTimeout(function(){
        resolve("Hi there!");
      },duration)
    });
    return p;
  }
  async function main(){
    const ans=await sanketasyncFile(2000);
    console.log(ans)
  }
  main();
