import requests


second_request = requests.get('https://api.github.com/users')
second__json = second_request.json()
for pos in second__json:
    print(f"{pos['login']} - {pos['url']}")
