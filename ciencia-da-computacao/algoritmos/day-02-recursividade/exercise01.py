def cout_numbers_pares(n):
    count = 0
    for i in range(n+1):
        if i % 2 == 0 and i != 0:
            count += 1
    return count

