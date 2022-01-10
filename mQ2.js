let num=require("readline-sync")
var num2=num.questionInt("how many times")
var newdic={}
for (var i=1; i<=num2;i++){
newdic[i]=i*i
}
console.log(newdic)