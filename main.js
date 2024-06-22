const image = document.querySelector(".image")
const opt = document.querySelector(".opt")
var myChart1
var myChart2
var myChart3
var myChart4
image.src = "asset/OPPO Find X7_wordcloud.png"
first_data = [0.905838041, 1 - 0.905838041]
second_data = [227, 141, 132, 85, 247, 230]
third_data = [564, 78, 314, 106]
forth_data = [152, 188, 426, 150, 146]
second_label = ['2024/01', '2024/02', '2024/03', '2024/04', '2024/05', '2024/06']
third_label = ['12GB+256GB', '16GB+256GB', '16GB+512GB', '16GB+1TB']
forth_label = ['大漠银月', '白日梦想家', '海阔天空', '星空黑', '烟云紫']
render()
opt.addEventListener("change", function () {
    switch (opt.options[opt.selectedIndex].value) {
        case "oppo":
            image.src = "asset/OPPO Find X7_wordcloud.png"
            first_data = [0.905838041, 1 - 0.905838041]
            second_data = [227, 141, 132, 85, 247, 230]
            third_data = [564, 78, 314, 106]
            forth_data = [152, 188, 426, 150, 146]
            second_label = ['2024/01', '2024/02', '2024/03', '2024/04', '2024/05', '2024/06']
            third_label = ['12GB+256GB', '16GB+256GB', '16GB+512GB', '16GB+1TB']
            forth_label = ['大漠银月', '白日梦想家', '海阔天空', '星空黑', '烟云紫']
            break;
        case "huawei":
            image.src = "asset/华为nova12_wordcloud.png"
            first_data = [0.884821428571429, 1 - 0.884821428571429]
            second_data = [504, 80, 169, 103, 190, 74]
            third_data = [497, 623]
            forth_data = [344, 390, 386]
            second_label = ['2024/01', '2024/02', '2024/03', '2024/04', '2024/05', '2024/06']
            third_label = ['256GB', '512GB']
            forth_label = ['12号色', '曜金黑', '樱语白']
            break;
        case "apple":
            image.src = "asset/苹果15_wordcloud.png"
            first_data = [0.896363636363636, 1 - 0.896363636363636]
            second_data = [1, 1, 20, 7, 15, 11, 14, 4, 598, 429]
            third_data = [189, 842, 60, 9]
            forth_data = [433, 94, 439, 134]
            second_label = ['2023/09', '2023/10', '2023/11', '2023/12', '2024/01', '2024/02', '2024/03', '2024/04', '2024/05', '2024/06']
            third_label = ['128GB', '256GB', '512GB', '1TB']
            forth_label = ['原色钛金属', '蓝色钛金属', '白色钛金属', '黑色钛金属']
            break;
        case "sanxing":
            image.src = "asset/三星s23_wordcloud.png"
            first_data = [0.871428571428571, 1 - 0.871428571428571]
            second_data = [3, 9, 6, 9, 9, 2, 4, 1, 1, 13, 2, 131, 213, 164, 98, 292, 163]
            third_data = [821, 294]
            forth_data = [327, 275, 196, 187, 44, 32, 14, 40]
            second_label = ['2023/02', '2023/03', '2023/04', '2023/05', '2023/06', '2023/07', '2023/08', '2023/09', '2023/10', '2023/11', '2023/12', '2024/01', '2024/02', '2024/03', '2024/04', '2024/05', '2024/06']
            third_label = ['8GB+256GB', '12GB+256GB']
            forth_label = ['水墨黑', '雅岩灰', '浅珀黄', '秘矿紫', '悠柔白', '悠野绿', '悠雾紫', '悠远黑']
            break;
        case "xiaomi":
            image.src = "asset/小米14_wordcloud.png"
            first_data = [0.892727272727273, 1 - 0.892727272727273]
            second_data = [19, 17, 17, 7, 265, 273, 344, 158]
            third_data = [21, 163, 694, 222]
            forth_data = [416, 372, 147, 155, 10]
            second_label = ['2023/11', '2023/12', '2024/01', '2024/02', '2024/03', '2024/04', '2024/05', '2024/06']
            third_label = ['8GB+256GB', '12GB+256GB', '16GB+512GB', '16GB+1TB']
            forth_label = ['白色', '黑色', '岩石青', '雪山粉', '定制色']
            break;
    }
    render()
    console.log(forth_label);
})

function render() {
    const comment = document.querySelector('.comment')
    const data1 = {
        labels: ['好评率', '差评率'],
        datasets: [{
            label: '占比',
            data: first_data,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)'
            ],
        }]
    };
    const config1 = {
        type: 'pie',
        data: data1,
        options: {
            responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
            maintainAspectRatio: false,// 保持图表原有比例
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };
    if (myChart1 instanceof Chart) {
        myChart1.destroy();
    }
    myChart1 = new Chart(comment, config1);

    const time = document.querySelector('.time');
    const data2 = {
        labels: second_label,  // 设置 X 轴上对应的标签
        datasets: [{
            label: '不同时间评论人数',
            data: second_data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)', // 设置线的颜色
            tension: 0.1
        }]
    };
    const config2 = {
        type: 'line', // 设置图表类型
        data: data2,
        options: {
            responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
            maintainAspectRatio: false,// 保持图表原有比例
        }
    };
    if (myChart2 instanceof Chart) {
        myChart2.destroy();
    }
    myChart2 = new Chart(time, config2);

    const model = document.querySelector('.model');
    const data3 = {
        labels: third_label,
        datasets: [{
            label: '不同型号评论人数',
            data: third_data,
            backgroundColor: [      // 设置每个柱形图的背景颜色
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [     //设置每个柱形图边框线条颜色
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1     // 设置线条宽度
        }]
    };
    const config3 = {
        type: 'bar', // 设置图表类型
        data: data3,  // 设置数据集
        options: {
            responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
            maintainAspectRatio: false,// 保持图表原有比例
            scales: {
                y: {
                    beginAtZero: true // 设置 y 轴从 0 开始
                }
            }
        },
    };
    if (myChart3 instanceof Chart) {
        myChart3.destroy();
    }
    myChart3 = new Chart(model, config3);

    const color = document.querySelector('.color');
    const data4 = {
        labels: forth_label,
        datasets: [{
            label: '不同颜色评论人数',
            data: forth_data,
            backgroundColor: [      // 设置每个柱形图的背景颜色
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [     //设置每个柱形图边框线条颜色
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1     // 设置线条宽度
        }]
    };
    const config4 = {
        type: 'bar', // 设置图表类型
        data: data4,  // 设置数据集
        options: {
            responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
            maintainAspectRatio: false,// 保持图表原有比例
            scales: {
                y: {
                    beginAtZero: true // 设置 y 轴从 0 开始
                }
            }
        },
    };
    if (myChart4 instanceof Chart) {
        myChart4.destroy();
    }
    myChart4 = new Chart(color, config4);
}

const haoping = document.querySelector('.haoping');
const data5 = {
    labels: ['拍照', '外观', '手感', '充电', '系统', '价格', '物流', '屏幕'],
    datasets: [{
        label: 'OPPO Find X7',
        data: [529, 196, 193, 147, 135, 86, 124, 246],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
        {
            label: '华为nova12',
            data: [377, 254, 222, 203, 323, 59, 113, 149],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        },
        {
            label: '苹果15',
            data: [278, 172, 174, 48, 132, 222, 196, 150],
            fill: true,
            backgroundColor: 'rgba(255, 205, 86,0.2)',
            borderColor: 'rgb(255, 205, 86)',
            pointBackgroundColor: 'rgb(255, 205, 86)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 205, 86)'
        },
        {
            label: '三星s23',
            data: [224, 139, 268, 56, 114, 55, 58, 235],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192,0.2)',
            borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgb(75, 192, 192)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(75, 192, 192)'
        },
        {
            label: '小米14',
            data: [337, 159, 274, 108, 158, 127, 147, 239],
            fill: true,
            backgroundColor: 'rgba(153, 102, 255,0.2)',
            borderColor: 'rgb(153, 102, 255)',
            pointBackgroundColor: 'rgb(153, 102, 255)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(153, 102, 255)'
        }
    ]
};
const config5 = {
    type: 'radar',
    data: data5,
    options: {
        responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
        maintainAspectRatio: false,// 保持图表原有比例
        elements: {
            line: {
                borderWidth: 3 // 设置线条宽度
            }
        }
    }
};
const myChart5 = new Chart(haoping, config5);