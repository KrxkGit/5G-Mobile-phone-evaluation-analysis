def run():
    # 待分词的文本路径
    sourceTxt = 'data\小米14\小米14_cuchuli.txt'
    # 分好词且去除停用词后的文本路径
    fenciTxt = 'data\小米14\小米14_fenci.txt'

    # 读取停用词文件并转化为一个list
    def setstopwords(filepath):
        stopwords = [line.strip() for line in open(filepath, 'r', encoding='utf-8').readlines()]
        return stopwords

    # 分词并去除停用词
    def fenci_qustopwords(line):
        line_fenci = jieba.cut(line.strip())  # 先分词
        result = ''
        # 逐个筛除停用词
        for word in line_fenci:
            if word not in stopwords:
                if word != '\t':
                    result += word
                    result += " "
        return result

    # 打开对应文件
    sourceFile = open(sourceTxt, 'r', encoding='utf-8')
    fenciFile = open(fenciTxt, 'w', encoding='utf-8')

    # 创建停用词的list
    stopwords = setstopwords('cn_stopwords.txt')

    # 对源文件的每一行进行处理后写入到目标文件中
    for line in sourceFile:
        result = fenci_qustopwords(line)
        fenciFile.write(result + '\n')

    # 关闭文件
    sourceFile.close()
    fenciFile.close()
