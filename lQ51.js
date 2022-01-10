// Q51.Write a Python program to filter even numbers from a given dictionary values. 
// Original Dictionary:

// Filter even numbers from said dictionary values:
// {'V': [4, 6, 10], 'VI': [4, 12], 'VII': [8]}
// Original Dictionary:
var dic={'V': [1, 3, 5], 'VI': [1, 5], 'VII': [2, 7, 9]}
// Filter even numbers from said dictionary values:
// {'V': [], 'VI': [], 'VII': [2]}
// var dic={'V': [1, 4, 6, 10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
newdic={}
for (var i in dic){
    newlist=[]
    for (var j of dic[i]){
        if (j%2==0){
             newlist.push(j)
        }
    newdic[i]=newlist
    }

}
console.log(newdic)