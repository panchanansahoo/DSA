Number = int(input("Enter number: "))

sum = 0
squar = Number ** 2

while squar != 0:
    sum += squar % 10

    squar =  squar // 10
if Number == sum:
    print("This is neon number")
else: print("This is not a neon number")