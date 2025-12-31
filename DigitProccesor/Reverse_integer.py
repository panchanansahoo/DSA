Number = int(input("Enter number: "))

sum = 0

while Number != 0:
    
    digit = Number % 10
    sum = sum*10 + digit
    Number =  Number // 10
print(sum)