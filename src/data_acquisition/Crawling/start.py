def start(page, product_id, score):
    """
    发起请求并获取指定商品评分、页码的评论数据

    参数:
    - page (int): 页码
    - product_id (int): 商品ID
    - score (int): 评论类型，4为全部评论

    返回:
    - dict: 解析后的JSON数据
    """
    url = f'https://club.jd.com/comment/productPageComments.action?&productId={product_id}&score={score}&sortType=5&page={page}&pageSize=10&isShadowSku=0&fold=1'
    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/ (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }
    time.sleep(2)
    response = requests.get(url=url, headers=headers)
    data = json.loads(response.text)
    return data