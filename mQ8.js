var list1=["one","two","three","four","five"]

var list2=[1,2,3,4,5]
var mydic={}
for (var i in list1){
    mydic[list1[i]]=list2[i]
}
console.log(mydic)