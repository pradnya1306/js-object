var a=[1,2,3,4]
var b={}
var i=1
// console.log(i)
while (i<=a.length){
    c={i:b}
    // console.log(a[i])
    b[a[i]]=c
    i+=1
}
console.log(b)
