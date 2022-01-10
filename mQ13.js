var my_dict = {
    'a':30,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
    }
newdic=[]
max=0
for (i in my_dict){
    if (my_dict[i]>max){
        max=my_dict[i]
    }
}
newdic.push(max)
smax=0
for (j in my_dict){
    if (my_dict[j]!=max){
        if(my_dict[j]>smax){
            smax=my_dict[j]
        }
    }
}
newdic.push(smax)
tmax=0
for (k in my_dict){
    if(my_dict[k]!=max && my_dict[k]!=smax){
        if (my_dict[k]>tmax){
            tmax=my_dict[k]
        }
    }
}tmax
newdic.push(tmax)
console.log(newdic)















//     mydic=[]
// for (var i=0;i<3;i++){
//     max=0
//     for (var j in my_dict){
//         if (my_dict[j]>max){
//             max=my_dict[j]
//             h=j
//         }
//     }
//     // console.log(max)
//     mydic.push(max)
//     delete my_dict.h
// }
// console.log(mydic)
