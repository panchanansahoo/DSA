Number = int(input("Enter number: "))

#Worst case (On^2)
# while Number >9:
#     sum =0
#     while Number != 0:
#         sum += Number % 10

#         Number =  Number // 10
#     Number = sum
# print(Number)


#Best case(o(1))
# if Number==0: print(0)
# elif Number%9 ==0:
#     print(9)
# else: print(Number%9)

if Number ==0:
    print(Number)
else: print(1+(Number-1)%9)