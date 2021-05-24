import React, { useEffect } from 'react'
import ReactECharts from 'echarts-for-react';
import Util from '../common/util';

interface Props {

}

export const QuizChart = (props: Props) => {

    const options = ;

    const [options, setoptions] = useState(initialState)

    useEffect(() => {
        let q = Util.localReadStringToJson('q');
        options['title']['text'] = q['user']['name'];
        options['title']['subtext'] = '';
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

