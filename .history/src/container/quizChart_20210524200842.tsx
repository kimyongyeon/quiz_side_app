import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import Util from '../common/util';

interface Props {

}

export const QuizChart = (props: Props) => {

    const [options, setOptions] = useState({});

    useEffect(() => {
        let q = Util.localReadStringToJson('q');
        console.log(q);
        options['title']['text'] = q['user']['name'];
        options['title']['subtext'] = '';
        setOptions({
            title: {
                text: q['user']['name'],
                subtext: '오늘은 구내식당이 제일 많네요 구내식당으로~',
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
                    label: {
                        formatter: '{b}: {@[' + ']} ({d}%)'
                    },
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
        });
        return () => {
        }
    }, [])

    return (
        <div>
            <h1>Quiz Chart</h1>
            <ReactECharts option={options} />
        </div>
    )
}

