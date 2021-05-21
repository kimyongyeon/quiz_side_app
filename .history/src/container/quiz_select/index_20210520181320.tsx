import { Table } from 'antd'
import React from 'react'

interface Props {

}

export const QuizSelect = (props: Props) => {

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            number: 32,
            selected: `<input type='radio />`,
        },
        {
            key: '2',
            name: 'John',
            number: 42,
            selected: '10 Downing Street',
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
        },
    ];

    return (
        <div>
            <h1>Quiz Select</h1>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )
}

