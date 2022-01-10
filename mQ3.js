var mainString="My name is kumar, and my friend’s name is Dhamu"
var newstring=mainString.split(" ")
console.log(newstring)
var subString="is"
var count=0
for (var i of newstring){
    if (i==subString){
       count=count+1
    }
}
console.log(count)
