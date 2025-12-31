Number = int(input("Enter number: "))

sum = 0

while Number != 0:
    sum += Number % 10

    Number =  Number // 10
print(sum)