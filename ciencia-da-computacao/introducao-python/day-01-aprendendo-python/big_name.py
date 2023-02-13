def big_name(list):
    name = ""
    for names in list:
        if len(names) > len(name):
            name = names
    return name


lista = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


print(big_name(lista))
