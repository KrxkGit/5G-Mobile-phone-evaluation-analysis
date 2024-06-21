def excel(items, product_id):
    """
    将评论数据写入Excel文件（如不存在则创建）

    参数:
    - items (generator): 包含用户昵称、评论ID、评论内容、创建时间的元组序列
    - product_id (int): 商品ID
    """
    if not os.path.exists('output'):
        os.makedirs('output')
    new_table = f'output/OPPO Find X7.xlsx'
    wb = Workbook()
    ws = wb.active

    # 设置表头
    head_data = ['nickname', 'id', '内容', '时间','颜色','型号']
    for i in range(0, 6):
        ws.cell(row=1, column=i + 1).value = head_data[i]

    index = 2

    # 写入评论数据
    for data in items:
        for i in range(0, 6):
            print(data[i])
            ws.cell(row=index, column=i + 1).value = data[i]
        print('______________________')
        index += 1

    wb.save(new_table)


def another(items, j, product_id):
    """
    将评论数据追加到已存在的Excel文件中

    参数:
    - items (generator): 包含用户昵称、评论ID、评论内容、创建时间的元组序列
    - j (int): 当前页码
    - product_id (int): 商品ID
    """
    if not os.path.exists('output'):
        os.makedirs('output')
    new_table = f'output/OPPO Find X7.xlsx'
    index = (j - 1) * 10 + 2  # 计算起始行索引

    data = openpyxl.load_workbook(new_table)
    ws = data.active

    # 追加评论数据
    for test in items:
        for i in range(0, 6):
            print(test[i])
            ws.cell(row=index, column=i + 1).value = test[i]
        print('_______________________')
        index += 1

    data.save(new_table)