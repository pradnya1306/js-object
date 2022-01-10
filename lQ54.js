// Write a Python program to convert a given list of lists to a dictionary. 
// Original list of lists:

// Convert the said list of lists to a dictionary:
// {1: ['Jean Castro', 'V'], 2: ['Lula Powell', 'V'], 3: ['Brian Howell', 'VI'], 4: ['Lynne Foster', 'VI'], 5: ['Zachary Simon', 'VII']}
var list=[[1, 'Jean Castro', 'V'], [2, 'Lula Powell', 'V'], [3, 'Brian Howell', 'VI'], [4, 'Lynne Foster', 'VI'], [5, 'Zachary Simon', 'VII']]
var newdic={}
for (var i of list){
    for (var j=0;j<i.length-2;j++){
        newdic[i[j]]=[i[j+1],i[j+2]]     
    }
}
console.log(newdic)