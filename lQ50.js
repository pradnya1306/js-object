// Q50.Write a Python program to convert a given dictionary into a list of lists. 
// Original Dictionary:

// Convert the said dictionary into a list of lists:
// [[1, 'red'], [2, 'green'], [3, 'black'], [4, 'white'], [5, 'black']]
// Original Dictionary:
// {'1': 'Austin Little', '2': 'Natasha Howard', '3': 'Alfred Mullins', '4': 'Jamie Rowe'}
// Convert the said dictionary into a list of lists:
// [['1', 'Austin Little'], ['2', 'Natasha Howard'], ['3', 'Alfred Mullins'], ['4', 'Jamie Rowe']]
var dic={1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
newlist=[]
for (var i in dic){
    s=[i,dic[i]]
    newlist.push(s)
}
console.log(newlist)