// Write a Python program to remove a specified dictionary from a given list. 
// Original list of dictionary:
// 
// Remove id #FF0000 from the said list of dictionary:
// [{'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]

var dic=[{'id': '#FF0000', 'color': 'Red'} , {'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
for (var i of dic){
    // for (var  j in i){
        // if (i[j]==="#FF0000"){
            dic.shift()
        // }
    // }
}
console.log(dic)