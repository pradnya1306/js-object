// output={
//     'sonu':85,
//     'Kartik':90,
//     'Deepak':96,
//     'Aman':76,
//     'Somesh':60,
//     'Umesh':85,
//     'Amarpal':70,
//     'Roshan':57,
//     'Riyaz':98,
//     'Shabid':56
//     }
var str=require("readline-sync")
mydic={}
for (var i=0;i<2;i++){
    var key=str.question("enter the student name")
    var value=str.questionInt("enter the marks")
    mydic[key]=value

}
console.log(mydic)