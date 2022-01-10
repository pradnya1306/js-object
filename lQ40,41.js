// Q40. Write a Python program to convert more than one list to nested dictionary. 
// Nested dictionary:
// [{'S001': {'Adina Park': 85}}, {'S002': {'Leyton Marsh': 98}}, {'S003': {'Duncan Boyle': 89}}, {'S004': {'Saim Richards': 92}}]
// Q41.Write a Python program to filter the height and width of students, which are stored in a dictionary. 
// Original Dictionary:
// 
// Height > 6ft and Weight> 70kg:
// {'Cierra Vega': (6.2, 70)}

// var a=['S001', 'S002', 'S003', 'S004']
// var b=['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
// var c=[85, 98, 89, 92]
// var list=[];
// for (var i in a){
//     var dic={};
//     var dic1={};
    
//      dic[b[i]]=c[i]
//      dic1[a[i]]=dic
//      list.push(dic1)
// }
// console.log(list)

var dic={'Cierra Vega': [6.2, 70], 'Alden Cantrell': [5.9, 65], 'Kierra Gentry': [6.0, 68], 'Pierre Cox': [5.8, 66]}
for (var i in dic){
    for (var j in i){
        if ( dic[i][0]>6 && dic[i][1]>=70 ){
            console.log(i,":",dic[i])
            break
        }
    }

}
