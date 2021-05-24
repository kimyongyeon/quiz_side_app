import { Button, Radio, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import Util from '../common/util';

interface Props {

}

export const QuizSelect = (props: Props) => {

    let selectedItem = {
        select: {},
        userId: ''
    }

    const columns = [
        {
            title: '문항',
            dataIndex: 'name',
            key: 'name',
        }
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
            selectedItem['userId'] = 'test';
            selectedItem['select'] = selectedRowKeys[0];
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    const [title, setTitle] = useState('')
    const [datasource, setDatasource] = useState([{}])

    useEffect(() => {
        let quizItems = Util.localReadStringToJson('q');
        let quizTitle = quizItems['user']['name'];
        setTitle(quizTitle);
        let idx = 0;
        console.log(quizItems['items']['names']);
        let items: [] = [];
        quizItems['items']['names'].map((i: string) => {
            items.push({
                key: idx++,
                name: i,
                selected: 1,
                width: '!0%'
            });
        });
        setDatasource(items);

        return () => {
        }
    }, [])

    const handleClick = (e) => {
        alert('만세' + JSON.stringify(selectedItem));
        Util.localSaveJsonToString('chartData', selectedItem)
    }

    return (
        <div>
            <h1>{title}</h1>
            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }}
                dataSource={datasource} columns={columns} />

            <Button type="primary" onClick={handleClick}>
                완료
            </Button>
        </div>
    )
}

