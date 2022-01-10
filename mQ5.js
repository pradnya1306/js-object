var dict={"name":"Raju", "marks":56}
var str=require("readline-sync")
var string=str.question("entre the string")
for (var i in dict){
    if (i==string){
       console.log("it is exists")
       break
    }
    else{
    console.log("it is not exists")
    break
    }
}
