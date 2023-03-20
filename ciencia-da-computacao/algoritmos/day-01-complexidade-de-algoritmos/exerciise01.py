# Complexido do código 👇 O(n log n)
from random import random

def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False
