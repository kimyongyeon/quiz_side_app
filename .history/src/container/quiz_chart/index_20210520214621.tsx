import React from 'react'
import ReactECharts from 'echarts-for-react';

interface Props {

}

export const QuizChart = (props: Props) => {

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };
      
    return (
        <div>
            <h1>Quiz Chart</h1>
        </div>
    )
}

