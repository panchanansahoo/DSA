number = int(input("Enter number: "))

count = 0
sum = 0
x=store = number
while number != 0:
    count +=1
    number = number // 10
while store != 0:   
    result = store % 10
    store = store // 10
    sum = sum + result ** count

if sum == x: 
    print("It is a amstrong number")
else: print("Its not a amstrong number")