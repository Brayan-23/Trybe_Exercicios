import requests


first_requision = requests.get('https://httpbin.org/encoding/utf8')
print(first_requision.text)
