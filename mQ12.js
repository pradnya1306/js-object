// var a=["12345","12","12345","123"]
// for (var i of a){
//     max=0
//     len=i.length
//     if(len>max){
//         max=len
//         h=i
//         console.log(h)
//     }
    
// }

var dict = {

    'Alex': ['subj1', 'subj2', 'subj3'],
    
    'David': ['subj1', 'subj2']
    
    }
    
for (var i in dict){
    count=0
    for (var j of i){
        count=count+1

    }
}   
console.log(count) 

