import { Button, Radio, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import Util from '../common/util';

interface Props {

}

export const QuizSelect = (props: Props) => {

    // let dataSource: DataType[] = [
    //     {
    //         key: '1',
    //         name: '김밥나라',
    //         width: '10%',
    //         selected: 1,
    //     },
    //     {
    //         key: '2',
    //         name: '구내식당',
    //         width: '10%',
    //         selected: 2,
    //     },
    // ];

    const columns = [
        {
            title: '문항',
            dataIndex: 'name',
            key: 'name',
        },
        // {
        //     title: '번호',
        //     dataIndex: 'number',
        //     key: 'number',
        // },
    ];

    interface DataType {
        key: React.Key;
        name: string;
        selected: number;
        width: string;
    }

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    const [title, setTitle] = useState('')
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        let quizItems = Util.localReadStringToJson('q');
        let quizTitle = quizItems['user']['name'];
        setTitle(quizTitle);
        let idx = 0;
        quizItems['items']['names'].map((i: string) => {
            setDataSource([...dataSource, {
                key: idx++,
                name: i,
                width: '10%',
                selected: 1,
            }]);
        })
        return () => {
        }
    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }}
                dataSource={dataSource} columns={columns} />

            <Button type="primary">
                완료
            </Button>
        </div>
    )
}

