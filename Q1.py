# a=["123","1234","12345","12345","1","12345"]
# b=[]
# max=0
# for i in a:
#     g=len(i)
#     if  g>max:
#         max=g
#         h=i
    
# b.append(h)
# if h ==b[i]:
#     b.append(h)    
    
# print(b)    

# Q43.Write a Python program to create a dictionary grouping a sequence of key-value pairs into a dictionary of lists. 
# Original list:
a=[('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
# Grouping a sequence of key-value pairs into a dictionary of lists:
# {'yellow': [1, 3], 'blue': [2, 4], 'red': [1]}
# mydic={}
# for i in a:
#     newlist=[]
#     for j in i:
#         for k in i:
#             if type(j)==str:
#             # print(j)
#                 mydic.update({j:newlist})
#             else:
#                 newlist.append(j)
#             # print(j)
      
# print(mydic)
             
b=['yellow','blue','red']

for j in range(len(a)):
  l=[]  
  for k in range(len(a[j]-1)):
    #   if b[j] in a[j]:
          if b[j]==k:
             l.append(k+1)
print(l)
#   for  i==a[i][j]

