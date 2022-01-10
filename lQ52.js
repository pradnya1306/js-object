// Q52. Write a Python program to find the specified number of maximum values in a given dictionary.
// Original Dictionary:
// 1 maximum value(s) in the said dictionary:
// ['f']
// 2 maximum value(s) in the said dictionary:
// ['f', 'i']
// 5 maximum value(s) in the said dictionary:
// ['f', 'i', 'g', 'd', 'c']
var  my_dict={'a': 5, 'b': 14, 'c': 32, 'd': 35, 'e': 24, 'f': 100, 'g': 57, 'h': 8, 'i': 98}
newdic=[]
max=0
for (i in my_dict){
    if (my_dict[i]>max){
        max=my_dict[i]
        h=i
    }
}
newdic.push(h)
smax=0
for (j in my_dict){
    if (my_dict[j]!=max){
        if(my_dict[j]>smax){
            smax=my_dict[j]
            k=j
        }
    }
}
newdic.push(k)
tmax=0
for (k in my_dict){
    if(my_dict[k]!=max && my_dict[k]!=smax){
        if (my_dict[k]>tmax){
            tmax=my_dict[k]
            m=k
        }
    }
}tmax
newdic.push(m)
console.log(newdic)








