// Write a Python program to check all values are same in a dictionary. Go to the editor
// Original Dictionary:
// 
// Check all are 12 in the dictionary.
// True
// Check all are 10 in the dictionary.
// False
var dic={'Cierra Vega': 12, 'Alden Cantrell': 12, 'Kierra Gentry': 12, 'Pierre Cox': 12}
var a=dic['Cierra Vega']
count=0
count1=0
for (var i in dic){
    count+=1
        if (dic[i]==a){
    
            count1+=1
        }
    }
if (count==count1){
    console.log("true")
}
else{
    console.log("false")
}
