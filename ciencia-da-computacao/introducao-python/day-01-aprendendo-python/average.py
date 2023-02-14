def average(list):
    total = 0
    for number in list:
        total += number

    return total / len(list)


lista = [1, 2, 3, 4]

print(average(lista))
