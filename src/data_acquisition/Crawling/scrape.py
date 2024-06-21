def scrape_comments(product_id, page_amount=25):
    """
    爬取商品评论数据并写入Excel文件

    参数:
    - product_id (int): 商品ID
    - page_amount (int): 要爬取的页数
    """
    score = 3  #1差评 2中评 3好评

    j = 0
    judge = True

    for i in range(0, page_amount):
        time.sleep(1.5)
        first = start(j, product_id, score)
        test = parse(first)

        if judge:
            excel(test, product_id)
            judge = False
        else:
            another(test, j, product_id)
        print(f'第{j}页抓取完毕')
        j += 1