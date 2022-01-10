// Write a Python program to create a key-value list pairings in a given dictionary. 
// Original dictionary:
// A key-value list pairings of the said dictionary:
// [{1: 'Jean Castro', 2: 'Lula Powell', 3: 'Brian Howell', 4: 'Lynne Foster', 5: 'Zachary Simon'}]

var dic={1: ['Jean Castro'], 2: ['Lula Powell'], 3: ['Brian Howell'], 4: ['Lynne Foster'], 5: ['Zachary Simon']}
var newdic={}
var newlist=[]
for (var i in dic){
    for (var j of dic[i]){
       newdic[i]=j
    }
}
newlist.push(newdic)
console.log(newlist)