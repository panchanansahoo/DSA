Number = int(input("Enter number: "))

sum = 0
store = Number

while store != 0:
    sum += store % 10

    store =  store // 10

if Number % sum ==0:
    print(" This number is a harsad number")
else: print("This number is not a harsad number")