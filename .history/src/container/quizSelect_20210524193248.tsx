import { Button, Radio, Table } from 'antd'
import React from 'react'
import Util from '../common/util';

interface Props {

}

export const QuizSelect = (props: Props) => {

    let dataSource: DataType[] = [
        {
            key: '1',
            name: '김밥나라',
            width: '10%',
            selected: 1,
        },
        {
            key: '2',
            name: '구내식당',
            width: '10%',
            selected: 2,
        },
    ];

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

    useEffect(() => {
        dataSource = [];
        let quizItems = Util.localReadStringToJson('q');

        let quizTitle = quizItems['user']

        return () => {
            cleanup
        }
    }, [input])

    return (
        <div>
            <h1>Quiz Select</h1>
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

