number = int(input("Enter number: "))

count = 0

while number != 0:
    count +=1
    number = number // 10

print(count)
