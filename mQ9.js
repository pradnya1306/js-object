var dic=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
    ]
newdic=[]
for (var j of dic){
    for(var i in j){
    if (!newdic.includes(j[i]))
       newdic.push(j[i])

}
}
console.log(newdic)