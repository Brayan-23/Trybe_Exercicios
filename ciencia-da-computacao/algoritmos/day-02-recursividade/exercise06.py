def reverse(array, index):
    if index == 0:
        return [array[index]]
    return [array[index]] + reverse(array, index - 1)



array = [1, 2, 3, 4, 5]

print(reverse(array, len(array) -1))