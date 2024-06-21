def run():
    # 分好词且去除停用词后的文本路径
    fenciTxt = 'data\小米14\小米14_fenci.txt'
    # 词频统计的文本路径
    countTxt = 'data\小米14\小米14_count.txt'

    # 打开对应文件
    fenciFile = open(fenciTxt, 'r', encoding='utf-8')
    countFile = open(countTxt, 'w', encoding='utf-8')

    # 读取全部内容并利用全模式进一步分词
    strs = fenciFile.read()
    word_list = jieba.cut(strs, cut_all=True)

    # 利用正则表达式去除数字，符号，单个字
    new_word_list = []
    for word in word_list:
        m = re.search("\d+", word)
        n = re.search("\W+", word)
        if not m and not n and len(word) > 1:
            new_word_list.append(word)

    # 统计词频，存储在一个字典中
    word_count = {}
    for word in set(new_word_list):
        word_count[word] = new_word_list.count(word)

    # 对字典进行排序
    new_word_count = sorted(word_count.items(), key=lambda a: a[1], reverse=True)

    # 写入结果（前300个词）
    for i in range(300):
        countFile.writelines(new_word_count[i][0] + '\t' + str(new_word_count[i][1]) + '\n')

    # 关闭文件
    fenciFile.close()
    countFile.close()
