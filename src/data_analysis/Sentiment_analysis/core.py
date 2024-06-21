def run():
    # 源Excel表文件路径
    filePath = 'data\小米14\小米14_cuchuli.xlsx'
    # 目标Excel表文件路径
    targetPath = 'data\小米14\小米14_qinggan.xlsx'

    # 读取表中的所有评价数据
    df = pd.read_excel(filePath)
    df1 = df.iloc[:, 2]

    # 遍历每条评论进行预测
    values = [SnowNLP(i).sentiments for i in df1]

    # 判断好评和差评（value大于0.5属于好评，小于0.5属于差评）
    myval = []
    goodNum = 0
    badNum = 0
    for i in values:
        if (i >= 0.5):
            myval.append("好评")
            goodNum += 1
        else:
            myval.append("差评")
            badNum += 1

    # 将预测值与评价类型导入表中
    df['预测值'] = values
    df['评价类型'] = myval
    df['好评率'] = goodNum / (goodNum + badNum)

    # 将结果输出到目标Excel
    df.to_excel(targetPath)
