// Write a Python program to convert string values of a given dictionary, into integer/float datatypes. Go to the editor
// Original list:
// 
// String values of a given dictionary, into integer types:
// [{'x': 10, 'y': 20, 'z': 30}, {'p': 40, 'q': 50, 'r': 60}]
// Original list:
// 
// String values of a given dictionary, into float types:
// [{'x': 10.12, 'y': 20.23, 'z': 30.0}, {'p': 40.0, 'q': 50.19, 'r': 60.99}]


var dic=[{'x': '10.12', 'y': '20.23', 'z': '30'}, {'p': '40.00', 'q': '50.19', 'r': '60.99'}]
// var dic=[{'x': '10', 'y': '20', 'z': '30'}, {'p': '40', 'q': '50', 'r': '60'}]
mylist=[]
for (var i of  dic){
    mydic={}
    for (var j in i){
        // mydic[j]=parseInt(i[j])
        mydic[j]=parseFloat(i[j])
    }
mylist.push(mydic)
}
console.log(mylist)