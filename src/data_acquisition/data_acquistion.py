import Crawling

if __name__ == '__main__':
    '''
    在此处输入商品ID:
    100071377749 -> 小米14
    100068388593 -> 苹果15  
    100082432028 -> 华为 
    100087971238 -> 三星
    '''
    product_id = 100042368196

    '''
    输入需要爬取的页数
    '''
    page_amount = 100

    '''
    开始爬取
    '''
    Crawling.scrape_comments(product_id, page_amount)
