def run():
    # 词频统计的文本路径
    countTxt = 'data\小米14\小米14_count.txt'
    # 保存的词云图片名称
    name = 'data\小米14\小米14_wordcloud.png'

    # 打开对应文件并读入内容
    strs = open(countTxt, 'r', encoding='utf-8').read()

    # 构建词云
    wc = wordcloud.WordCloud(font_path=r'C:\Windows\Fonts\simsun.ttc',
                             background_color='white',
                             width=1000,
                             height=800,
                             max_words=100,
                             ).generate(strs)
    # 保存图片
    wc.to_file(name)
