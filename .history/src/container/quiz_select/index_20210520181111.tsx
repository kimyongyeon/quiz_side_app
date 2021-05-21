import { Table } from 'antd'
import React from 'react'

interface Props {

}

export const QuizSelect = (props: Props) => {

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
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
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div>
            <h1>Quiz Select</h1>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )
}

