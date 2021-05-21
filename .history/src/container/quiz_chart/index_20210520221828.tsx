import React from 'react'
import ReactECharts from 'echarts-for-react';

interface Props {

}

export const QuizChart = (props: Props) => {

    const options = {
        title: {
            text: '오늘의 점심는?',
            subtext: '',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                name: '구내식당이 오늘은 제일 많네요.',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '김밥나라' },
                    { value: 735, name: '구내식당' },
                    { value: 580, name: '돈가스' },
                    { value: 484, name: '국밥' },
                    { value: 300, name: '혼밥' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <div>
            <h1>Quiz Chart</h1>
            <ReactECharts option={options} />
        </div>
    )
}
