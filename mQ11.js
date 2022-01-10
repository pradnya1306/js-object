word= "MISSISSIPPI"
mydic={}
for (var i of word){
    count=0
    for (var j of word){
        if (i==j){
            count+=1
            key=i
            values=count
        }
    mydic[key]=values
    }
}
console.log(mydic)