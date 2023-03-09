import requests

three_request = requests.get(
    'https://scrapethissite.com/pages/advanced/?gotcha=headers',
    headers={'Accept': 'text/html', 'User-agent': 'chrome'})
print(three_request.text)
