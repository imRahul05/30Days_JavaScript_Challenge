n = 4
count = 0

for i in range(1, n * n ):  
    if i % 2 == 0:
        print(i)
        count += 1
    if count == 4:  
        break
