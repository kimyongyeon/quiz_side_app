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
        try {

        } catch (e) {

        }
        
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

