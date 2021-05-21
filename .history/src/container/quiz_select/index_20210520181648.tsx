import { Radio, Table } from 'antd'
import React from 'react'

interface Props {

}

export const QuizSelect = (props: Props) => {

    const dataSource = [
        {
            key: '1',
            name: '김밥나라',
            number: 1,
            selected: 1,
        },
        {
            key: '2',
            name: '구내식당',
            number: 2,
            selected: 2,
        },
    ];

    const columns = [
        {
            title: '문제',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '번호',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: '선택',
            dataIndex: 'selected',
            key: 'selected',
            render: text => <Radio />
        },
    ];

    return (
        <div>
            <h1>Quiz Select</h1>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )
}

