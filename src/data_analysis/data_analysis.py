import Word_frequency_analysis
import Sentiment_analysis

if __name__ == '__main__':
    '''
    分词
    '''
    Word_frequency_analysis.segmenting_words.run()

    '''
    统计词频
    '''
    Word_frequency_analysis.count_words.run()

    '''
    创建词云
    '''
    Word_frequency_analysis.words_cloud.run()

    '''
    情感分析
    '''
    Sentiment_analysis.run()
