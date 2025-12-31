num = int(input("Enter a number: "))

digit = 0
store = 0
collect = num

while num !=0: 
    digit = num % 10
    store = store *10 + digit
    num //= 10
if collect == store: 
    print("This number is a palindrome number")
else: print("This number is not a palindrome number")