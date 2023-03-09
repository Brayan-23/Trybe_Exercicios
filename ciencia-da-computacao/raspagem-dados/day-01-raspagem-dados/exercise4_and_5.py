import requests
from parsel import Selector

four_request = requests.get('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')
parsiada = Selector(four_request.text)

title = parsiada.css('.col-sm-6 h1::text').get()
price = parsiada.css('.col-sm-6 p::text').get()[2:]
decription = parsiada.css('.product_page > p::text').get()
image = parsiada.css('.active img::attr(src)').get()
instock = parsiada.css('p.instock::text').re('\d')[0]

print(f'{title}, {price}, {decription}, {image}, {instock}')