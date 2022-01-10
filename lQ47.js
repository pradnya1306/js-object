// A Python Dictionary contains List as value. Write a Python program to clear the list values in the said dictionary. 
// Original Dictionary:
// 
// Clear the list values in the said dictionary:
// {'C1': [], 'C2': [], 'C3': []}
var dic={'C1': [10, 20, 30], 'C2': [20, 30, 40], 'C3': [12, 34]}
for (var i in dic){
    for (var j of dic[i]){
        dic[i].splice(0,3)   
    }
}
console.log(dic)